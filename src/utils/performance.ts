// Performance monitoring and optimization
interface PerformanceMetrics {
  domContentLoaded?: number;
  loadComplete?: number;
  totalLoadTime?: number;
  ttfb?: number;
  dnsLookup?: number;
  tcpConnect?: number;
  fcp?: number;
  lcp?: number;
  cls?: number;
}

class PerformanceMonitor {
  private startTime: number;
  private metrics: PerformanceMetrics;

  constructor() {
    this.startTime = performance.now();
    this.metrics = {};
    this.init();
  }

  init() {
    // Monitor loading performance
    window.addEventListener('load', () => {
      this.measureLoadingPerformance();
    });

    // Monitor Core Web Vitals
    this.measureCoreWebVitals();

    // Preload images in viewport
    this.preloadImagesInViewport();
  }

  measureLoadingPerformance() {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    this.metrics = {
      ...this.metrics,
      domContentLoaded: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
      loadComplete: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
      totalLoadTime: performance.now() - this.startTime,
      ttfb: navigationTiming.responseStart - navigationTiming.requestStart,
      dnsLookup: navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart,
      tcpConnect: navigationTiming.connectEnd - navigationTiming.connectStart
    };

    // Log performance metrics (remove in production)
    console.log('Performance Metrics:', this.metrics);
  }

  measureCoreWebVitals() {
    // Measure First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure Cumulative Layout Shift (CLS)
      let cumulativeLayoutShiftScore = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            cumulativeLayoutShiftScore += layoutShiftEntry.value;
          }
        }
        this.metrics.cls = cumulativeLayoutShiftScore;
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  preloadImagesInViewport() {
    // Intersection Observer for lazy loading optimization
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px' // Start loading 50px before entering viewport
      });

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Prefetch next page resources
  prefetchResources(urls: string[]) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  // Critical resource hints
  addResourceHints() {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
      { rel: 'preconnect', href: 'https://res.cloudinary.com', crossorigin: true },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  (window as any).performanceMonitor = new PerformanceMonitor();
}

export default PerformanceMonitor;
