// DOM Yüklendikten sonra çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Değişkenler
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navigasyon = document.getElementById('navigasyon');
    const navBaglantilar = document.querySelectorAll('.nav-baglanti');
    const iletisimForm = document.getElementById('iletisimForm');
    const temaDegistirButon = document.getElementById('temaDegistirButon');
    const yukariCikButon = document.getElementById('yukariCikButon');
    
    // Dil yöneticisini başlat
    dilYoneticisiniBaslat();
    
    // Sayfa yüklendiğinde mevcut dili uygula
    const mevcutDil = localStorage.getItem('secilenDil') || 'tr';
    if (window.languageManager) {
        window.languageManager.changeLanguage(mevcutDil);
    }
    
    // Karanlık mod yöneticisini başlat
    karanlıkModBaslat();
    
    // Hamburger menu işlevselliği
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navigasyon linklerine tıklandığında menu kapanması
    navBaglantilar.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
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
        if (navigasyon) {
            if (scrollTop > 50) {
                navigasyon.classList.add('scrolled');
            } else {
                navigasyon.classList.remove('scrolled');
            }
        }
        
        // Yukarı çık butonu görünürlüğü
        if (yukariCikButon) {
            if (scrollTop > 300) {
                yukariCikButon.classList.add('goster');
            } else {
                yukariCikButon.classList.remove('goster');
            }
        }
        
        // Aktif bölümü belirleme
        aktifBolumBelirle();
        
        // Görünme animasyonları
        gorunmeAnimasyonlari();
    });
    
    // Yukarı çık butonu işlevselliği
    if (yukariCikButon) {
        yukariCikButon.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
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
            });
        });
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
    
    // İlk yükleme için animasyonları çalıştır
    gorunmeAnimasyonlari();
    
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
                gosterBildirim('✅ Mesajınız başarıyla gönderildi!', 'success');
                form.reset();
            } else {
                gosterBildirim('❌ Mesaj gönderilirken bir hata oluştu.', 'error');
            }
        })
        .catch(error => {
            console.error('Ağ Hatası:', error);
            gosterBildirim('❌ Bağlantı hatası oluştu.', 'error');
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
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            if (hamburger) hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Dış tıklama ile mobil menüyü kapat
    document.addEventListener('click', function(e) {
        if (navigasyon && navMenu) {
            const isClickInsideNav = navigasyon.contains(e.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                if (hamburger) hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
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
        temaDegistirButon.title = 'Açık Moda Geç';
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
        temaDegistirButon.title = 'Karanlık Moda Geç';
    }
    
    // Smooth transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Dil Yönetim Sistemi
function dilYoneticisiniBaslat() {
    const mevcutDil = localStorage.getItem('secilenDil') || 'tr';
    const dilButon = document.getElementById('dilButon');
    const dilDropdown = document.getElementById('dilDropdown');
    const dilSecenekleri = document.querySelectorAll('.dil-secenegi');
    
    // İlk dil ayarını yap
    dilGuncelle(mevcutDil);
    
    // Dil butonu tıklama
    if (dilButon) {
        dilButon.addEventListener('click', function(e) {
            e.stopPropagation();
            if (dilDropdown) {
                dilDropdown.classList.toggle('goster');
            }
        });
    }
    
    // Dil seçeneklerine tıklama
    dilSecenekleri.forEach(secenek => {
        secenek.addEventListener('click', function() {
            const secilenDil = this.getAttribute('data-dil');
            dilGuncelle(secilenDil);
            if (dilDropdown) {
                dilDropdown.classList.remove('goster');
            }
        });
    });
    
    // Dışarı tıklandığında dropdown'u kapat
    document.addEventListener('click', function() {
        if (dilDropdown) {
            dilDropdown.classList.remove('goster');
        }
    });
}

function dilGuncelle(dil) {
    localStorage.setItem('secilenDil', dil);
    
    // Mevcut dil göstergesini güncelle
    const mevcutDilSpan = document.querySelector('.mevcut-dil');
    if (mevcutDilSpan) {
        mevcutDilSpan.textContent = dil.toUpperCase();
    }
    
    // Aktif seçeneği güncelle
    const dilSecenekleri = document.querySelectorAll('.dil-secenegi');
    dilSecenekleri.forEach(secenek => {
        secenek.classList.remove('aktif');
        if (secenek.getAttribute('data-dil') === dil) {
            secenek.classList.add('aktif');
        }
    });
    
    // Çevirileri güncelle
    ceviriGuncelle(dil);
}

// Çeviri güncelleme fonksiyonu
function ceviriGuncelle(dil) {
    if (!window.translations || !window.translations[dil]) {
        console.error('Çeviri bulunamadı:', dil);
        return;
    }
    
    const t = window.translations[dil];
    
    // Tüm data-translate elementlerini güncelle
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getCeviriByCeviriAnahtari(t, key);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Nested object'ten değer alma fonksiyonu
function getCeviriByCeviriAnahtari(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}