// ==============================================
// OPTIMISATIONS DE PERFORMANCE - ViaDesign Portfolio
// ==============================================

// ============== 1. UTILITAIRES DE DÉBOUNCE & THROTTLE ==============

/**
 * Debounce - Attend que l'utilisateur arrête d'interagir
 * Parfait pour: recherche en temps réel, resize, scroll
 */
function debounce(func, wait = 300) {
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

/**
 * Throttle - Limite le nombre d'exécutions par période
 * Parfait pour: scroll events, mousemove
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============== 2. LAZY LOADING DES IMAGES ==============

/**
 * Charge les images uniquement quand elles entrent dans le viewport
 * Économise la bande passante et accélère le chargement initial
 */
class LazyImageLoader {
    constructor(options = {}) {
        this.options = {
            rootMargin: options.rootMargin || '50px',
            threshold: options.threshold || 0.01,
            loadingClass: options.loadingClass || 'lazy-loading',
            loadedClass: options.loadedClass || 'lazy-loaded',
            errorClass: options.errorClass || 'lazy-error'
        };

        this.observer = null;
        this.init();
    }

    init() {
        // Vérifier si IntersectionObserver est supporté
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                this.onIntersection.bind(this),
                {
                    rootMargin: this.options.rootMargin,
                    threshold: this.options.threshold
                }
            );

            this.observeImages();
        } else {
            // Fallback pour les vieux navigateurs
            this.loadAllImages();
        }
    }

    observeImages() {
        const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
        images.forEach(img => {
            // Si l'image a un data-src, l'observer
            if (img.dataset.src) {
                img.classList.add(this.options.loadingClass);
                this.observer.observe(img);
            }
        });
    }

    onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src || img.src;

        // Précharger l'image
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = src;
            img.classList.remove(this.options.loadingClass);
            img.classList.add(this.options.loadedClass);

            // Supprimer data-src une fois chargé
            delete img.dataset.src;
        };

        tempImg.onerror = () => {
            img.classList.remove(this.options.loadingClass);
            img.classList.add(this.options.errorClass);
            console.error(`Erreur de chargement: ${src}`);
        };

        tempImg.src = src;
    }

    loadAllImages() {
        // Fallback: charger toutes les images immédiatement
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.loadImage(img));
    }

    // Ajouter de nouvelles images à observer
    observe(img) {
        if (this.observer && img.dataset.src) {
            img.classList.add(this.options.loadingClass);
            this.observer.observe(img);
        }
    }

    // Détruire l'observer
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// ============== 3. CACHE DES DONNÉES ==============

/**
 * Simple cache en mémoire avec expiration
 * Évite de recharger les mêmes données
 */
class DataCache {
    constructor(ttl = 300000) { // 5 minutes par défaut
        this.cache = new Map();
        this.ttl = ttl;
    }

    set(key, value, customTTL = null) {
        const expiresAt = Date.now() + (customTTL || this.ttl);
        this.cache.set(key, { value, expiresAt });
    }

    get(key) {
        const item = this.cache.get(key);

        if (!item) return null;

        // Vérifier si expiré
        if (Date.now() > item.expiresAt) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    has(key) {
        return this.get(key) !== null;
    }

    clear() {
        this.cache.clear();
    }

    delete(key) {
        this.cache.delete(key);
    }

    // Nettoyer les entrées expirées
    cleanup() {
        const now = Date.now();
        for (const [key, item] of this.cache.entries()) {
            if (now > item.expiresAt) {
                this.cache.delete(key);
            }
        }
    }
}

// ============== 4. RATE LIMITING ==============

/**
 * Limite le nombre d'appels à une fonction
 * Protection contre les abus et surcharge
 */
class RateLimiter {
    constructor(maxCalls = 100, timeWindow = 60000) { // 100 appels par minute
        this.maxCalls = maxCalls;
        this.timeWindow = timeWindow;
        this.calls = [];
    }

    canCall() {
        const now = Date.now();

        // Nettoyer les anciens appels
        this.calls = this.calls.filter(time => now - time < this.timeWindow);

        if (this.calls.length >= this.maxCalls) {
            console.warn(`🚫 Rate limit atteint: ${this.maxCalls} appels par ${this.timeWindow}ms`);
            return false;
        }

        this.calls.push(now);
        return true;
    }

    getRemainingCalls() {
        const now = Date.now();
        this.calls = this.calls.filter(time => now - time < this.timeWindow);
        return Math.max(0, this.maxCalls - this.calls.length);
    }

    getResetTime() {
        if (this.calls.length === 0) return 0;
        const oldestCall = Math.min(...this.calls);
        const resetTime = oldestCall + this.timeWindow - Date.now();
        return Math.max(0, resetTime);
    }
}

// ============== 5. PRÉCHARGEMENT INTELLIGENT ==============

/**
 * Précharge les ressources critiques
 */
class ResourcePreloader {
    constructor() {
        this.preloadedResources = new Set();
    }

    // Précharger une image
    preloadImage(url) {
        if (this.preloadedResources.has(url)) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.preloadedResources.add(url);
                resolve(img);
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    // Précharger plusieurs images
    preloadImages(urls) {
        return Promise.all(urls.map(url => this.preloadImage(url)));
    }

    // Précharger du CSS
    preloadCSS(url) {
        if (this.preloadedResources.has(url)) return;

        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        document.head.appendChild(link);

        this.preloadedResources.add(url);
    }

    // Précharger du JavaScript
    preloadJS(url) {
        if (this.preloadedResources.has(url)) return;

        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = url;
        document.head.appendChild(link);

        this.preloadedResources.add(url);
    }
}

// ============== 6. GESTION DE LA PERFORMANCE ==============

/**
 * Moniteur de performance
 */
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoadTime: 0,
            firstContentfulPaint: 0,
            domInteractive: 0,
            resourcesLoaded: 0
        };
    }

    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => this.collectMetrics(), 0);
            });
        }
    }

    collectMetrics() {
        const perfData = performance.getEntriesByType('navigation')[0];

        if (perfData) {
            this.metrics.pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
            this.metrics.domInteractive = perfData.domInteractive - perfData.fetchStart;

            console.log('📊 Performance Metrics:', {
                'Temps de chargement': `${(this.metrics.pageLoadTime / 1000).toFixed(2)}s`,
                'DOM Interactive': `${(this.metrics.domInteractive / 1000).toFixed(2)}s`
            });
        }

        // First Contentful Paint
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
            this.metrics.firstContentfulPaint = fcp.startTime;
            console.log(`🎨 First Contentful Paint: ${(fcp.startTime / 1000).toFixed(2)}s`);
        }
    }

    getMetrics() {
        return this.metrics;
    }
}

// ============== EXPORT ==============
// Exporter pour utilisation globale
window.PerformanceUtils = {
    debounce,
    throttle,
    LazyImageLoader,
    DataCache,
    RateLimiter,
    ResourcePreloader,
    PerformanceMonitor
};

console.log('⚡ Performance utilities loaded');
