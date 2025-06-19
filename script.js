// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavigation();
  initScrollEffects();
  initButtonEffects();
  initCounters();
  initMapInteractions();
  initSmoothScrolling();
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

  // Add hover sound effect (optional)
  const allButtons = document.querySelectorAll("button, .feature-card");
  allButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });
    
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
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