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

function initHeroCarousel() {
  const images = document.querySelectorAll('.carousel-img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 5000); // cambia cada 5 segundos
}

// ===== BUSCADOR DE CURSOS - JAVASCRIPT =====

// Datos de ejemplo de cursos
const coursesData = [
  {
    id: 1,
    title: "Desarrollo Web con React",
    description: "Aprende a crear aplicaciones web modernas con React y JavaScript",
    modalidad: "virtual-asincrono",
    categoria: "programacion",
    costo: "gratuito",
    duracion: "media",
    nivel: "intermedio",
    certificado: "si",
    idioma: "español",
    formato: "video",
    accesibilidad: "subtitulos",
    instructor: "Juan Pérez",
    rating: 4.8,
    students: 1250,
    hours: 45
  },
  {
    id: 2,
    title: "Introducción a Python",
    description: "Curso básico de programación en Python para principiantes",
    modalidad: "presencial",
    categoria: "programacion",
    costo: "arancelado",
    duracion: "corta",
    nivel: "inicial",
    certificado: "si",
    idioma: "español",
    formato: "clases-vivo",
    accesibilidad: "lengua-señas",
    instructor: "María García",
    rating: 4.9,
    students: 890,
    hours: 20
  },
  {
    id: 3,
    title: "Diseño Gráfico Digital",
    description: "Domina las herramientas digitales para crear diseños impactantes",
    modalidad: "virtual-sincrono",
    categoria: "arte",
    costo: "arancelado",
    duracion: "larga",
    nivel: "avanzado",
    certificado: "si",
    idioma: "español",
    formato: "video",
    accesibilidad: "subtitulos",
    instructor: "Carlos Mendoza",
    rating: 4.7,
    students: 650,
    hours: 80
  },
  {
    id: 4,
    title: "Primeros Auxilios",
    description: "Aprende técnicas básicas de primeros auxilios para emergencias",
    modalidad: "presencial",
    categoria: "salud",
    costo: "gratuito",
    duracion: "corta",
    nivel: "inicial",
    certificado: "si",
    idioma: "español",
    formato: "clases-vivo",
    accesibilidad: "lengua-señas",
    instructor: "Dr. Ana López",
    rating: 4.9,
    students: 2100,
    hours: 16
  },
  {
    id: 5,
    title: "Cocina Internacional",
    description: "Descubre recetas y técnicas culinarias de diferentes culturas",
    modalidad: "virtual-asincrono",
    categoria: "cocina",
    costo: "gratuito",
    duracion: "media",
    nivel: "inicial",
    certificado: "no",
    idioma: "español",
    formato: "video",
    accesibilidad: "subtitulos",
    instructor: "Chef Roberto Silva",
    rating: 4.6,
    students: 1800,
    hours: 30
  },
  {
    id: 6,
    title: "Excel Avanzado",
    description: "Domina funciones avanzadas y macros en Microsoft Excel",
    modalidad: "virtual-sincrono",
    categoria: "educacion-digital",
    costo: "arancelado",
    duracion: "corta",
    nivel: "avanzado",
    certificado: "si",
    idioma: "español",
    formato: "clases-vivo",
    accesibilidad: "subtitulos",
    instructor: "Laura Martínez",
    rating: 4.8,
    students: 950,
    hours: 25
  }
];

// Variables globales
let filteredCourses = [...coursesData];
let activeFilters = {};
let searchTerm = '';

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filtersSidebar = document.getElementById('filtersSidebar');
const toggleFiltersBtn = document.getElementById('toggleFilters');
const filterCount = document.getElementById('filterCount');
const clearFiltersBtn = document.getElementById('clearFilters');
const resultsCount = document.getElementById('resultsCount');
const activeFiltersContainer = document.getElementById('activeFilters');
const sortSelect = document.getElementById('sortSelect');
const coursesGrid = document.getElementById('coursesGrid');
const noResults = document.getElementById('noResults');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  setupFilterGroups();
  renderCourses();
  updateResultsCount();
});

// Event Listeners
function initializeEventListeners() {
  // Búsqueda
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  clearSearchBtn.addEventListener('click', clearSearch);
  
  // Filtros móviles
  toggleFiltersBtn.addEventListener('click', toggleMobileFilters);
  
  // Limpiar filtros
  clearFiltersBtn.addEventListener('click', clearAllFilters);
  
  // Ordenamiento
  sortSelect.addEventListener('change', handleSort);
  
  // Cerrar filtros móviles al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (!filtersSidebar.contains(e.target) && !toggleFiltersBtn.contains(e.target)) {
        filtersSidebar.classList.remove('active');
      }
    }
  });
}

