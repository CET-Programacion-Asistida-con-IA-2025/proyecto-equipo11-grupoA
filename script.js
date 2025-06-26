// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initButtonEffects();
  initCounters();
  initMapInteractions();
  initSmoothScrolling();
  
  // Inicializar el carousel
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

// Button Effects and Interactions
function initButtonEffects() {
  // Hero section buttons
  const explorarBtn = document.getElementById("explorar-btn");
  const capacitacionBtn = document.getElementById("capacitacion-btn");
  const registrarseBtn = document.getElementById("registrarse-btn");

  if (explorarBtn) {
    explorarBtn.addEventListener("click", function () {
      // Scroll to recursos section
      const recursosSection = document.getElementById("recursos");
      if (recursosSection) {
        recursosSection.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
      
      // Add click effect
      addClickEffect(this);
    });
  }

  if (capacitacionBtn) {
    capacitacionBtn.addEventListener("click", function () {
      // Scroll to capacitacion section or show modal
      const capacitacionSection = document.getElementById("capacitacion");
      if (capacitacionSection) {
        capacitacionSection.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      } else {
        // Show notification since section doesn't exist yet
        showNotification("¡Próximamente disponible! La sección de capacitación estará lista pronto.", "info");
      }
      
      addClickEffect(this);
    });
  }

  if (registrarseBtn) {
    registrarseBtn.addEventListener("click", function () {
      // Show registration form or redirect
      showNotification("¡Gracias por tu interés! El registro estará disponible próximamente.", "success");
      addClickEffect(this);
    });
  }

  // Feature cards click effects
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      handleFeatureCardClick(category);
      addClickEffect(this);
    });
  });

  // Add hover effect
  const allButtons = document.querySelectorAll("button, .feature-card");
  allButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });
    
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Añadir efecto de ondas a todos los botones
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta');
  buttons.forEach(button => {
    button.addEventListener('click', createRippleEffect);
  });
}

// Handle feature card clicks
function handleFeatureCardClick(category) {
  const messages = {
    recursos: "Explorando biblioteca digital... ¡Miles de recursos esperándote!",
    capacitacion: "Accediendo a cursos especializados... ¡Prepárate para aprender!",
    comunidad: "Conectando con la comunidad educativa... ¡Únete a la conversación!",
    herramientas: "Cargando herramientas interactivas... ¡La práctica hace al maestro!"
  };

  const message = messages[category] || "¡Explorando nueva funcionalidad!";
  showNotification(message, "info");
}

// Add click effect animation
function addClickEffect(element) {
  // Create ripple effect
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  
  // Get element dimensions and mouse position
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = "50%";
  ripple.style.top = "50%";
  ripple.style.transform = "translate(-50%, -50%)";
  
  // Add ripple styles
  ripple.style.position = "absolute";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(255, 255, 255, 0.3)";
  ripple.style.pointerEvents = "none";
  ripple.style.animation = "ripple-effect 0.6s ease-out";
  
  // Ensure parent has relative positioning
  const originalPosition = element.style.position;
  if (getComputedStyle(element).position === "static") {
    element.style.position = "relative";
  }
  
  element.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
    if (originalPosition) {
      element.style.position = originalPosition;
    }
  }, 600);
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

// Initialize Counters
function initCounters() {
  // This will be triggered by intersection observer
}

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  });
}

