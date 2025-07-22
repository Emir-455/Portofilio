// Çoklu Dil Desteği - Profesyonel Çeviri Sistemi
const translations = {
    tr: {
        // Navigasyon
        nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            projects: "Projeler",
            skills: "Yetenekler",
            contact: "İletişim"
        },
        
        // Ana Sayfa
        hero: {
            greeting: "Merhaba, Ben",
            name: "Emirhan Şık",
            profession: "Yazılım Geliştirici",
            description: "Yazılım dünyasında iz bırakmak isteyen genç ve tutkulu bir geliştiriciyim. Bu sayfada kim olduğumu, neler yapmak istediğimi ve nasıl bir yolda ilerlediğimi samimi bir dille anlattım.",
            viewProjects: "Projelerimi Gör",
            getInTouch: "İletişime Geç",
            scrollDown: "Aşağı Kaydır"
        },
        
        // Hakkımda
        about: {
            title: "Hakkımda",
            subtitle: "Kim olduğumu ve neler yaptığımı öğrenin",
            greeting: "Merhaba! Ben Emirhan Şık",
            description1: "Ben Emirhan Şık. Yazılıma tutkuyla bağlı bir öğrenciyim. Henüz yolun başında olsam da hedeflerim net: Yazılım dünyasında ve ticaret alanında kendime sağlam bir yer edinmek istiyorum.",
            description2: "Kendimi her gün geliştirmeye çalışan, hızlı düşünen ve yaptığı işe özen gösteren biriyim. Oyunlara olan ilgim, beni web tasarıma yönlendirdi. Renklerle, kodlarla ve fikirlerle çalışmak bana ilham veriyor.",
            description3: "Zaman içinde fark ettim ki; sadece kod yazmak değil, aynı zamanda insanlara bir şey sunmak da beni motive ediyor. Bu yüzden portfolyo sitemi sadece kendimi tanıtmak için değil, aynı zamanda sunduğum hizmetleri paylaşmak için de oluşturuyorum.",
            description4: "Yazılım ve ticaret benim için sadece meslek değil, bir yaşam tarzı. Bu yolda kararlı adımlarla ilerliyor, her gün yeni bir şey öğrenmeye açık kalıyorum. Gelecek beni bekliyor. Ben hazırım.",
            age: "Yaş:",
            city: "Şehir:",
            experience: "Deneyim:",
            freelance: "Freelance:",
            ageValue: "17",
            cityValue: "İstanbul, Türkiye",
            experienceValue: "1 Yıl",
            freelanceValue: "Müsait",
            completedProjects: "Tamamlanan Proje",
            happyClients: "Mutlu Müşteri",
            support: "7/24 Destek",
            yearsExperience: "Yıl Deneyim",
            ribbonText: "Yeni Deneyim"
        },
        
        // Projeler
        projects: {
            title: "Projelerim",
            subtitle: "Son çalışmalarım ve başarılı projelerim",
            all: "Tümü",
            webDesign: "Web Tasarım",
            webApp: "Web Uygulama",
            ecommerce: "E-ticaret",
            project: "Proje",
            liveDemo: "Canlı Demo",
            github: "GitHub",
            projectTitles: {
                ecommerce: "Modern E-ticaret Sitesi",
                projectManagement: "Proje Yönetim Sistemi",
                corporate: "Kurumsal Web Sitesi",
                adminPanel: "E-ticaret Admin Paneli",
                blog: "Çok Dilli Blog Platformu",
                analytics: "Analitik Dashboard",
                microservices: "Mikroservis Mimarisi"
            },
            projectDescriptions: {
                ecommerce: "Kullanıcı dostu arayüz ve güvenli ödeme sistemi ile geliştirilmiş kapsamlı e-ticaret platformu. Ürün yönetimi, sepet işlemleri ve sipariş takibi özellikleri.",
                projectManagement: "Takım çalışması için geliştirilmiş kapsamlı proje yönetim platformu. Görev atama, zaman takibi, dosya paylaşımı ve gerçek zamanlı bildirimler.",
                corporate: "Şirket kimliğini yansıtan modern tasarım, SEO optimizasyonu ve çoklu dil desteği ile kurumsal web sitesi. CMS entegrasyonu ve analitik raporlama.",
                adminPanel: "Satış analitikleri, stok yönetimi ve müşteri takibi için geliştirilmiş kapsamlı admin paneli. Gerçek zamanlı raporlama ve dashboard özellikleri.",
                blog: "İçerik yönetimi ve SEO optimizasyonu ile geliştirilmiş çok dilli blog platformu. Yazar paneli, kategori yönetimi ve sosyal medya entegrasyonu.",
                analytics: "Büyük veri analizi ve görselleştirme için geliştirilmiş interaktif dashboard. Gerçek zamanlı grafikler, filtreleme ve export özellikleri.",
                microservices: "Yüksek trafikli uygulamalar için geliştirilmiş ölçeklenebilir mikroservis mimarisi. Container orchestration ve CI/CD pipeline entegrasyonu."
            }
        },
        
        // Yetenekler
        skills: {
            title: "Yeteneklerim",
            subtitle: "Uzman olduğum teknolojiler ve araçlar",
            frontend: "Frontend",
            backend: "Backend",
            database: "Veritabanı"
        },
        
        // İletişim
        contact: {
            title: "İletişim",
            subtitle: "Benimle iletişime geçin ve projelerinizi konuşalım",
            address: "Adres",
            phone: "Telefon",
            email: "E-posta",
            socialMedia: "Sosyal Medya",
            addressValue: "İstanbul, Türkiye",
            phoneValue: "+90 555 123 45 67",
            emailValue: "ornek@email.com",
            form: {
                name: "Adınız",
                email: "E-posta Adresiniz",
                subject: "Konu",
                message: "Mesajınız",
                send: "Mesaj Gönder",
                sending: "Gönderiliyor..."
            }
        },
        
        // Footer
        footer: {
            copyright: "Tüm hakları saklıdır.",
            madeWith: "❤️ ile Türkiye'de kodlandı"
        },
        
        // Bildirimler
        notifications: {
            success: "✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.",
            error: "❌ Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
            fillAllFields: "Lütfen tüm alanları doldurun.",
            invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
            messageTooShort: "Mesaj çok kısa. En az 10 karakter yazın.",
            networkError: "Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin."
        },
        
        // Butonlar
        buttons: {
            themeToggle: "Tema Değiştir",
            scrollToTop: "Yukarı Çık",
            language: "Dil"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            greeting: "Hello, I'm",
            name: "Emirhan Şık",
            profession: "Software Developer",
            description: "I'm a young and passionate developer who wants to make a mark in the software world. On this page, I sincerely explained who I am, what I want to do, and what path I'm on.",
            viewProjects: "View My Projects",
            getInTouch: "Get In Touch",
            scrollDown: "Scroll Down"
        },
        
        // About
        about: {
            title: "About Me",
            subtitle: "Learn who I am and what I do",
            greeting: "Hello! I'm Emirhan Şık",
            description1: "I'm Emirhan Şık. I'm a student passionately connected to software. Although I'm at the beginning of the road, my goals are clear: I want to establish a solid place for myself in the software world and commerce field.",
            description2: "I'm someone who tries to improve myself every day, thinks fast, and pays attention to the work I do. My interest in games led me to web design. Working with colors, codes, and ideas inspires me.",
            description3: "Over time, I realized that not only writing code but also offering something to people motivates me. That's why I'm creating my portfolio site not only to introduce myself but also to share the services I offer.",
            description4: "Software and commerce are not just professions for me, but a lifestyle. I'm moving forward with determined steps on this path, staying open to learning something new every day. The future awaits me. I'm ready.",
            age: "Age:",
            city: "City:",
            experience: "Experience:",
            freelance: "Freelance:",
            ageValue: "17",
            cityValue: "Istanbul, Turkey",
            experienceValue: "1 Year",
            freelanceValue: "Available",
            completedProjects: "Completed Projects",
            happyClients: "Happy Clients",
            support: "24/7 Support",
            yearsExperience: "Years Experience",
            ribbonText: "New Experience"
        },
        
        // Projects
        projects: {
            title: "My Projects",
            subtitle: "My latest work and successful projects",
            all: "All",
            webDesign: "Web Design",
            webApp: "Web Application",
            ecommerce: "E-commerce",
            project: "Project",
            liveDemo: "Live Demo",
            github: "GitHub",
            projectTitles: {
                ecommerce: "Modern E-commerce Site",
                projectManagement: "Project Management System",
                corporate: "Corporate Website",
                adminPanel: "E-commerce Admin Panel",
                blog: "Multilingual Blog Platform",
                analytics: "Analytics Dashboard",
                microservices: "Microservice Architecture"
            },
            projectDescriptions: {
                ecommerce: "Comprehensive e-commerce platform developed with user-friendly interface and secure payment system. Product management, cart operations, and order tracking features.",
                projectManagement: "Comprehensive project management platform developed for teamwork. Task assignment, time tracking, file sharing, and real-time notifications.",
                corporate: "Corporate website with modern design reflecting company identity, SEO optimization, and multilingual support. CMS integration and analytics reporting.",
                adminPanel: "Comprehensive admin panel developed for sales analytics, inventory management, and customer tracking. Real-time reporting and dashboard features.",
                blog: "Multilingual blog platform developed with content management and SEO optimization. Author panel, category management, and social media integration.",
                analytics: "Interactive dashboard developed for big data analysis and visualization. Real-time charts, filtering, and export features.",
                microservices: "Scalable microservice architecture developed for high-traffic applications. Container orchestration and CI/CD pipeline integration."
            }
        },
        
        // Skills
        skills: {
            title: "My Skills",
            subtitle: "Technologies and tools I specialize in",
            frontend: "Frontend",
            backend: "Backend",
            database: "Database"
        },
        
        // Contact
        contact: {
            title: "Contact",
            subtitle: "Get in touch with me and let's discuss your projects",
            address: "Address",
            phone: "Phone",
            email: "Email",
            socialMedia: "Social Media",
            addressValue: "Istanbul, Turkey",
            phoneValue: "+90 555 123 45 67",
            emailValue: "example@email.com",
            form: {
                name: "Your Name",
                email: "Your Email Address",
                subject: "Subject",
                message: "Your Message",
                send: "Send Message",
                sending: "Sending..."
            }
        },
        
        // Footer
        footer: {
            copyright: "All rights reserved.",
            madeWith: "Coded with ❤️ in Turkey"
        },
        
        // Notifications
        notifications: {
            success: "✅ Your message has been sent successfully! I'll get back to you as soon as possible.",
            error: "❌ An error occurred while sending the message. Please try again later.",
            fillAllFields: "Please fill in all fields.",
            invalidEmail: "Please enter a valid email address.",
            messageTooShort: "Message is too short. Write at least 10 characters.",
            networkError: "Connection error occurred. Please try again later."
        },
        
        // Buttons
        buttons: {
            themeToggle: "Toggle Theme",
            scrollToTop: "Scroll to Top",
            language: "Language"
        }
    },
    
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            about: "Acerca de",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto"
        },
        
        // Sección Hero
        hero: {
            greeting: "Hola, soy",
            name: "Emirhan Şık",
            profession: "Desarrollador de Software",
            description: "Soy un desarrollador joven y apasionado que quiere dejar huella en el mundo del software. En esta página, expliqué sinceramente quién soy, qué quiero hacer y en qué camino estoy.",
            viewProjects: "Ver Mis Proyectos",
            getInTouch: "Ponerse en Contacto",
            scrollDown: "Desplazar Hacia Abajo"
        },
        
        // Acerca de
        about: {
            title: "Acerca de Mí",
            subtitle: "Conoce quién soy y qué hago",
            greeting: "¡Hola! Soy Emirhan Şık",
            description1: "Soy Emirhan Şık. Soy un estudiante apasionadamente conectado al software. Aunque estoy al comienzo del camino, mis objetivos son claros: quiero establecer un lugar sólido para mí en el mundo del software y el campo del comercio.",
            description2: "Soy alguien que trata de mejorar cada día, piensa rápido y presta atención al trabajo que hago. Mi interés en los juegos me llevó al diseño web. Trabajar con colores, códigos e ideas me inspira.",
            description3: "Con el tiempo, me di cuenta de que no solo escribir código, sino también ofrecer algo a las personas me motiva. Por eso estoy creando mi sitio de portafolio no solo para presentarme, sino también para compartir los servicios que ofrezco.",
            description4: "El software y el comercio no son solo profesiones para mí, sino un estilo de vida. Avanzo con pasos decididos en este camino, manteniéndome abierto a aprender algo nuevo cada día. El futuro me espera. Estoy listo.",
            age: "Edad:",
            city: "Ciudad:",
            experience: "Experiencia:",
            freelance: "Freelance:",
            ageValue: "17",
            cityValue: "Estambul, Turquía",
            experienceValue: "1 Año",
            freelanceValue: "Disponible",
            completedProjects: "Proyectos Completados",
            happyClients: "Clientes Felices",
            support: "Soporte 24/7",
            yearsExperience: "Años de Experiencia",
            ribbonText: "Nueva Experiencia"
        },
        
        // Proyectos
        projects: {
            title: "Mis Proyectos",
            subtitle: "Mi último trabajo y proyectos exitosos",
            all: "Todos",
            webDesign: "Diseño Web",
            webApp: "Aplicación Web",
            ecommerce: "Comercio Electrónico",
            project: "Proyecto",
            liveDemo: "Demo en Vivo",
            github: "GitHub",
            projectTitles: {
                ecommerce: "Sitio de Comercio Electrónico Moderno",
                projectManagement: "Sistema de Gestión de Proyectos",
                corporate: "Sitio Web Corporativo",
                adminPanel: "Panel de Administración de Comercio Electrónico",
                blog: "Plataforma de Blog Multilingüe",
                analytics: "Panel de Análisis",
                microservices: "Arquitectura de Microservicios"
            },
            projectDescriptions: {
                ecommerce: "Plataforma integral de comercio electrónico desarrollada con interfaz fácil de usar y sistema de pago seguro. Gestión de productos, operaciones de carrito y funciones de seguimiento de pedidos.",
                projectManagement: "Plataforma integral de gestión de proyectos desarrollada para trabajo en equipo. Asignación de tareas, seguimiento de tiempo, intercambio de archivos y notificaciones en tiempo real.",
                corporate: "Sitio web corporativo con diseño moderno que refleja la identidad de la empresa, optimización SEO y soporte multilingüe. Integración CMS e informes de análisis.",
                adminPanel: "Panel de administración integral desarrollado para análisis de ventas, gestión de inventario y seguimiento de clientes. Informes en tiempo real y funciones de panel.",
                blog: "Plataforma de blog multilingüe desarrollada con gestión de contenido y optimización SEO. Panel de autor, gestión de categorías e integración de redes sociales.",
                analytics: "Panel interactivo desarrollado para análisis y visualización de big data. Gráficos en tiempo real, filtrado y funciones de exportación.",
                microservices: "Arquitectura de microservicios escalable desarrollada para aplicaciones de alto tráfico. Orquestación de contenedores e integración de pipeline CI/CD."
            }
        },
        
        // Habilidades
        skills: {
            title: "Mis Habilidades",
            subtitle: "Tecnologías y herramientas en las que me especializo",
            frontend: "Frontend",
            backend: "Backend",
            database: "Base de Datos"
        },
        
        // Contacto
        contact: {
            title: "Contacto",
            subtitle: "Ponte en contacto conmigo y hablemos de tus proyectos",
            address: "Dirección",
            phone: "Teléfono",
            email: "Correo Electrónico",
            socialMedia: "Redes Sociales",
            addressValue: "Estambul, Turquía",
            phoneValue: "+90 555 123 45 67",
            emailValue: "ejemplo@email.com",
            form: {
                name: "Tu Nombre",
                email: "Tu Dirección de Correo Electrónico",
                subject: "Asunto",
                message: "Tu Mensaje",
                send: "Enviar Mensaje",
                sending: "Enviando..."
            }
        },
        
        // Pie de página
        footer: {
            copyright: "Todos los derechos reservados.",
            madeWith: "Codificado con ❤️ en Turquía"
        },
        
        // Notificaciones
        notifications: {
            success: "✅ ¡Tu mensaje ha sido enviado exitosamente! Te responderé lo antes posible.",
            error: "❌ Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
            fillAllFields: "Por favor, completa todos los campos.",
            invalidEmail: "Por favor, ingresa una dirección de correo electrónico válida.",
            messageTooShort: "El mensaje es demasiado corto. Escribe al menos 10 caracteres.",
            networkError: "Ocurrió un error de conexión. Por favor, inténtalo de nuevo más tarde."
        },
        
        // Botones
        buttons: {
            themeToggle: "Cambiar Tema",
            scrollToTop: "Ir Arriba",
            language: "Idioma"
        }
    },
    
    zh: {
        // 导航
        nav: {
            home: "首页",
            about: "关于我",
            projects: "项目",
            skills: "技能",
            contact: "联系"
        },
        
        // 主页部分
        hero: {
            greeting: "你好，我是",
            name: "Emirhan Şık",
            profession: "软件开发者",
            description: "我是一个年轻而充满激情的开发者，希望在软件世界中留下印记。在这个页面上，我真诚地解释了我是谁，我想做什么，以及我走在什么道路上。",
            viewProjects: "查看我的项目",
            getInTouch: "联系我",
            scrollDown: "向下滚动"
        },
        
        // 关于我
        about: {
            title: "关于我",
            subtitle: "了解我是谁以及我做什么",
            greeting: "你好！我是 Emirhan Şık",
            description1: "我是 Emirhan Şık。我是一个对软件充满激情的学生。虽然我还在起步阶段，但我的目标很明确：我想在软件世界和商业领域为自己建立一个坚实的地位。",
            description2: "我是一个每天都在努力提升自己、思维敏捷、对工作认真负责的人。我对游戏的兴趣引导我走向了网页设计。与颜色、代码和想法一起工作激励着我。",
            description3: "随着时间的推移，我意识到不仅仅是编写代码，向人们提供一些东西也激励着我。这就是为什么我创建我的作品集网站不仅是为了介绍自己，也是为了分享我提供的服务。",
            description4: "软件和商业对我来说不仅仅是职业，而是一种生活方式。我在这条道路上坚定地前进，每天都保持开放的心态学习新事物。未来在等待着我。我准备好了。",
            age: "年龄：",
            city: "城市：",
            experience: "经验：",
            freelance: "自由职业：",
            ageValue: "17",
            cityValue: "伊斯坦布尔，土耳其",
            experienceValue: "1年",
            freelanceValue: "可用",
            completedProjects: "完成的项目",
            happyClients: "满意的客户",
            support: "24/7支持",
            yearsExperience: "年经验",
            ribbonText: "新体验"
        },
        
        // 项目
        projects: {
            title: "我的项目",
            subtitle: "我的最新作品和成功项目",
            all: "全部",
            webDesign: "网页设计",
            webApp: "网页应用",
            ecommerce: "电子商务",
            project: "项目",
            liveDemo: "在线演示",
            github: "GitHub",
            projectTitles: {
                ecommerce: "现代电子商务网站",
                projectManagement: "项目管理系统",
                corporate: "企业网站",
                adminPanel: "电子商务管理面板",
                blog: "多语言博客平台",
                analytics: "分析仪表板",
                microservices: "微服务架构"
            },
            projectDescriptions: {
                ecommerce: "采用用户友好界面和安全支付系统开发的综合电子商务平台。产品管理、购物车操作和订单跟踪功能。",
                projectManagement: "为团队合作开发的综合项目管理平台。任务分配、时间跟踪、文件共享和实时通知。",
                corporate: "反映公司身份的现代设计企业网站，具有SEO优化和多语言支持。CMS集成和分析报告。",
                adminPanel: "为销售分析、库存管理和客户跟踪开发的综合管理面板。实时报告和仪表板功能。",
                blog: "采用内容管理和SEO优化开发的多语言博客平台。作者面板、类别管理和社交媒体集成。",
                analytics: "为大数据分析和可视化开发的交互式仪表板。实时图表、过滤和导出功能。",
                microservices: "为高流量应用程序开发的可扩展微服务架构。容器编排和CI/CD管道集成。"
            }
        },
        
        // 技能
        skills: {
            title: "我的技能",
            subtitle: "我专长的技术和工具",
            frontend: "前端",
            backend: "后端",
            database: "数据库"
        },
        
        // 联系
        contact: {
            title: "联系",
            subtitle: "与我联系，让我们讨论您的项目",
            address: "地址",
            phone: "电话",
            email: "邮箱",
            socialMedia: "社交媒体",
            addressValue: "伊斯坦布尔，土耳其",
            phoneValue: "+90 555 123 45 67",
            emailValue: "example@email.com",
            form: {
                name: "您的姓名",
                email: "您的邮箱地址",
                subject: "主题",
                message: "您的消息",
                send: "发送消息",
                sending: "发送中..."
            }
        },
        
        // 页脚
        footer: {
            copyright: "版权所有。",
            madeWith: "在土耳其用❤️编码"
        },
        
        // 通知
        notifications: {
            success: "✅ 您的消息已成功发送！我会尽快回复您。",
            error: "❌ 发送消息时出现错误。请稍后再试。",
            fillAllFields: "请填写所有字段。",
            invalidEmail: "请输入有效的邮箱地址。",
            messageTooShort: "消息太短。请至少写10个字符。",
            networkError: "连接错误。请稍后再试。"
        },
        
        // 按钮
        buttons: {
            themeToggle: "切换主题",
            scrollToTop: "回到顶部",
            language: "语言"
        }
    }
};

