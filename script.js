// ==============================================
// ViaDesign Portfolio - Main JavaScript (Vivid Version)
// ==============================================

// ============== PORTFOLIO DATA ==============
// SECTION GRAPHIQUE
const graphicPortfolio = [
    {
        id: 202501,
        category: 'streaming',
        title: 'Podcast Alikpak',
        description: 'Design pour podcast : Parlons de Foi, d\'Affaires, d\'Argent',
        image: 'assets/graphic-2025-1.jpg'
    },
    {
        id: 202502,
        category: 'vente',
        title: 'Pack Créativité',
        description: 'Promotion pack ressources design & mockups',
        image: 'assets/graphic-2025-2.jpg'
    },
    {
        id: 202503,
        category: 'beaute',
        title: 'Crown & Glow Beauty',
        description: 'Identité visuelle salon : Votre Beauté, Votre Couronne',
        image: 'assets/graphic-2025-3.jpg'
    },
    {
        id: 202504,
        category: 'cuisine',
        title: 'Restaurant Vient Tchop',
        description: 'Affiche publicitaire pour restaurant local',
        image: 'assets/graphic-2025-4.jpg'
    },
    {
        id: 202505,
        category: 'cuisine',
        title: 'Menu Taro',
        description: 'Design de menu détaillé avec tarifs',
        image: 'assets/graphic-2025-5.jpg'
    },
    {
        id: 202506,
        category: 'vente',
        title: 'Pressing ProClean',
        description: 'Service de blanchisserie professionnelle',
        image: 'assets/graphic-2025-6.jpg'
    },
    {
        id: 202507,
        category: 'cuisine',
        title: 'Chez Vicky',
        description: 'Promotion "Venez Manger" à petit prix',
        image: 'assets/graphic-2025-7.jpg'
    },
    {
        id: 202508,
        category: 'evenement',
        title: 'Vœux de Décembre',
        description: 'Visuel festif pour la fin d\'année',
        image: 'assets/graphic-2025-8.jpg'
    },
    {
        id: 202509,
        category: 'cuisine',
        title: 'Fried Rice Belingua',
        description: 'Packaging design pour produit alimentaire',
        image: 'assets/graphic-2025-9.jpg'
    },
    {
        id: 202510,
        category: 'cuisine',
        title: 'Menu Complet',
        description: 'Carte de restaurant : Plats Africains & Cocktails',
        image: 'assets/graphic-2025-10.jpg'
    },
    {
        id: 202511,
        category: 'evenement',
        title: 'Conférence Santé',
        description: 'Poster pour conférence médicale à Malabo',
        image: 'assets/graphic-2025-11.jpg'
    },
    {
        id: 202512,
        category: 'business',
        title: 'Simplicité Design',
        description: 'Communication d\'agence sur le style épuré',
        image: 'assets/graphic-2025-12.jpg'
    },
    {
        id: 202513,
        category: 'sport',
        title: 'Fitness Élégane',
        description: 'Visuel inspirant pour marque de sport',
        image: 'assets/graphic-2025-13.jpg'
    },
    {
        id: 202514,
        category: 'business',
        title: 'Conseils Design',
        description: 'Infographie : Les erreurs à éviter',
        image: 'assets/graphic-2025-14.jpg'
    },
    {
        id: 202515,
        category: 'business',
        title: 'Synergie Business',
        description: 'Marketing stratégique pour rentabilité',
        image: 'assets/graphic-2025-15.png'
    }
];

// SECTION WEB
const webPortfolio = [
    {
        id: 101,
        title: 'Elgoz Media',
        description: 'Site vitrine immersif pour agence média',
        image: 'https://picsum.photos/seed/media/800/600',
        link: 'https://www.elgoz.media/'
    },
    {
        id: 102,
        title: 'Documentation Technique',
        description: 'Interface de documentation type Tailwind',
        image: 'https://picsum.photos/seed/code/800/600',
        link: 'https://tailwindcss.com/docs/installation/using-vite'
    },
    {
        id: 103,
        title: 'Galerie Culinaire',
        description: 'Moteur de recherche d\'images (Style Pixabay)',
        image: 'https://picsum.photos/seed/food/800/600',
        link: 'https://pixabay.com/fr/images/search/repas%20de%20midi/'
    },
    {
        id: 104,
        title: 'Téléchargement App',
        description: 'Landing page optimisée (Style GitHub)',
        image: 'https://picsum.photos/seed/tech/800/600',
        link: 'https://desktop.github.com/download/'
    }
];


// ============== INITIALIZATION ==============
// Instances globales d'optimisation
let lazyLoader;
let dataCache;
let rateLimiter;
let preloader;
let perfMonitor;