// Map Interactions
function initMapInteractions() {
  const mapFilters = document.querySelectorAll(".map-filter");
  const libraryMarkers = document.querySelectorAll(".library-marker");
  const mapLegendItems = document.querySelectorAll('.legend-item');

  mapFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      mapFilters.forEach((f) => f.classList.remove("active"));
      
      // Add active class to clicked filter
      this.classList.add("active");
      
      const filterValue = this.getAttribute("data-filter");
      
      // Show/hide markers based on filter
      libraryMarkers.forEach((marker) => {
        if (filterValue === "all") {
          marker.classList.remove("hidden");
        } else {
          const markerComuna = marker.getAttribute("data-comuna");
          if (markerComuna === filterValue) {
            marker.classList.remove("hidden");
          } else {
            marker.classList.add("hidden");
          }
        }
      });
      
      // Add click effect to filter button
      addClickEffect(this);
      
      // Show notification
      const filterText = this.textContent;
      if (filterValue === "all") {
        showNotification("Mostrando todas las bibliotecas", "info");
      } else {
        showNotification(`Mostrando bibliotecas de ${filterText}`, "info");
      }
    });
  });

  // Library marker interactions
  libraryMarkers.forEach((marker) => {
    marker.addEventListener("click", function () {
      const libraryName = this.querySelector("h4").textContent;
      const libraryAddress = this.querySelector("p").textContent;
      
      showNotification(`📍 ${libraryName}<br><small>${libraryAddress}</small>`, "info");
      
      // Add a small bounce animation
      this.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });

  // Map legend items hover effects
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

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
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

// Notification System
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach(notif => notif.remove());
  
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${getNotificationIcon(type)}</span>
      <span class="notification-text">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: white;
    border: 2px solid var(--primary-burgundy);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    max-width: 350px;
    font-family: var(--font-secondary);
  `;
  
  // Add notification to page
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);
  
  // Auto remove after 4 seconds
  const autoRemove = setTimeout(() => {
    removeNotification(notification);
  }, 4000);
  
  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    clearTimeout(autoRemove);
    removeNotification(notification);
  });
  
  // Style close button
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
    color: var(--primary-burgundy);
  `;
}

function getNotificationIcon(type) {
  const icons = {
    success: "✅",
    info: "ℹ️",
    warning: "⚠️",
    error: "❌"
  };
  return icons[type] || icons.info;
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 300);
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
    
    // Variables de control
    this.currentIndex = 0;
    this.cardWidth = 300; // Ancho de cada tarjeta
    this.gap = 20; // Espacio entre tarjetas
    this.autoSlideDelay = 5000; // 5 segundos
    this.autoSlideInterval = null;
    
    // Verificar si existen los elementos necesarios
    if (!this.track || this.cards.length === 0) {
      console.warn('Carousel: No se encontraron elementos necesarios');
      return;
    }
    
    // Inicializar
    this.init();
  }
  
  init() {
    this.createIndicators();
    this.bindEvents();
    this.updateCarousel();
    this.startAutoSlide();
    this.bindHoverEvents();
  }
  
  createIndicators() {
    if (!this.indicators) return;
    
    this.indicators.innerHTML = '';
    
    for (let i = 0; i < this.cards.length; i++) {
      const indicator = document.createElement('button');
      indicator.classList.add('indicator');
      if (i === 0) indicator.classList.add('active');
      
      indicator.addEventListener('click', () => {
        this.goToSlide(i);
      });
      
      this.indicators.appendChild(indicator);
    }
  }
  
  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
      });
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
      });
    }
    
    // Touch events para dispositivos móviles
    let startX = 0;
    let endX = 0;
    
    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    this.track.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe(startX, endX);
    });
  }
  
  handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  
  prev() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
    this.updateCarousel();
    this.resetAutoSlide();
  }
  
  next() {
    this.currentIndex = this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
    this.updateCarousel();
    this.resetAutoSlide();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoSlide();
  }
  
  updateCarousel() {
    if (!this.track) return;
    
    const translateX = -(this.currentIndex * (this.cardWidth + this.gap));
    this.track.style.transform = `translateX(${translateX}px)`;
    
    // Actualizar indicadores
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
    
    // Actualizar botones
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex === this.cards.length - 1;
    }
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

// Add ripple effect CSS animation
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple-effect {
    from {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .notification-text {
    flex: 1;
    line-height: 1.4;
  }
  
  .notification-close:hover {
    background: rgba(114, 47, 55, 0.1) !important;
    border-radius: 50%;
  }
`;
document.head.appendChild(style);

// Add some extra interactive features
document.addEventListener("DOMContentLoaded", function() {
  // Add keyboard navigation
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      // Close mobile menu if open
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
      
      // Close any notifications
      const notifications = document.querySelectorAll(".notification");
      notifications.forEach(removeNotification);
    }
  });
  
  // Add loading effect to page
  document.body.style.opacity = "0";
  window.addEventListener("load", function() {
    document.body.style.transition = "opacity 0.5s ease-in-out";
    document.body.style.opacity = "1";
  });
});