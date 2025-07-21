<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = htmlspecialchars($_POST['isim']);
    $email = htmlspecialchars($_POST['email']);
    $mesaj = htmlspecialchars($_POST['mesaj']);

    // Hedef e-posta adresin (burayı kendi adresinle değiştir)
    $alici = "hansk5552@gmail.com";

    $konu = "Web Sitenizden Yeni Mesaj Var";
    $icerik = "İsim: $isim\nEmail: $email\nMesaj:\n$mesaj";
    $baslik = "From: $email";

    if (mail($alici, $konu, $icerik, $baslik))       {
        echo "Mesajınız başarıyla gönderildi.";
    } else {
        echo "Mesaj gönderilirken hata oluştu.";
    }
} else {
    echo "Form gönderilmedi.";
}
?>
