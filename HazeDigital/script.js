// DOM Yüklendikten sonra çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Dil yöneticisini başlat
    window.languageManager = new LanguageManager();
    
    // Dark mode yöneticisini başlat
    karanlıkModBaslat();
    
    // Değişkenler
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navigasyon = document.getElementById('navigasyon');
    const navBaglantilar = document.querySelectorAll('.nav-baglanti');
    const iletisimForm = document.getElementById('iletisimForm');
    const temaDegistirButon = document.getElementById('temaDegistirButon');
    const yukariCikButon = document.getElementById('yukariCikButon');
    
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
    
    // Scroll'da navigasyon efekti ve scroll progress
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Scroll progress bar güncelle
        const scrollProgress = document.getElementById('scrollProgress');
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
        
        // Navigasyon arka plan efekti
        if (scrollTop > 50) {
            navigasyon.classList.add('scrolled');
        } else {
            navigasyon.classList.remove('scrolled');
        }
        
        // Yukarı çık butonu görünürlüğü
        if (scrollTop > 300) {
            yukariCikButon.classList.add('goster');
        } else {
            yukariCikButon.classList.remove('goster');
        }
        
        // Aktif bölümü belirleme
        aktifBolumBelirle();
        
        // Görünme animasyonları
        gorunmeAnimasyonlari();
    });
    
    // Yukarı çık butonu işlevselliği
    yukariCikButon.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    navBaglantilar.forEach(link => link.classList.remove('aktif'));
                    navLink.classList.add('aktif');
                }
            }
        });
    }
    
    // Görünme animasyonları
    function gorunmeAnimasyonlari() {
        const animasyonElementleri = document.querySelectorAll('.animasyon-element');
        
        animasyonElementleri.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('gorunur');
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
                    
                    // Animasyon gecikmesi ekle
                    setTimeout(() => {
                        bar.style.width = genislik + '%';
                        bar.style.opacity = '1';
                    }, 300);
                    
                    observer.unobserve(bar);
                }
            });
        }, {
            threshold: 0.3
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
                
                // Proje sayacını güncelle
                projeSayaciniGuncelle(filtre);
            });
        });
    }
    
    // Proje sayacını güncelle
    function projeSayaciniGuncelle(filtre) {
        const sayacElement = document.querySelector('.proje-sayaci .sayac-sayi');
        if (sayacElement) {
            const toplamProje = document.querySelectorAll('.proje-kutu').length;
            let sayac = 0;
            
            if (filtre === '*') {
                sayac = toplamProje;
            } else {
                sayac = document.querySelectorAll(`.proje-kutu${filtre}`).length;
            }
            
            sayacElement.textContent = sayac;
        }
    }
    
    // Typing animasyonu
    function yazmaAnimasyonu() {
        const meslek = document.querySelector('.meslek-baslik');
        if (!meslek) return;
        
        const meslekler = [
            'Yazılım Geliştirici', 
            'Web Tasarımcı', 
            'Frontend Developer', 
            'UI/UX Designer'
        ];
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
    
    // Proje sayacı oluştur
    function projeSayaciOlustur() {
        const toplamProje = document.querySelectorAll('.proje-kutu').length;
        const sayacElement = document.createElement('div');
        sayacElement.className = 'proje-sayaci';
        sayacElement.innerHTML = `
            <span class="sayac-sayi">${toplamProje}</span> 
            <span class="sayac-metin" data-translate="projects.project">Proje</span>
        `;
        
        const projelerBaslik = document.querySelector('#projeler .bolum-basligi');
        if (projelerBaslik) {
            projelerBaslik.appendChild(sayacElement);
        }
    }
    
    // İletişim formu işleme
    if (iletisimForm) {
        iletisimForm.addEventListener('submit', function(e) {
            e.preventDefault();
            gonderIletisimFormu(this);
        });
    }
    
    // Animasyon elementlerine sınıf ekle
    const animasyonHedefleri = document.querySelectorAll(
        '.kategori-kutu, .proje-kutu, .istatistik-kutu, .bilgi-kutu, .hakkimda-baslik'
    );
    animasyonHedefleri.forEach(el => el.classList.add('animasyon-element'));
    
    // Tüm animasyon fonksiyonlarını başlat
    istatistikAnimasyonu();
    yetenekBarAnimasyonu();
    projeFiltreSistemi();
    yazmaAnimasyonu();
    projeSayaciOlustur();
    
    // İlk yükleme için animasyonları çalıştır
    gorunmeAnimasyonlari();
    
    // İletişim formu gönderme fonksiyonu
    function gonderIletisimFormu(form) {
        const t = window.languageManager.translations[window.languageManager.currentLanguage];
        
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
            gosterBildirim(t.notifications.fillAllFields, 'error');
            return;
        }
        
        // Email doğrulaması
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(veri.email)) {
            gosterBildirim(t.notifications.invalidEmail, 'error');
            return;
        }
        
        // Mesaj uzunluğu kontrolü
        if (veri.mesaj.length < 10) {
            gosterBildirim(t.notifications.messageTooShort, 'error');
            return;
        }
        
        // Buton durumunu güncelle
        const buton = form.querySelector('.form-buton');
        const eskiMetin = buton.innerHTML;
        buton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.contact.form.sending}`;
        buton.disabled = true;
        
        // AJAX ile PHP'ye gönder
        fetch('mail.php', {
            method: 'POST',
            body: formVerisi
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                gosterBildirim(t.notifications.success, 'success');
                form.reset();
            } else {
                gosterBildirim(t.notifications.error, 'error');
                if (data.errors) {
                    data.errors.forEach(error => {
                        console.error('Form Hatası:', error);
                    });
                }
            }
        })
        .catch(error => {
            console.error('Ağ Hatası:', error);
            gosterBildirim(t.notifications.networkError, 'error');
        })
        .finally(() => {
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
        
        document.body.appendChild(bildirim);
        
        setTimeout(() => {
            bildirim.classList.add('goster');
        }, 100);
        
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
    
    // Console'da hoş geldin mesajı
    console.log(`
    🎨 Portfolyo Web Sitesi
    ✨ Türkçe sınıf isimleri ile geliştirilmiştir
    🚀 Modern teknolojiler kullanılmıştır
    📱 Mobil uyumlu responsive tasarım
    🌍 Çoklu dil desteği (TR, EN, ES, ZH)
    🌙 Dark/Light mode desteği
    
    Geliştirici: Emirhan Şık
    İletişim: hansk5552@gmail.com
    `);
});

// Karanlık Mod Yönetim Sistemi
function karanlıkModBaslat() {
    const karanlıkModDurumu = localStorage.getItem('karanlıkMod') === 'aktif';
    const temaDegistirButon = document.getElementById('temaDegistirButon');
    
    // İlk yükleme durumunu ayarla
    if (karanlıkModDurumu) {
        document.body.classList.add('karanlik-mod');
        if (temaDegistirButon) {
            temaDegistirButon.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // Toggle event listener
    if (temaDegistirButon) {
        temaDegistirButon.addEventListener('click', function() {
            karanlıkModDegistir();
        });
    }
    
    // Sistem tema tercihini kontrol et
    if (!localStorage.getItem('karanlıkMod')) {
        const sistemKaranlıkTercih = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (sistemKaranlıkTercih) {
            karanlıkModAktif();
        }
    }
    
    // Sistem tema değişikliklerini dinle
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('karanlıkMod')) {
            if (e.matches) {
                karanlıkModAktif();
            } else {
                karanlıkModPasif();
            }
        }
    });
}

function karanlıkModDegistir() {
    const karanlıkModAktifMi = document.body.classList.contains('karanlik-mod');
    
    if (karanlıkModAktifMi) {
        karanlıkModPasif();
    } else {
        karanlıkModAktif();
    }
}

function karanlıkModAktif() {
    document.body.classList.add('karanlik-mod');
    localStorage.setItem('karanlıkMod', 'aktif');
    
    const temaDegistirButon = document.getElementById('temaDegistirButon');
    if (temaDegistirButon) {
        temaDegistirButon.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Smooth transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function karanlıkModPasif() {
    document.body.classList.remove('karanlik-mod');
    localStorage.setItem('karanlıkMod', 'pasif');
    
    const temaDegistirButon = document.getElementById('temaDegistirButon');
    if (temaDegistirButon) {
        temaDegistirButon.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Smooth transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}