// Configurar grupos de filtros
function setupFilterGroups() {
  const filterTitles = document.querySelectorAll('.filter-title');
  
  filterTitles.forEach(title => {
    title.addEventListener('click', function() {
      const filterType = this.dataset.filter;
      const content = document.getElementById(`${filterType}-content`);
      const isActive = this.classList.contains('active');
      
      // Cerrar otros filtros
      filterTitles.forEach(t => {
        if (t !== this) {
          t.classList.remove('active');
          const otherContent = document.getElementById(`${t.dataset.filter}-content`);
          if (otherContent) otherContent.classList.remove('active');
        }
      });
      
      // Toggle filtro actual
      if (isActive) {
        this.classList.remove('active');
        content.classList.remove('active');
      } else {
        this.classList.add('active');
        content.classList.add('active');
      }
    });
  });
  
  // Event listeners para checkboxes
  const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
}

// Manejo de búsqueda
function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase().trim();
  
  // Mostrar/ocultar botón de limpiar
  if (searchTerm) {
    clearSearchBtn.classList.add('active');
  } else {
    clearSearchBtn.classList.remove('active');
  }
  
  applyFilters();
}

// Limpiar búsqueda
function clearSearch() {
  searchInput.value = '';
  searchTerm = '';
  clearSearchBtn.classList.remove('active');
  applyFilters();
}

// Manejo de cambios en filtros
function handleFilterChange(e) {
  const filterType = e.target.name;
  const filterValue = e.target.value;
  const isChecked = e.target.checked;
  
  if (!activeFilters[filterType]) {
    activeFilters[filterType] = [];
  }
  
  if (isChecked) {
    activeFilters[filterType].push(filterValue);
  } else {
    activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
    if (activeFilters[filterType].length === 0) {
      delete activeFilters[filterType];
    }
  }
  
  applyFilters();
  updateActiveFiltersDisplay();
  updateFilterCount();
}

// Aplicar filtros
function applyFilters() {
  filteredCourses = coursesData.filter(course => {
    // Filtro de búsqueda
    if (searchTerm) {
      const searchMatch = 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm) ||
        course.categoria.toLowerCase().includes(searchTerm);
      
      if (!searchMatch) return false;
    }
    
    // Filtros de categoría
    for (const [filterType, filterValues] of Object.entries(activeFilters)) {
      if (filterValues.length > 0) {
        if (!filterValues.includes(course[filterType])) {
          return false;
        }
      }
    }
    
    return true;
  });
  
  // Aplicar ordenamiento
  applySorting();
  renderCourses();
  updateResultsCount();
}

// Aplicar ordenamiento
function applySorting() {
  const sortBy = sortSelect.value;
  
  filteredCourses.sort((a, b) => {
    switch (sortBy) {
      case 'nombre':
        return a.title.localeCompare(b.title);
      case 'duracion':
        const duracionOrder = { 'corta': 1, 'media': 2, 'larga': 3 };
        return duracionOrder[a.duracion] - duracionOrder[b.duracion];
      case 'nivel':
        const nivelOrder = { 'inicial': 1, 'intermedio': 2, 'avanzado': 3 };
        return nivelOrder[a.nivel] - nivelOrder[b.nivel];
      case 'relevancia':
      default:
        return b.rating - a.rating;
    }
  });
}

// Manejo de ordenamiento
function handleSort() {
  applySorting();
  renderCourses();
}

// Renderizar cursos
function renderCourses() {
  coursesGrid.innerHTML = '';
  
  if (filteredCourses.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  filteredCourses.forEach(course => {
    const courseCard = createCourseCard(course);
    coursesGrid.appendChild(courseCard);
  });
}

// Crear tarjeta de curso
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.innerHTML = `
    <div class="course-image">
      <i class="fas ${getCategoryIcon(course.categoria)}"></i>
    </div>
    <div class="course-content">
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.description}</p>
      <div class="course-meta">
        <span class="course-tag">
          <i class="fas fa-user"></i>
          ${course.instructor}
        </span>
        <span class="course-tag">
          <i class="fas fa-clock"></i>
          ${course.hours}h
        </span>
        <span class="course-tag">
          <i class="fas fa-star"></i>
          ${course.rating}
        </span>
        <span class="course-tag ${course.costo === 'gratuito' ? 'free' : 'paid'}">
          <i class="fas ${course.costo === 'gratuito' ? 'fa-gift' : 'fa-dollar-sign'}"></i>
          ${course.costo === 'gratuito' ? 'Gratis' : 'Pago'}
        </span>
      </div>
      <div class="course-actions">
        <button class="course-button primary" onclick="enrollCourse(${course.id})">
          <i class="fas fa-play"></i>
          Inscribirse
        </button>
        <button class="course-button secondary" onclick="viewCourse(${course.id})">
          <i class="fas fa-eye"></i>
          Ver más
        </button>
      </div>
    </div>
  `;
  return card;
}

// Obtener icono según categoría
function getCategoryIcon(categoria) {
  const icons = {
    'programacion': 'fa-code',
    'arte': 'fa-palette',
    'salud': 'fa-heartbeat',
    'cocina': 'fa-utensils',
    'educacion-digital': 'fa-laptop',
    'mantenimiento': 'fa-tools',
    'humanidades': 'fa-book',
    'idiomas': 'fa-language',
    'lengua-señas': 'fa-hands',
    'ventas': 'fa-chart-line',
    'marketing': 'fa-bullhorn',
    'psicologia': 'fa-brain',
    'ciencias': 'fa-flask',
    'atencion-cliente': 'fa-headset',
    'habilidades-blandas': 'fa-users'
  };
  return icons[categoria] || 'fa-graduation-cap';
}