document.addEventListener('DOMContentLoaded', function () {
    // Initialiser les outils de performance
    initPerformanceTools();

    // Initialiser les fonctionnalités
    initNavigation();
    loadGraphicPortfolio();
    loadWebPortfolio();
    initCategoryFilter();
    initContactForm();
    initScrollAnimations();
    initTypewriterEffect();
    initMouseParallaxOptimized(); // Version optimisée
    initLightbox();

    // Précharger les images importantes
    preloadCriticalAssets();
});

// ============== OUTILS DE PERFORMANCE ==============
function initPerformanceTools() {
    // Cache des données (5 minutes)
    dataCache = new window.PerformanceUtils.DataCache(300000);

    // Rate limiter (100 requêtes par minute)
    rateLimiter = new window.PerformanceUtils.RateLimiter(100, 60000);

    // Lazy loading des images
    lazyLoader = new window.PerformanceUtils.LazyImageLoader({
        rootMargin: '100px',
        threshold: 0.01
    });

    // Préchargeur de ressources
    preloader = new window.PerformanceUtils.ResourcePreloader();

    // Moniteur de performance
    perfMonitor = new window.PerformanceUtils.PerformanceMonitor();
    perfMonitor.init();

    console.log('⚡ Performance tools initialized');
}

// Précharger les assets critiques
function preloadCriticalAssets() {
    // Précharger les premières images du portfolio
    const criticalImages = [
        'assets/graphic-prime.jpg',
        'assets/graphic-chicken.jpg',
        'assets/graphic-fashion.png'
    ];

    preloader.preloadImages(criticalImages).then(() => {
        console.log('✅ Critical assets preloaded');
    }).catch(err => {
        console.warn('⚠️ Some assets failed to preload:', err);
    });
}

// ============== TYPEWRITER EFFECT ==============
function initTypewriterEffect() {
    const textElement = document.querySelector('.hero-description');
    if (!textElement) return;

    const fullText = textElement.textContent.trim();
    textElement.textContent = '';
    textElement.style.opacity = '1';
    textElement.classList.add('typing-text');

    let i = 0;
    const speed = 25;

    function type() {
        if (i < fullText.length) {
            textElement.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            textElement.classList.remove('typing-text');
        }
    }

    setTimeout(type, 500);
}