// Dil Yönetim Sistemi
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
        this.translations = translations;
        this.init();
    }
    
    init() {
        this.updateContent();
    }
    
    createLanguageSelector() {
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <button class="language-toggle" id="languageToggle">
                <i class="fas fa-globe"></i>
                <span class="current-lang">${this.currentLanguage.toUpperCase()}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="language-dropdown" id="languageDropdown">
                <div class="language-option ${this.currentLanguage === 'tr' ? 'active' : ''}" data-lang="tr">
                    <img src="https://flagcdn.com/w20/tr.png" alt="Türkçe" class="flag-icon">
                    <span>Türkçe</span>
                </div>
                <div class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                    <img src="https://flagcdn.com/w20/us.png" alt="English" class="flag-icon">
                    <span>English</span>
                </div>
                <div class="language-option ${this.currentLanguage === 'es' ? 'active' : ''}" data-lang="es">
                    <img src="https://flagcdn.com/w20/es.png" alt="Español" class="flag-icon">
                    <span>Español</span>
                </div>
                <div class="language-option ${this.currentLanguage === 'zh' ? 'active' : ''}" data-lang="zh">
                    <img src="https://flagcdn.com/w20/cn.png" alt="中文" class="flag-icon">
                    <span>中文</span>
                </div>
            </div>
        `;
        
        // Navigasyona ekle
        const navContainer = document.querySelector('.nav-konteyner');
        navContainer.appendChild(languageSelector);
    }
    
    bindEvents() {
        const languageToggle = document.getElementById('languageToggle');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                this.changeLanguage(selectedLang);
                languageDropdown.classList.remove('show');
            });
        });
        
        // Dışarı tıklandığında dropdown'u kapat
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('show');
        });
    }
    
    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.updateContent();
            this.updateLanguageSelector();
            
            // Smooth transition efekti
            document.body.style.opacity = '0.7';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
        }
    }
    
    updateLanguageSelector() {
        const currentLangSpan = document.querySelector('.current-lang');
        const languageOptions = document.querySelectorAll('.language-option');
        
        currentLangSpan.textContent = this.currentLanguage.toUpperCase();
        
        languageOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === this.currentLanguage) {
                option.classList.add('active');
            }
        });
    }
    
    updateContent() {
        const t = this.translations[this.currentLanguage];
        
        // Navigasyon
        this.updateElement('[data-translate="nav.home"]', t.nav.home);
        this.updateElement('[data-translate="nav.about"]', t.nav.about);
        this.updateElement('[data-translate="nav.projects"]', t.nav.projects);
        this.updateElement('[data-translate="nav.skills"]', t.nav.skills);
        this.updateElement('[data-translate="nav.contact"]', t.nav.contact);
        
        // Ana Sayfa
        this.updateElement('[data-translate="hero.greeting"]', t.hero.greeting);
        this.updateElement('[data-translate="hero.name"]', t.hero.name);
        this.updateElement('[data-translate="hero.profession"]', t.hero.profession);
        this.updateElement('[data-translate="hero.description"]', t.hero.description);
        this.updateElement('[data-translate="hero.viewProjects"]', t.hero.viewProjects);
        this.updateElement('[data-translate="hero.getInTouch"]', t.hero.getInTouch);
        this.updateElement('[data-translate="hero.scrollDown"]', t.hero.scrollDown);
        
        // Hakkımda
        this.updateElement('[data-translate="about.title"]', t.about.title);
        this.updateElement('[data-translate="about.subtitle"]', t.about.subtitle);
        this.updateElement('[data-translate="about.greeting"]', t.about.greeting);
        this.updateElement('[data-translate="about.description1"]', t.about.description1);
        this.updateElement('[data-translate="about.description2"]', t.about.description2);
        this.updateElement('[data-translate="about.description3"]', t.about.description3);
        this.updateElement('[data-translate="about.description4"]', t.about.description4);
        this.updateElement('[data-translate="about.age"]', t.about.age);
        this.updateElement('[data-translate="about.city"]', t.about.city);
        this.updateElement('[data-translate="about.experience"]', t.about.experience);
        this.updateElement('[data-translate="about.freelance"]', t.about.freelance);
        this.updateElement('[data-translate="about.ageValue"]', t.about.ageValue);
        this.updateElement('[data-translate="about.cityValue"]', t.about.cityValue);
        this.updateElement('[data-translate="about.experienceValue"]', t.about.experienceValue);
        this.updateElement('[data-translate="about.freelanceValue"]', t.about.freelanceValue);
        this.updateElement('[data-translate="about.completedProjects"]', t.about.completedProjects);
        this.updateElement('[data-translate="about.happyClients"]', t.about.happyClients);
        this.updateElement('[data-translate="about.support"]', t.about.support);
        this.updateElement('[data-translate="about.yearsExperience"]', t.about.yearsExperience);
        this.updateElement('[data-translate="about.ribbonText"]', t.about.ribbonText);
        
        // Projeler
        this.updateElement('[data-translate="projects.title"]', t.projects.title);
        this.updateElement('[data-translate="projects.subtitle"]', t.projects.subtitle);
        this.updateElement('[data-translate="projects.all"]', t.projects.all);
        this.updateElement('[data-translate="projects.webDesign"]', t.projects.webDesign);
        this.updateElement('[data-translate="projects.webApp"]', t.projects.webApp);
        this.updateElement('[data-translate="projects.ecommerce"]', t.projects.ecommerce);
        
        // Proje başlıkları ve açıklamaları
        Object.keys(t.projects.projectTitles).forEach(key => {
            this.updateElement(`[data-translate="projects.projectTitles.${key}"]`, t.projects.projectTitles[key]);
        });
        
        Object.keys(t.projects.projectDescriptions).forEach(key => {
            this.updateElement(`[data-translate="projects.projectDescriptions.${key}"]`, t.projects.projectDescriptions[key]);
        });
        
        // Proje linkleri
        this.updateElements('[data-translate="projects.liveDemo"]', t.projects.liveDemo);
        this.updateElements('[data-translate="projects.github"]', t.projects.github);
        
        // Yetenekler
        this.updateElement('[data-translate="skills.title"]', t.skills.title);
        this.updateElement('[data-translate="skills.subtitle"]', t.skills.subtitle);
        this.updateElement('[data-translate="skills.frontend"]', t.skills.frontend);
        this.updateElement('[data-translate="skills.backend"]', t.skills.backend);
        this.updateElement('[data-translate="skills.database"]', t.skills.database);
        
        // İletişim
        this.updateElement('[data-translate="contact.title"]', t.contact.title);
        this.updateElement('[data-translate="contact.subtitle"]', t.contact.subtitle);
        this.updateElement('[data-translate="contact.address"]', t.contact.address);
        this.updateElement('[data-translate="contact.phone"]', t.contact.phone);
        this.updateElement('[data-translate="contact.email"]', t.contact.email);
        this.updateElement('[data-translate="contact.socialMedia"]', t.contact.socialMedia);
        this.updateElement('[data-translate="contact.addressValue"]', t.contact.addressValue);
        this.updateElement('[data-translate="contact.phoneValue"]', t.contact.phoneValue);
        this.updateElement('[data-translate="contact.emailValue"]', t.contact.emailValue);
        
        // Form
        this.updatePlaceholder('[data-translate="contact.form.name"]', t.contact.form.name);
        this.updatePlaceholder('[data-translate="contact.form.email"]', t.contact.form.email);
        this.updatePlaceholder('[data-translate="contact.form.subject"]', t.contact.form.subject);
        this.updatePlaceholder('[data-translate="contact.form.message"]', t.contact.form.message);
        this.updateElement('[data-translate="contact.form.send"]', t.contact.form.send);
        
        // Footer
        this.updateElement('[data-translate="footer.copyright"]', t.footer.copyright);
        this.updateElement('[data-translate="footer.madeWith"]', t.footer.madeWith);
        
        // Butonlar
        this.updateTitle('[data-translate="buttons.themeToggle"]', t.buttons.themeToggle);
        this.updateTitle('[data-translate="buttons.scrollToTop"]', t.buttons.scrollToTop);
        
        // Proje sayacını güncelle
        this.updateProjectCounter();
    }
    
    updateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    updateElements(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.textContent = text;
        });
    }
    
    updatePlaceholder(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.placeholder = text;
        }
    }
    
    updateTitle(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.title = text;
        }
    }
    
    updateProjectCounter() {
        const t = this.translations[this.currentLanguage];
        const counterText = document.querySelector('.sayac-metin');
        if (counterText) {
            counterText.textContent = t.projects.project;
        }
    }
    
    // Bildirimler için çeviri
    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        return value || key;
    }
}

// Global değişken olarak dil yöneticisini export et
window.languageManager = null;