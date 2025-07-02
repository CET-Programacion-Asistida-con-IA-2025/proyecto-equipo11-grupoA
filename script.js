// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initButtonEffects();
  initCounters();
  initMapInteractions();
  initSmoothScrolling();
  
  // ✅ INICIALIZAR EL CAROUSEL
  new FoundersCarousel();
});

// Navigation Menu Toggle
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(245, 243, 231, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      } else {
        navbar.style.background = "rgba(245, 243, 231, 0.95)";
        navbar.style.boxShadow = "none";
      }
    }
  });
}

// Scroll Effects and Animations
function initScrollEffects() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        // Trigger counter animation if it's a stats section
        if (entry.target.classList.contains("stats")) {
          animateCounters();
        }
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll(
    ".features, .map-section, .stats, .cta-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(section);
  });
}

// ✅ IMPLEMENTAR EFECTOS DE BOTONES
function initButtonEffects() {
  // Botones principales del hero
  const explorarBtn = document.getElementById('explorar-btn');
  const capacitacionBtn = document.getElementById('capacitacion-btn');
  const registrarseBtn = document.getElementById('registrarse-btn');

  // Efecto de click para explorar recursos
  if (explorarBtn) {
    explorarBtn.addEventListener('click', () => {
      document.getElementById('recursos')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }

  // Efecto de click para capacitación
  if (capacitacionBtn) {
    capacitacionBtn.addEventListener('click', () => {
      document.getElementById('capacitacion')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }

  // Efecto de click para registro
  if (registrarseBtn) {
    registrarseBtn.addEventListener('click', () => {
      alert('¡Próximamente! Sistema de registro en desarrollo.');
    });
  }

  // Añadir efecto de ondas a todos los botones
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta');
  buttons.forEach(button => {
    button.addEventListener('click', createRippleEffect);
  });
}

// Efecto de ondas en botones
function createRippleEffect(e) {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  // Añadir estilos del ripple
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.6)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 0.6s linear';
  ripple.style.pointerEvents = 'none';
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// ✅ IMPLEMENTAR CONTADORES ANIMADOS
function initCounters() {
  // Esta función será llamada por el observer cuando la sección stats sea visible
}

function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 100; // Dividir en 100 pasos
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// ✅ IMPLEMENTAR INTERACCIONES DEL MAPA
function initMapInteractions() {
  const mapLegendItems = document.querySelectorAll('.legend-item');
  
  mapLegendItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
  });
}

// ✅ IMPLEMENTAR SCROLL SUAVE
function initSmoothScrolling() {
  // Scroll suave para todos los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Scroll indicator en hero
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.getElementById('recursos')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }
}

// ===== CAROUSEL FUNDADORAS REDUCATIVA ===== 
class FoundersCarousel {
  constructor() {
    // Elementos del DOM
    this.track = document.getElementById("carouselTrack");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.indicators = document.getElementById("indicators");
    this.cards = document.querySelectorAll(".founder-card");

    // Estado del carousel
    this.currentIndex = 0;
    this.cardsToShow = this.getCardsToShow();
    this.maxIndex = Math.max(0, this.cards.length - this.cardsToShow);
    this.isAnimating = false;
    this.autoSlideInterval = null;

    // Configuración
    this.autoSlideDelay = 6000; // 6 segundos
    this.animationDuration = 600; // 0.6 segundos

    // Verificar que existen los elementos necesarios
    if (this.track && this.cards.length > 0) {
      this.init();
    }
  }

  // Determinar cuántas tarjetas mostrar según el tamaño de pantalla
  getCardsToShow() {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 1;
    if (width <= 1024) return 2;
    return 3;
  }

  // Inicializar el carousel
  init() {
    this.createIndicators();
    this.updateCarousel();
    this.bindEvents();
    this.startAutoSlide();

    // Añadir clase CSS para animaciones suaves
    this.track.style.transition = `transform ${this.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  }

  // Crear indicadores de navegación
  createIndicators() {
    if (!this.indicators) return;

    this.indicators.innerHTML = "";
    const totalSlides = Math.ceil(this.cards.length / this.cardsToShow);

    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (i === 0) indicator.classList.add("active");

      indicator.addEventListener("click", () => {
        if (!this.isAnimating) {
          this.goToSlide(i);
          this.resetAutoSlide();
        }
      });

      this.indicators.appendChild(indicator);
    }
  }

  // Actualizar posición del carousel
  updateCarousel() {
    if (!this.track || this.cards.length === 0) return;

    const cardWidth = this.cards[0].offsetWidth;
    const gap = 35; // Gap entre tarjetas
    const translateX = -this.currentIndex * (cardWidth + gap);

    this.track.style.transform = `translateX(${translateX}px)`;
    this.updateIndicators();
  }

  // Actualizar indicadores activos
  updateIndicators() {
    if (!this.indicators) return;

    const indicators = this.indicators.querySelectorAll(".indicator");
    const activeSlide = Math.floor(this.currentIndex / this.cardsToShow);

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === activeSlide);
    });
  }

  // Ir al siguiente slide
  next() {
    if (this.isAnimating) return;

    this.isAnimating = true;

    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volver al inicio
    }

    this.updateCarousel();

    // Resetear flag de animación
    setTimeout(() => {
      this.isAnimating = false;
    }, this.animationDuration);
  }

  // Ir al slide anterior
  prev() {
    if (this.isAnimating) return;

    this.isAnimating = true;

    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex; // Ir al final
    }

    this.updateCarousel();

    // Resetear flag de animación
    setTimeout(() => {
      this.isAnimating = false;
    }, this.animationDuration);
  }

  // Ir a un slide específico
  goToSlide(slideIndex) {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.currentIndex = slideIndex * this.cardsToShow;

    // Asegurar que no exceda los límites
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }

    this.updateCarousel();

    // Resetear flag de animación
    setTimeout(() => {
      this.isAnimating = false;
    }, this.animationDuration);
  }

  // Vincular eventos
  bindEvents() {
    // Botones de navegación
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.next();
        this.resetAutoSlide();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.prev();
        this.resetAutoSlide();
      });
    }

    // Soporte táctil para móviles
    this.bindTouchEvents();

    // Eventos de teclado
    this.bindKeyboardEvents();

    // Responsive
    this.bindResizeEvents();

    // Pausar auto-slide cuando el mouse está sobre el carousel
    this.bindHoverEvents();
  }

  // Eventos táctiles
  bindTouchEvents() {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let hasMoved = false;

    this.track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        hasMoved = false;
      },
      { passive: true }
    );

    this.track.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);

        // Solo prevenir scroll si el movimiento es más horizontal que vertical
        if (diffX > diffY && diffX > 10) {
          e.preventDefault();
          hasMoved = true;
        }
      },
      { passive: false }
    );

    this.track.addEventListener(
      "touchend",
      (e) => {
        if (!isDragging || !hasMoved) return;

        isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        // Mínimo movimiento para activar el cambio
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            this.next();
          } else {
            this.prev();
          }
          this.resetAutoSlide();
        }
      },
      { passive: true }
    );
  }

  // Eventos de teclado
  bindKeyboardEvents() {
    document.addEventListener("keydown", (e) => {
      // Solo funcionar si el carousel está visible
      if (!this.isElementInViewport(this.track)) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          this.prev();
          this.resetAutoSlide();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.next();
          this.resetAutoSlide();
          break;
      }
    });
  }

  // Eventos de redimensionamiento
  bindResizeEvents() {
    let resizeTimeout;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const oldCardsToShow = this.cardsToShow;
        this.cardsToShow = this.getCardsToShow();
        this.maxIndex = Math.max(0, this.cards.length - this.cardsToShow);

        // Ajustar posición actual si es necesario
        if (this.currentIndex > this.maxIndex) {
          this.currentIndex = this.maxIndex;
        }

        // Recrear indicadores si cambió el número de tarjetas visibles
        if (oldCardsToShow !== this.cardsToShow) {
          this.createIndicators();
        }

        this.updateCarousel();
      }, 250);
    });
  }

  // Eventos de hover
  bindHoverEvents() {
    const carouselContainer = document.querySelector(".carousel-container");

    if (carouselContainer) {
      carouselContainer.addEventListener("mouseenter", () => {
        this.pauseAutoSlide();
      });

      carouselContainer.addEventListener("mouseleave", () => {
        this.startAutoSlide();
      });
    }
  }

  // Iniciar auto-slide
  startAutoSlide() {
    this.pauseAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, this.autoSlideDelay);
  }

  // Pausar auto-slide
  pauseAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  // Resetear auto-slide
  resetAutoSlide() {
    this.startAutoSlide();
  }

  // Verificar si un elemento está en el viewport
  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}