// Actualizar contador de resultados
function updateResultsCount() {
  const count = filteredCourses.length;
  resultsCount.textContent = `${count} curso${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
}

// Actualizar display de filtros activos
function updateActiveFiltersDisplay() {
  activeFiltersContainer.innerHTML = '';
  
  for (const [filterType, filterValues] of Object.entries(activeFilters)) {
    filterValues.forEach(value => {
      const filterTag = document.createElement('span');
      filterTag.className = 'active-filter';
      filterTag.innerHTML = `
        ${getFilterDisplayName(filterType)}: ${getValueDisplayName(value)}
        <button class="remove-filter" onclick="removeFilter('${filterType}', '${value}')">
          <i class="fas fa-times"></i>
        </button>
      `;
      activeFiltersContainer.appendChild(filterTag);
    });
  }
}

// Obtener nombre de display para filtros
function getFilterDisplayName(filterType) {
  const names = {
    'modalidad': 'Modalidad',
    'categoria': 'Categoría',
    'costo': 'Costo',
    'duracion': 'Duración',
    'nivel': 'Nivel',
    'certificado': 'Certificado',
    'idioma': 'Idioma',
    'formato': 'Formato',
    'accesibilidad': 'Accesibilidad'
  };
  return names[filterType] || filterType;
}

// Obtener nombre de display para valores
function getValueDisplayName(value) {
  const names = {
    'presencial': 'Presencial',
    'virtual-asincrono': 'Virtual Asincrónico',
    'virtual-sincrono': 'Virtual Sincrónico',
    'programacion': 'Programación',
    'arte': 'Arte',
    'salud': 'Salud',
    'cocina': 'Cocina',
    'educacion-digital': 'Educación Digital',
    'gratuito': 'Gratuito',
    'arancelado': 'Arancelado',
    'corta': 'Corta (1-4 semanas)',
    'media': 'Media (1-3 meses)',
    'larga': 'Larga (3+ meses)',
    'inicial': 'Inicial',
    'intermedio': 'Intermedio',
    'avanzado': 'Avanzado',
    'si': 'Sí',
    'no': 'No',
    'español': 'Español',
    'ingles': 'Inglés',
    'video': 'Video',
    'texto': 'Texto',
    'pdf': 'PDF',
    'clases-vivo': 'Clases en Vivo',
    'subtitulos': 'Subtítulos',
    'lengua-señas': 'Lengua de Señas',
    'audio-descripcion': 'Audio Descripción'
  };
  return names[value] || value;
}

// Remover filtro específico
function removeFilter(filterType, value) {
  if (activeFilters[filterType]) {
    activeFilters[filterType] = activeFilters[filterType].filter(v => v !== value);
    if (activeFilters[filterType].length === 0) {
      delete activeFilters[filterType];
    }
  }
  
  // Actualizar checkbox
  const checkbox = document.querySelector(`input[name="${filterType}"][value="${value}"]`);
  if (checkbox) {
    checkbox.checked = false;
  }
  
  applyFilters();
  updateActiveFiltersDisplay();
  updateFilterCount();
}

// Actualizar contador de filtros
function updateFilterCount() {
  const count = Object.values(activeFilters).flat().length;
  filterCount.textContent = count;
  filterCount.classList.toggle('hidden', count === 0);
}

// Limpiar todos los filtros
function clearAllFilters() {
  activeFilters = {};
  
  // Limpiar todos los checkboxes
  const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  
  applyFilters();
  updateActiveFiltersDisplay();
  updateFilterCount();
}

// Toggle filtros móviles
function toggleMobileFilters() {
  filtersSidebar.classList.toggle('active');
}

// Funciones para botones de curso
function enrollCourse(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  alert(`Te has inscrito en el curso: ${course.title}`);
}

function viewCourse(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  alert(`Viendo detalles del curso: ${course.title}`);
}

// Función debounce para optimizar búsqueda
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
// ========================================
// JAVASCRIPT PARA EL CARRUSEL
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let slideInterval;

// Función para mostrar una diapositiva específica
function showSlide(index) {
    // Remover clase active de todas las imágenes e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Agregar clase active a la imagen e indicador actual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

// Función para cambiar diapositiva (botones prev/next)
function changeSlide(direction) {
    currentSlide += direction;
    
    // Ciclo infinito
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
    resetAutoSlide();
}

// Función para ir a una diapositiva específica (indicadores)
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide();
}

// Función para iniciar el slide automático
function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambia cada 5 segundos
}

// Función para reiniciar el slide automático
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Función para pausar el slide automático
function pauseAutoSlide() {
    clearInterval(slideInterval);
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startAutoSlide();
    
    // Pausar en hover
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', pauseAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Soporte para navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
});