// ============== MOUSE PARALLAX (OPTIMISÉ) ==============
function initMouseParallaxOptimized() {
    // Utiliser throttle pour limiter les calculs à toutes les 50ms
    const throttledParallax = window.PerformanceUtils.throttle(function (e) {
        const shapes = document.querySelectorAll('.bg-shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const xOffset = x * speed;
            const yOffset = y * speed;

            // Utiliser requestAnimationFrame pour des animations fluides
            requestAnimationFrame(() => {
                shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }, 50); // Limité à 20 FPS max (1000ms / 50ms)

    document.addEventListener('mousemove', throttledParallax);
}

// ============== NAVIGATION ==============
function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Optimiser le scroll avec debounce
    const handleScroll = window.PerformanceUtils.debounce(function () {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, 10); // Très rapide mais optimisé

    window.addEventListener('scroll', handleScroll, { passive: true });

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            if (spans.length) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
}

// ============== LOAD GRAPHIC PORTFOLIO ==============
function loadGraphicPortfolio() {
    const container = document.getElementById('graphicPortfolio');
    if (!container) return;

    container.innerHTML = '';

    graphicPortfolio.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item', 'reveal-on-scroll');
        portfolioItem.dataset.category = item.category || 'all';
        portfolioItem.dataset.delay = index * 100;

        const categoryLabels = {
            'beaute': 'Beauté',
            'evenement': 'Événement',
            'vente': 'Vente en ligne',
            'streaming': 'Streaming',
            'cuisine': 'Arts Culinaires',
            'sport': 'Sport & Fitness',
            'business': 'Business & Corporate',
            'autre': 'Autre'
        };

        // LAZY LOADING: Charger les 3 premières images immédiatement, le reste en lazy
        const shouldLazyLoad = index >= 3;

        portfolioItem.innerHTML = `
            <img src="./${item.image}" 
                 alt="${item.title}" 
                 class="portfolio-image" 
                 ${shouldLazyLoad ? 'loading="lazy"' : ''}
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x500/F1F5F9/0066FF?text=Image+Non+Disponible'; console.error('Erreur chargement:', '${item.image}')">
            <div class="portfolio-overlay">
                <span class="portfolio-category">${categoryLabels[item.category]}</span>
                <h3 class="portfolio-title" style="font-size: 1.2rem; margin-bottom: 0.5rem; font-weight: 700;">${item.title}</h3>
                <p class="portfolio-description" style="font-size: 0.9rem; opacity: 0.9;">${item.description}</p>
                <div style="margin-top: 10px;">
                    <span class="btn-sm" style="color: white; font-size: 0.8rem; border: 1px solid white; padding: 4px 10px; border-radius: 20px;">
                        <i class="fas fa-search-plus"></i> Agrandir
                    </span>
                </div>
            </div>
        `;

        // Click event for Lightbox
        portfolioItem.addEventListener('click', () => {
            openLightbox(item.image, item.title, item.description);
        });

        container.appendChild(portfolioItem);
    });
}

// ============== LOAD WEB PORTFOLIO ==============
function loadWebPortfolio() {
    const container = document.getElementById('webPortfolio');
    if (!container) return;

    container.innerHTML = '';

    webPortfolio.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item', 'reveal-on-scroll', 'web-item');
        portfolioItem.dataset.delay = index * 100;

        // LAZY LOADING
        const shouldLazyLoad = index >= 2;

        portfolioItem.innerHTML = `
            <img src="${item.image}" 
                 alt="${item.title}" 
                 class="portfolio-image"
                 style="object-fit: cover; height: 100%;"
                 ${shouldLazyLoad ? 'loading="lazy"' : ''}
                 onerror="this.src='https://via.placeholder.com/400x500/F1F5F9/00CC88?text=${encodeURIComponent(item.title)}'">
            <div class="portfolio-overlay">
                <span class="portfolio-category">Web Design Premium</span>
                <h3 class="portfolio-title" style="font-size: 1.4rem; margin-bottom: 0.8rem; font-weight: 800; letter-spacing: -0.5px;">${item.title}</h3>
                <p class="portfolio-description" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; color: rgba(255,255,255,0.9) !important;">${item.description}</p>
                <div style="display: flex; gap: 12px; margin-top: auto;">
                    <span class="view-image-trigger" style="color: white; font-size: 0.85rem; border: 1.5px solid rgba(255,255,255,0.4); padding: 8px 16px; border-radius: 50px; cursor: pointer; backdrop-filter: blur(5px); font-weight: 600; flex: 1; text-align: center;">
                        <i class="fas fa-search-plus"></i> Aperçu
                    </span>
                    <a href="${item.link}" target="_blank" class="btn-visit-site" style="color: white; font-weight: 700; background: var(--primary-green); padding: 8px 16px; border-radius: 50px; text-decoration: none; font-size: 0.85rem; flex: 1; text-align: center; box-shadow: 0 4px 12px rgba(0, 204, 136, 0.3);">
                        Visiter <i class="fas fa-external-link-alt" style="margin-left: 4px;"></i>
                    </a>
                </div>
            </div>
        `;

        // Click handles
        const overlay = portfolioItem.querySelector('.portfolio-overlay');
        const viewTrigger = portfolioItem.querySelector('.view-image-trigger');
        const visitLink = portfolioItem.querySelector('.btn-visit-site');

        // Prevent visit link from triggering parent click if we added one (not needed here but good practice)
        visitLink.addEventListener('click', (e) => e.stopPropagation());

        // View image when clicking the trigger or the image itself (excluding the visit button)
        portfolioItem.addEventListener('click', (e) => {
            if (!visitLink.contains(e.target)) {
                openLightbox(item.image, item.title, item.description);
            }
        });

        container.appendChild(portfolioItem);
    });
}

// ============== LIGHTBOX LOGIC ==============
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('closeLightbox');

    if (!lightbox || !closeBtn) return;

    closeBtn.addEventListener('click', closeLightbox);

    // Close on click outside
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(src, title, desc) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDesc');

    if (!lightbox || !img) return;

    img.src = src;
    titleEl.textContent = title;
    descEl.textContent = desc;

    lightbox.style.display = 'flex';
    // Small delay to allow display: flex to take effect before adding class for transition
    setTimeout(() => {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }, 10);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    }, 400);
}

// ============== CATEGORY FILTER ==============
function initCategoryFilter() {
    const tabs = document.querySelectorAll('.category-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.dataset.category;
            const items = document.querySelectorAll('#graphicPortfolio .portfolio-item');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            items.forEach(item => {
                item.style.animation = 'none';
                item.offsetHeight;

                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============== CONTACT FORM ==============
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subjectSelect = document.getElementById('subject');
        const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Bonjour ViaDesign! 👋\n\n` +
            `Je suis *${name}* (${email})\n` +
            `📌 Sujet: *${subject}*\n\n` +
            `📝 Message:\n${message}`;

        const whatsappUrl = `https://wa.me/237671170671?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');

        alert('Redirection vers WhatsApp pour envoyer votre message... 🚀');
        form.reset();
    });
}

// ============== SCROLL ANIMATIONS ==============
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .service-card, .portfolio-item, .contact-card, .contact-form').forEach(el => {
        el.classList.add('reveal-element');
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-element.visible {
            opacity: 1;
            transform: translateY(0);
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize
console.log('✨ ViaDesign Site Loaded - Vibrancy Mode: ON');
