<?php
// CORS başlıkları ekle (AJAX istekleri için)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// OPTIONS isteği için
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Sadece POST isteklerini kabul et
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Sadece POST istekleri kabul edilir.'
    ]);
    exit();
}

// Form verilerini al ve temizle
$ad = isset($_POST['ad']) ? htmlspecialchars(trim($_POST['ad'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$konu = isset($_POST['konu']) ? htmlspecialchars(trim($_POST['konu'])) : '';
$mesaj = isset($_POST['mesaj']) ? htmlspecialchars(trim($_POST['mesaj'])) : '';

// Basit doğrulama
$hatalar = [];

if (empty($ad)) {
    $hatalar[] = 'Ad alanı boş olamaz.';
}

if (empty($email)) {
    $hatalar[] = 'E-posta alanı boş olamaz.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $hatalar[] = 'Geçerli bir e-posta adresi girin.';
}

if (empty($konu)) {
    $hatalar[] = 'Konu alanı boş olamaz.';
}

if (empty($mesaj)) {
    $hatalar[] = 'Mesaj alanı boş olamaz.';
}

// Spam koruması - basit kontroller
if (strlen($mesaj) < 10) {
    $hatalar[] = 'Mesaj çok kısa. En az 10 karakter olmalı.';
}

if (strlen($mesaj) > 1000) {
    $hatalar[] = 'Mesaj çok uzun. En fazla 1000 karakter olmalı.';
}

// Hata varsa döndür
if (!empty($hatalar)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Form doğrulama hataları:',
        'errors' => $hatalar
    ]);
    exit();
}

// E-posta ayarları
$alici = "hansk5552@gmail.com"; // Buraya kendi e-posta adresinizi yazın
$mail_konusu = "Portfolio Sitesinden Yeni Mesaj: " . $konu;

// E-posta içeriği (HTML formatında)
$mail_icerik = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
        .label { font-weight: bold; color: #2563eb; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #2563eb; margin: 15px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🎨 Portfolio Sitesinden Yeni Mesaj</h2>
        </div>
        <div class='content'>
            <div class='info-row'>
                <span class='label'>👤 Gönderen:</span> {$ad}
            </div>
            <div class='info-row'>
                <span class='label'>📧 E-posta:</span> {$email}
            </div>
            <div class='info-row'>
                <span class='label'>📝 Konu:</span> {$konu}
            </div>
            <div class='info-row'>
                <span class='label'>📅 Tarih:</span> " . date('d.m.Y H:i:s') . "
            </div>
            <div class='message-box'>
                <h3>💬 Mesaj:</h3>
                <p>" . nl2br($mesaj) . "</p>
            </div>
            <hr>
            <p><small>Bu mesaj portfolio sitenizden otomatik olarak gönderilmiştir.</small></p>
        </div>
    </div>
</body>
</html>
";

// E-posta başlıkları
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Portfolio Site <noreply@' . $_SERVER['HTTP_HOST'] . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 3',
    'Return-Path: noreply@' . $_SERVER['HTTP_HOST']
);

// E-postayı gönder
$mail_gonderildi = mail($alici, $mail_konusu, $mail_icerik, implode("\r\n", $headers));

if ($mail_gonderildi) {
    // Başarılı yanıt
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
    ]);
    
    // Log dosyasına kaydet (isteğe bağlı)
    $log_mesaj = date('Y-m-d H:i:s') . " - Yeni mesaj: {$ad} ({$email}) - {$konu}\n";
    file_put_contents('contact_log.txt', $log_mesaj, FILE_APPEND | LOCK_EX);
    
} else {
    // Hata yanıtı
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => '❌ Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    ]);
    
    // Hata loguna kaydet
    $error_log = date('Y-m-d H:i:s') . " - Mail gönderme hatası: {$ad} ({$email})\n";
    file_put_contents('mail_errors.txt', $error_log, FILE_APPEND | LOCK_EX);
}
?>