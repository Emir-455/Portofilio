// DOM Yüklendikten sonra çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Değişkenler
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navigasyon = document.getElementById('navigasyon');
    const navBaglantilar = document.querySelectorAll('.nav-baglanti');
    const iletisimForm = document.getElementById('iletisimForm');
    
    // Hamburger menu işlevselliği
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Navigasyon linklerine tıklandığında menu kapanması
    navBaglantilar.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll'da navigasyon efekti
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navigasyon.classList.add('scrolled');
        } else {
            navigasyon.classList.remove('scrolled');
        }
        
        // Aktif bölümü belirleme
        aktifBolumBelirle();
        
        // Görünme animasyonları
        gorunmeAnimasyonlari();
    });
    
    // Smooth scroll fonksiyonu
    navBaglantilar.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const hedefId = this.getAttribute('href');
            const hedefElement = document.querySelector(hedefId);
            
            if (hedefElement) {
                const offsetTop = hedefElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Aktif bölümü belirleme fonksiyonu
    function aktifBolumBelirle() {
        const bolumler = ['ana-sayfa', 'hakkimda', 'projeler', 'yetenekler', 'iletisim'];
        const scrollPosition = window.scrollY + 100;
        
        bolumler.forEach(bolum => {
            const element = document.getElementById(bolum);
            const navLink = document.querySelector(`a[href="#${bolum}"]`);
            
            if (element && navLink) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    // Tüm linklerden aktif sınıfını kaldır
                    navBaglantilar.forEach(link => link.classList.remove('aktif'));
                    // Mevcut linke aktif sınıfını ekle
                    navLink.classList.add('aktif');
                }
            }
        });
    }
    
    // Görünme animasyonları
    function gorunmeAnimasyonlari() {
        const animasyonElementleri = document.querySelectorAll('.fade-in');
        
        animasyonElementleri.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('görünür');
            }
        });
    }
    
    // İstatistik sayılarını animasyonlu olarak artırma
    function istatistikAnimasyonu() {
        const sayilar = document.querySelectorAll('.istatistik-sayi');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sayi = entry.target;
                    const hedef = parseInt(sayi.getAttribute('data-target'));
                    const artisHizi = hedef / 50;
                    let mevcut = 0;
                    
                    const sayac = setInterval(() => {
                        mevcut += artisHizi;
                        sayi.textContent = Math.floor(mevcut);
                        
                        if (mevcut >= hedef) {
                            sayi.textContent = hedef;
                            clearInterval(sayac);
                        }
                    }, 50);
                    
                    observer.unobserve(sayi);
                }
            });
        });
        
        sayilar.forEach(sayi => {
            observer.observe(sayi);
        });
    }
    
    // Yetenek barlarını animasyonlu olarak doldurma
    function yetenekBarAnimasyonu() {
        const yetenekBarlari = document.querySelectorAll('.yetenek-dolgu');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const genislik = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = genislik + '%';
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        });
        
        yetenekBarlari.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // Proje filtreleme sistemi
    function projeFiltreSistemi() {
        const filtreButonlari = document.querySelectorAll('.filtre-buton');
        const projeKutulari = document.querySelectorAll('.proje-kutu');
        
        filtreButonlari.forEach(buton => {
            buton.addEventListener('click', function() {
                // Aktif buton sınıfını güncelle
                filtreButonlari.forEach(btn => btn.classList.remove('aktif'));
                this.classList.add('aktif');
                
                const filtre = this.getAttribute('data-filter');
                
                projeKutulari.forEach(kutu => {
                    if (filtre === '*' || kutu.classList.contains(filtre.substring(1))) {
                        kutu.classList.remove('gizle');
                        setTimeout(() => {
                            kutu.style.display = 'block';
                        }, 100);
                    } else {
                        kutu.classList.add('gizle');
                    }
                });
            });
        });
    }
    
    // İletişim formu işleme
    if (iletisimForm) {
        iletisimForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formVerisi = new FormData(this);
            const veri = {
                ad: formVerisi.get('ad'),
                email: formVerisi.get('email'),
                konu: formVerisi.get('konu'),
                mesaj: formVerisi.get('mesaj')
            };
            
            // Basit doğrulama
            if (!veri.ad || !veri.email || !veri.konu || !veri.mesaj) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Email doğrulaması
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(veri.email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }
            
            // Buton durumunu güncelle
            const buton = this.querySelector('.form-buton');
            const eskiMetin = buton.innerHTML;
            buton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
            buton.disabled = true;
            
            // Simüle edilmiş form gönderimi (gerçek projede API çağrısı yapılır)
            setTimeout(() => {
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
                this.reset();
                buton.innerHTML = eskiMetin;
                buton.disabled = false;
            }, 2000);
        });
    }
    
    // Tüm animasyon fonksiyonlarını başlat
    istatistikAnimasyonu();
    yetenekBarAnimasyonu();
    projeFiltreSistemi();
    lazyLoadImages();
    
    // Sayfa yüklendiğinde fade-in elementlerine sınıf ekle
    const fadeElements = document.querySelectorAll('.kategori-kutu, .proje-kutu, .istatistik-kutu, .bilgi-kutu');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // İlk yükleme için animasyonları çalıştır
    gorunmeAnimasyonlari();
    
    // Lazy loading fonksiyonu
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('.lazy-image');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const placeholder = img.nextElementSibling;
                    
                    // Gerçek resim src'sini ayarla
                    img.src = img.getAttribute('data-src');
                    
                    // Resim yüklendiğinde
                    img.onload = function() {
                        img.classList.add('loaded');
                        if (placeholder && placeholder.classList.contains('image-placeholder')) {
                            placeholder.classList.add('hidden');
                        }
                    };
                    
                    // Hata durumunda
                    img.onerror = function() {
                        if (placeholder && placeholder.classList.contains('image-placeholder')) {
                            placeholder.innerHTML = '<i class="fas fa-image" style="font-size: 24px; color: #9ca3af;"></i>';
                        }
                    };
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Sayfa yukarı kaydırma fonksiyonu (isteğe bağlı)
    function sayfaYukariKaydir() {
        const yukariButon = document.createElement('button');
        yukariButon.innerHTML = '<i class="fas fa-arrow-up"></i>';
        yukariButon.className = 'yukari-buton';
        yukariButon.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--birincil-renk), var(--ikincil-renk));
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 18px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        `;
        
        document.body.appendChild(yukariButon);
        
        // Scroll'da buton görünürlüğünü kontrol et
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                yukariButon.style.opacity = '1';
                yukariButon.style.visibility = 'visible';
            } else {
                yukariButon.style.opacity = '0';
                yukariButon.style.visibility = 'hidden';
            }
        });
        
        // Buton tıklandığında sayfayı yukarı kaydır
        yukariButon.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover efekti
        yukariButon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        yukariButon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Sayfa yukarı kaydırma butonunu etkinleştir
    sayfaYukariKaydir();
    
    // Klavye navigasyonu
    document.addEventListener('keydown', function(e) {
        // ESC tuşu ile mobil menüyü kapat
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Dış tıklama ile mobil menüyü kapat
    document.addEventListener('click', function(e) {
        const isClickInsideNav = navigasyon.contains(e.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Lazy loading for images (modern tarayıcılar için)
    // Bu bölüm artık lazyLoadImages() fonksiyonu ile değiştirildi
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimize scroll event
    const optimizeScrollHandler = debounce(function() {
        aktifBolumBelirle();
        gorunmeAnimasyonlari();
    }, 10);
    
    window.addEventListener('scroll', optimizeScrollHandler);
    
    // Console'da hoş geldin mesajı
    console.log(`
    🎨 Portfolyo Web Sitesi
    ✨ Türkçe sınıf isimleri ile geliştirilmiştir
    🚀 Modern teknolojiler kullanılmıştır
    📱 Mobil uyumlu responsive tasarım
    
    Geliştirici: [Adınız Soyadınız]
    İletişim: ornek@email.com
    `);
});

// Service Worker kaydı (PWA özellikleri için - isteğe bağlı)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker kayıt başarılı: ', registration.scope);
            })
            .catch(function(err) {
                console.log('ServiceWorker kayıt başarısız: ', err);
            });
    });
}

// Dark mode toggle (isteğe bağlı özellik)
function darkModeToggle() {
    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeButton.className = 'dark-mode-toggle';
    darkModeButton.style.cssText = `
        position: fixed;
        top: 50%;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--koyu-renk);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(darkModeButton);
    
    // Sayfa yeniden yüklendiğinde dark mode durumunu koru
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Dark mode'u etkinleştir (isteğe bağlı)
// darkModeToggle();