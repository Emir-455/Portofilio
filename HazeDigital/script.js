// DOM Yüklendikten sonra çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Değişkenler
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navigasyon = document.getElementById('navigasyon');
    const navBaglantilar = document.querySelectorAll('.nav-baglanti');
    const iletisimForm = document.getElementaById('iletisimForm');
    
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
                    // Önce tüm projeleri gizle
                    kutu.style.opacity = '0';
                    kutu.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        if (filtre === '*' || kutu.classList.contains(filtre.substring(1))) {
                            kutu.style.display = 'block';
                            setTimeout(() => {
                                kutu.style.opacity = '1';
                                kutu.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            kutu.style.display = 'none';
                        }
                    }, 200);
                });
            });
        });
    }
    
    // Typing animasyonu
    function typingAnimasyonu() {
        const meslek = document.querySelector('.meslek-baslik');
        const meslekler = ['Yazılım Geliştirici', 'Web Tasarımcı', 'Frontend Developer', 'UI/UX Designer'];
        let mevcutMeslek = 0;
        let mevcutHarf = 0;
        let silmeModunda = false;
        
        function typeWriter() {
            const metin = meslekler[mevcutMeslek];
            
            if (!silmeModunda) {
                meslek.textContent = metin.substring(0, mevcutHarf + 1);
                mevcutHarf++;
                
                if (mevcutHarf === metin.length) {
                    setTimeout(() => {
                        silmeModunda = true;
                    }, 2000);
                }
            } else {
                meslek.textContent = metin.substring(0, mevcutHarf - 1);
                mevcutHarf--;
                
                if (mevcutHarf === 0) {
                    silmeModunda = false;
                    mevcutMeslek = (mevcutMeslek + 1) % meslekler.length;
                }
            }
            
            const hiz = silmeModunda ? 50 : 100;
            setTimeout(typeWriter, hiz);
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Smooth reveal animasyonu
    function smoothRevealAnimasyonu() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        const revealElements = document.querySelectorAll('.reveal-element');
        revealElements.forEach(el => observer.observe(el));
    }
    
    // Paralaks efekti
    function paralaksEfekti() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const paralaksElementler = document.querySelectorAll('.paralaks');
            
            paralaksElementler.forEach(element => {
                const hiz = element.dataset.speed || 0.5;
                const yPos = -(scrolled * hiz);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Cursor takip efekti
    function cursorTakipEfekti() {
        // Mobil cihazlarda cursor efektini devre dışı bırak
        if (window.innerWidth <= 1024 || 'ontouchstart' in window) {
            return;
        }
        
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);
        
        let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Dot için ayrı animasyon
        function animateDot() {
            dotX += (mouseX - dotX) * 0.8;
            dotY += (mouseY - dotY) * 0.8;
            
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';
            
            requestAnimationFrame(animateDot);
        }
        animateDot();
        
        // Cursor için ayrı animasyon
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Sayfa dışına çıkınca gizle
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        });
        
        // Hover efektleri
        const hoverElements = document.querySelectorAll('a, button, .proje-kutu, .kategori-kutu, .istatistik-kutu, .bilgi-kutu, .sosyal-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorDot.classList.add('cursor-hover');
                el.style.cursor = 'none';
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorDot.classList.remove('cursor-hover');
                el.style.cursor = 'auto';
            });
        });
        
        // Text hover efekti
        const textElements = document.querySelectorAll('h1, h2, h3, p, span');
        textElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-text');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-text');
            });
        });
    }
    
    // Tilt efekti
    function tiltEfekti() {
        const tiltElements = document.querySelectorAll('.tilt-effect');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }
    
    // Sayfa geçiş animasyonu
    function sayfaGecisAnimasyonu() {
        const pageLoader = document.createElement('div');
        pageLoader.className = 'page-loader';
        pageLoader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">Portfolio</div>
                <div class="loader-progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="loader-text">Yükleniyor...</div>
            </div>
        `;
        document.body.appendChild(pageLoader);
        
        let progress = 0;
        const progressBar = pageLoader.querySelector('.progress-bar');
        
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    pageLoader.classList.add('fade-out');
                    setTimeout(() => {
                        pageLoader.remove();
                    }, 500);
                }, 500);
            }
        }, 100);
    }
    
    // Başlangıçta sayfa yüklenme animasyonu
    if (document.readyState === 'loading') {
        sayfaGecisAnimasyonu();
    }
    
    // Tüm yeni animasyon fonksiyonlarını başlat
    typingAnimasyonu();
    smoothRevealAnimasyonu();
    paralaksEfekti();
    cursorTakipEfekti();
    tiltEfekti();
    
    // Reveal elementlerine sınıf ekle
    const revealTargets = document.querySelectorAll('.kategori-kutu, .proje-kutu, .istatistik-kutu, .bilgi-kutu, .hakkimda-baslik, .proje-baslik');
    revealTargets.forEach(el => el.classList.add('reveal-element'));
    
    // Tilt efekti için sınıf ekle
    const tiltTargets = document.querySelectorAll('.proje-kutu, .kategori-kutu, .istatistik-kutu');
    tiltTargets.forEach(el => el.classList.add('tilt-effect'));
    
    // Paralaks efekti için sınıf ekle
    const paralaksTargets = document.querySelectorAll('.animasyon-halka');
    paralaksTargets.forEach((el, index) => {
        el.classList.add('paralaks');
        el.dataset.speed = (index + 1) * 0.1;
    });
    
    // Proje kutularına transition ekle
    const projeKutulari = document.querySelectorAll('.proje-kutu');
    projeKutulari.forEach(kutu => {
        kutu.style.transition = 'all 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
    });
    
    // Mobil cihazlarda cursor efektlerini devre dışı bırak
    if (window.innerWidth <= 768) {
        const customCursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        if (customCursor) customCursor.style.display = 'none';
        if (cursorDot) cursorDot.style.display = 'none';
    }
    
    // Proje sayacı
    function projeSayaci() {
        const toplamProje = document.querySelectorAll('.proje-kutu').length;
        const sayacElement = document.createElement('div');
        sayacElement.className = 'proje-sayaci';
        sayacElement.innerHTML = `<span class="sayac-sayi">${toplamProje}</span> <span class="sayac-metin">Proje</span>`;
        
        const projelerBaslik = document.querySelector('#projeler .bolum-basligi');
        projelerBaslik.appendChild(sayacElement);
        
        // Filtreleme sırasında sayacı güncelle
        const originalFiltreSistemi = projeFiltreSistemi;
        projeFiltreSistemi = function() {
            originalFiltreSistemi();
            
            const filtreButonlari = document.querySelectorAll('.filtre-buton');
            filtreButonlari.forEach(buton => {
                buton.addEventListener('click', function() {
                    setTimeout(() => {
                        const gorunenProjeler = document.querySelectorAll('.proje-kutu[style*="display: block"], .proje-kutu:not([style*="display: none"])');
                        const filtre = this.getAttribute('data-filter');
                        let sayac = 0;
                        
                        if (filtre === '*') {
                            sayac = toplamProje;
                        } else {
                            sayac = document.querySelectorAll(`.proje-kutu${filtre}`).length;
                        }
                        
                        sayacElement.querySelector('.sayac-sayi').textContent = sayac;
                    }, 250);
                });
            });
        };
    }
    
    projeSayaci();
    
    // İletişim formu işleme
    if (iletisimForm) {
        iletisimForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form gönderimi
            gonderIletisimFormu(this);
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
    
    // İletişim formu gönderme fonksiyonu
    function gonderIletisimFormu(form) {
        // Form verilerini al
        const formVerisi = new FormData(form);
        const veri = {
            ad: formVerisi.get('ad'),
            email: formVerisi.get('email'),
            konu: formVerisi.get('konu'),
            mesaj: formVerisi.get('mesaj')
        };
        
        // Basit doğrulama
        if (!veri.ad || !veri.email || !veri.konu || !veri.mesaj) {
            gosterBildirim('Lütfen tüm alanları doldurun.', 'error');
            return;
        }
        
        // Email doğrulaması
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(veri.email)) {
            gosterBildirim('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        // Mesaj uzunluğu kontrolü
        if (veri.mesaj.length < 10) {
            gosterBildirim('Mesaj çok kısa. En az 10 karakter yazın.', 'error');
            return;
        }
        
        // Buton durumunu güncelle
        const buton = form.querySelector('.form-buton');
        const eskiMetin = buton.innerHTML;
        buton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        buton.disabled = true;
        
        // AJAX ile PHP'ye gönder
        fetch('mail.php', {
            method: 'POST',
            body: formVerisi
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                gosterBildirim(data.message, 'success');
                form.reset();
            } else {
                gosterBildirim(data.message, 'error');
                if (data.errors) {
                    data.errors.forEach(error => {
                        console.error('Form Hatası:', error);
                    });
                }
            }
        })
        .catch(error => {
            console.error('Ağ Hatası:', error);
            gosterBildirim('Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
        })
        .finally(() => {
            // Buton durumunu eski haline getir
            buton.innerHTML = eskiMetin;
            buton.disabled = false;
        });
    }
    
    // Bildirim gösterme fonksiyonu
    function gosterBildirim(mesaj, tip = 'info') {
        // Mevcut bildirimleri temizle
        const mevcutBildirimler = document.querySelectorAll('.bildirim');
        mevcutBildirimler.forEach(bildirim => bildirim.remove());
        
        // Yeni bildirim oluştur
        const bildirim = document.createElement('div');
        bildirim.className = `bildirim bildirim-${tip}`;
        
        const ikon = tip === 'success' ? 'fas fa-check-circle' : 
                    tip === 'error' ? 'fas fa-exclamation-circle' : 
                    'fas fa-info-circle';
        
        bildirim.innerHTML = `
            <div class="bildirim-icerik">
                <i class="${ikon}"></i>
                <span class="bildirim-mesaj">${mesaj}</span>
                <button class="bildirim-kapat" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Sayfaya ekle
        document.body.appendChild(bildirim);
        
        // Animasyon için kısa gecikme
        setTimeout(() => {
            bildirim.classList.add('goster');
        }, 100);
        
        // Otomatik kaldırma (başarı mesajları için 5 saniye, hata için 7 saniye)
        const sure = tip === 'success' ? 5000 : 7000;
        setTimeout(() => {
            if (bildirim.parentElement) {
                bildirim.classList.remove('goster');
                setTimeout(() => {
                    bildirim.remove();
                }, 300);
            }
        }, sure);
    }
    
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