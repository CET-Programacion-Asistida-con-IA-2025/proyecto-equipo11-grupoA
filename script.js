modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$22,000",
        duracion: "media",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Marketing", "Digital", "Emprendimiento", "Redes Sociales"]
    },
    {
        id: 12,
        nombre: "Psicología Positiva y Bienestar",
        categoria: "psicologia",
        descripcion: "Descubre herramientas para mejorar tu bienestar emocional",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "no",
        idioma: "español",
        formato: "pdf",
        accesibilidad: "audio-descripcion",
        tags: ["Psicología", "Bienestar", "Emociones", "Positivo"]
    },
    {
        id: 13,
        nombre: "Introducción a la Química Orgánica",
        categoria: "ciencias",
        descripcion: "Fundamentos de química orgánica con experimentos virtuales",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$16,000",
        duracion: "larga",
        nivel: "avanzado",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Química", "Orgánica", "Experimentos", "Ciencias"]
    },
    {
        id: 14,
        nombre: "Excelencia en Atención al Cliente",
        categoria: "atencion-cliente",
        descripcion: "Desarrolla habilidades para brindar un servicio excepcional",
        modalidad: "presencial",
        costo: "arancelado",
        precio: "$14,000",
        duracion: "corta",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "lengua-señas",
        tags: ["Atención", "Cliente", "Servicio", "Excelencia"]
    },
    {
        id: 15,
        nombre: "Liderazgo y Trabajo en Equipo",
        categoria: "habilidades-blandas",
        descripcion: "Fortalece tus habilidades de liderazgo y colaboración",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$19,000",
        duracion: "media",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Liderazgo", "Equipo", "Colaboración", "Soft Skills"]
    },
    {
        id: 16,
        nombre: "Python para Análisis de Datos",
        categoria: "programacion",
        descripcion: "Aprende Python aplicado al análisis y visualización de datos",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$28,000",
        duracion: "larga",
        nivel: "avanzado",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Python", "Datos", "Análisis", "Visualización"]
    },
    {
        id: 17,
        nombre: "Fotografía Digital Creativa",
        categoria: "arte",
        descripcion: "Técnicas avanzadas de fotografía digital y edición",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$17,000",
        duracion: "media",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Fotografía", "Digital", "Edición", "Creatividad"]
    },
    {
        id: 18,
        nombre: "Francés Básico para Viajeros",
        categoria: "idiomas",
        descripcion: "Aprende francés básico para desenvolverte en viajes",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "corta",
        nivel: "inicial",
        certificado: "no",
        idioma: "otro",
        formato: "texto",
        accesibilidad: "audio-descripcion",
        tags: ["Francés", "Viajes", "Básico", "Turismo"]
    },
    {
        id: 19,
        nombre: "Nutrición y Dietética Aplicada",
        categoria: "salud",
        descripcion: "Principios de nutrición para una vida saludable",
        modalidad: "presencial",
        costo: "arancelado",
        precio: "$21,000",
        duracion: "larga",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Nutrición", "Salud", "Dietética", "Bienestar"]
    },
    {
        id: 20,
        nombre: "Comunicación Efectiva en el Trabajo",
        categoria: "habilidades-blandas",
        descripcion: "Mejora tus habilidades de comunicación profesional",
        modalidad: "virtual-sincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "corta",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "lengua-señas",
        tags: ["Comunicación", "Trabajo", "Profesional", "Efectiva"]
    }
];

// ===== VARIABLES GLOBALES =====
let cursosFiltrados = [...cursosData];
let filtrosActivos = {};
let terminoBusqueda = '';

// ===== ICONOS POR CATEGORÍA =====
const iconosCategorias = {
    'programacion': 'fas fa-code',
    'arte': 'fas fa-palette',
    'salud': 'fas fa-heartbeat',
    'cocina': 'fas fa-utensils',
    'educacion-digital': 'fas fa-laptop',
    'mantenimiento': 'fas fa-tools',
    'humanidades': 'fas fa-book',
    'idiomas': 'fas fa-language',
    'lengua-señas': 'fas fa-hands',
    'ventas': 'fas fa-chart-line',
    'marketing': 'fas fa-bullhorn',
    'psicologia': 'fas fa-brain',
    'ciencias': 'fas fa-flask',
    'atencion-cliente': 'fas fa-headset',
    'habilidades-blandas': 'fas fa-users'
};

// ===== NOMBRES DE CATEGORÍAS =====
const nombresCategorias = {
    'programacion': 'Programación',
    'arte': 'Arte',
    'salud': 'Salud',
    'cocina': 'Cocina',
    'educacion-digital': 'Educación Digital',
    'mantenimiento': 'Mantenimiento',
    'humanidades': 'Humanidades',
    'idiomas': 'Idiomas',
    'lengua-señas': 'Lengua de Señas',
    'ventas': 'Ventas',
    'marketing': 'Marketing',
    'psicologia': 'Psicología',
    'ciencias': 'Ciencias',
    'atencion-cliente': 'Atención al Cliente',
    'habilidades-blandas': 'Habilidades Blandas'
};

// ===== DOM CONTENT LOADED =====
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
  
  // Inicializar el buscador
  initializarBuscador();
  configurarEventos();
  mostrarCursos(cursosData);
});

// ===== NAVIGATION MENU TOGGLE =====
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

// ===== SCROLL EFFECTS AND ANIMATIONS =====
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
    ".features, .search-section, .map-section, .stats, .cta-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(section);
  });
}

// ===== BUTTON EFFECTS =====
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
      document.getElementById('buscador')?.scrollIntoView({ 
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

// ===== EFECTO DE ONDAS EN BOTONES =====
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

// ===== COUNTERS =====
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

// ===== MAP INTERACTIONS =====
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

// ===== SMOOTH SCROLLING =====
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

// ===== FUNCIONES DEL BUSCADOR =====

// ===== CONFIGURACIÓN DE EVENTOS =====
function configurarEventos() {
    // Verificar si los elementos existen antes de agregar eventos
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput && clearSearch) {
        searchInput.addEventListener('input', manejarBusqueda);
        clearSearch.addEventListener('click', limpiarBusqueda);
    }
    
    // Eventos de filtros
    const filterTitles = document.querySelectorAll('.filter-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', toggleFilterGroup);
    });
    
    // Eventos de checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', manejarFiltro);
    });
    
    // Botón limpiar filtros
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', limpiarTodosLosFiltros);
    }
    
    // Toggle filtros móvil
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const filtersSidebar = document.getElementById('filtersSidebar');
    
    if (toggleFiltersBtn && filtersSidebar) {
        toggleFiltersBtn.addEventListener('click', function() {
            filtersSidebar.classList.toggle('active');
        });
        
        // Cerrar filtros móvil al hacer click fuera
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (!filtersSidebar.contains(e.target) && !toggleFiltersBtn.contains(e.target)) {
                    filtersSidebar.classList.remove('active');
                }
            }
        });
    }
    
    // Evento de ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', manejarOrdenamiento);
    }
    
    // Responsive
    window.addEventListener('resize', manejarResize);
}

// ===== INICIALIZACIÓN DEL BUSCADOR =====
function inicializarBuscador() {
    // Verificar si estamos en una página que tiene el buscador
    if (!document.getElementById('searchInput')) {
        return;
    }
    
    // Abrir primer grupo de filtros por defecto
    const primerGrupo = document.querySelector('.filter-group .filter-title');
    if (primerGrupo) {
        primerGrupo.click();
    }
    
    // Mostrar contador inicial
    actualizarContadorResultados();
}

// ===== MANEJO DE BÚSQUEDA =====
function manejarBusqueda(event) {
    terminoBusqueda = event.target.value.toLowerCase().trim();
    
    // Mostrar/ocultar botón de limpiar
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        if (terminoBusqueda) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    }
    
    // Aplicar filtros
    aplicarFiltros();
}

// ===== LIMPIAR BÚSQUEDA =====
function limpiarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.value = '';
        terminoBusqueda = '';
    }
    
    if (clearBtn) {
        clearBtn.classList.remove('visible');
    }
    
    aplicarFiltros();
}

// ===== TOGGLE GRUPOS DE FILTROS =====
function toggleFilterGroup(event) {
    const filterTitle = event.currentTarget;
    const filterName = filterTitle.getAttribute('data-filter');
    const filterContent = document.getElementById(filterName + '-content');
    
    if (filterContent) {
        // Toggle clase activa
        filterTitle.classList.toggle('active');
        filterContent.classList.toggle('active');
    }
}

// ===== MANEJO DE FILTROS =====
function manejarFiltro(event) {
    const checkbox = event.target;
    const filterName = checkbox.name;
    const filterValue = checkbox.value;
    
    if (!filtrosActivos[filterName]) {
        filtrosActivos[filterName] = [];
    }
    
    if (checkbox.checked) {
        // Agregar filtro
        if (!filtrosActivos[filterName].includes(filterValue)) {
            filtrosActivos[filterName].push(filterValue);
        }
    } else {
        // Remover filtro
        filtrosActivos[filterName] = filtrosActivos[filterName].filter(value => value !== filterValue);
        if (filtrosActivos[filterName].length === 0) {
            delete filtrosActivos[filterName];
        }
    }
    
    aplicarFiltros();
    actualizarContadorFiltros();
    mostrarFiltrosActivos();
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
    cursosFiltrados = cursosData.filter(curso => {
        // Filtro por término de búsqueda
        if (terminoBusqueda) {
            const searchFields = [
                curso.nombre,
                curso.descripcion,
                curso.categoria,
                ...curso.tags
            ].join(' ').toLowerCase();
            
            if (!searchFields.includes(terminoBusqueda)) {
                return false;
            }
        }
        
        // Filtros por categorías
        for (const [filterName, filterValues] of Object.entries(filtrosActivos)) {
            if (filterValues.length > 0) {
                if (!filterValues.includes(curso[filterName])) {
                    return false;
                }
            }
        }
        
        return true;
    });
    
    mostrarCursos(cursosFiltrados);
    actualizarContadorResultados();
}

// ===== MOSTRAR CURSOS =====
function mostrarCursos(cursos) {
    const coursesGrid = document.getElementById('coursesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!coursesGrid || !noResults) return;
    
    if (cursos.length === 0) {
        coursesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    coursesGrid.innerHTML = cursos.map(curso => crearTarjetaCurso(curso)).join('');
}

// ===== CREAR TARJETA DE CURSO =====
function crearTarjetaCurso(curso) {
    const iconoCategoria = iconosCategorias[curso.categoria] || 'fas fa-book';
    const nombreCategoria = nombresCategorias[curso.categoria] || curso.categoria;
    
    const duracionTexto = {
        'corta': '1-4 semanas',
        'media': '1-3 meses',
        'larga': '3+ meses'
    }[curso.duracion] || curso.duracion;
    
    const modalidadTexto = {
        'presencial': 'Presencial',
        'virtual-asincrono': 'Virtual Asincrónico',
        'virtual-sincrono': 'Virtual Sincrónico'
    }[curso.modalidad] || curso.modalidad;
    
    const nivelTexto = {
        'inicial': 'Inicial',
        'intermedio': 'Intermedio',
        'avanzado': 'Avanzado'
    }[curso.nivel] || curso.nivel;
    
    const certificadoTexto = curso.certificado === 'si' ? 'Con Certificado' : 'Sin Certificado';
    
    return `
        <div class="course-card" data-id="${curso.id}">
            <div class="course-header">
                <div class="course-category">
                    <i class="${iconoCategoria}"></i>
                    ${nombreCategoria}
                </div>
                <h3 class="course-title">${curso.nombre}</h3>
                <p class="course-description">${curso.descripcion}</p>
                
                <div class="course-info">
                    <div class="info-item">
                        <i class="fas fa-desktop"></i>
                        <span>${modalidadTexto}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>${duracionTexto}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-signal"></i>
                        <span>${nivelTexto}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-certificate"></i>
                        <span>${certificadoTexto}</span>
                    </div>
                </div>
                
                <div class="course-tags">
                    <span class="course-tag ${curso.costo === 'gratuito' ? 'free' : 'paid'}">
                        ${curso.costo === 'gratuito' ? 'Gratuito' : 'Arancelado'}
                    </span>
                    <span class="course-tag">${curso.idioma}</span>
                    <span class="course-tag">${curso.formato}</span>
                    ${curso.accesibilidad ? `<span class="course-tag">${curso.accesibilidad}</span>` : ''}
                </div>
            </div>
            
            <div class="course-footer">
                <div class="course-price ${curso.costo === 'gratuito' ? 'free' : ''}">
                    ${curso.precio}
                </div>
                <button class="course-btn" onclick="verDetallesCurso(${curso.id})">
                    Más Información
                </button>
            </div>
        </div>
    `;
}

// ===== LIMPIAR TODOS LOS FILTROS =====
function limpiarTodosLosFiltros() {
    // Limpiar filtros activos
    filtrosActivos = {};
    
    // Desmarcar todos los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Limpiar búsqueda
    limpiarBusqueda();
    
    // Actualizar interfaz
    actualizarContadorFiltros();
    mostrarFiltrosActivos();
    aplicarFiltros();
}

// ===== ACTUALIZAR CONTADOR DE RESULTADOS =====
function actualizarContadorResultados() {
    const resultsCount = document.getElementById('resultsCount');
    if (!resultsCount) return;
    
    const total = cursosFiltrados.length;
    
    if (total === 0) {
        resultsCount.textContent = 'No se encontraron cursos';
    } else if (total === 1) {
        resultsCount.textContent = '1 curso encontrado';
    } else {
        resultsCount.textContent = `${total} cursos encontrados`;
    }
}

// ===== ACTUALIZAR CONTADOR DE FILTROS =====
function actualizarContadorFiltros() {
    const filterCount = document.getElementById('filterCount');
    if (!filterCount) return;
    
    const totalFiltros = Object.values(filtrosActivos).reduce((sum, arr) => sum + arr.length, 0);
    
    filterCount.textContent = totalFiltros;
    
    if (totalFiltros > 0) {
        filterCount.style.display = 'block';
    } else {
        filterCount.style.display = 'none';
    }
}

// ===== MOSTRAR FILTROS ACTIVOS =====
function mostrarFiltrosActivos() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;
    
    if (Object.keys(filtrosActivos).length === 0) {
        activeFiltersContainer.innerHTML = '';
        return;
    }
    
    let filtrosHTML = '';
    
    for (const [filterName, filterValues] of Object.entries(filtrosActivos)) {
        filterValues.forEach(value => {
            const displayValue = obtenerTextoFiltro(filterName, value);
            filtrosHTML += `
                <div class="active-filter">
                    <span>${displayValue}</span>
                    <button class="remove-filter" onclick="removerFiltro('${filterName}', '${value}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        });
    }
    
    activeFiltersContainer.innerHTML = filtrosHTML;
}

// ===== OBTENER TEXTO DE FILTRO =====
function obtenerTextoFiltro(filterName, value) {
    const traducciones = {
        'modalidad': {
            'presencial': 'Presencial',
            'virtual-asincrono': 'Virtual Asincrónico',
            'virtual-sincrono': 'Virtual Sincrónico'
        },
        'categoria': nombresCategorias,
        'costo': {
            'gratuito': 'Gratuito',
            'arancelado': 'Arancelado'
        },
        'duracion': {
            'corta': 'Corta',
            'media': 'Media',
            'larga': 'Larga'
        },
        'nivel': {
            'inicial': 'Inicial',
            'intermedio': 'Intermedio',
            'avanzado': 'Avanzado'
        },
        'certificado': {
            'si': 'Con Certificado',
            'no': 'Sin Certificado'
        },
        'idioma': {
            'español': 'Español',
            'ingles': 'Inglés',
            'otro': 'Otro'
        },
        'formato': {
            'video': 'Video',
            'texto': 'Texto',
            'pdf': 'PDF',
            'clases-vivo': 'Clases en Vivo'
        },
        'accesibilidad': {
            'subtitulos': 'Subtítulos',
            'lengua-señas': 'Lengua de Señas',
            'audio-descripcion': 'Audio Descripción'
        }
    };
    
    return traducciones[filterName]?.[value] || value;
}

// ===== REMOVER FILTRO ESPECÍFICO =====
function removerFiltro(filterName, value) {
    // Encontrar y desmarcar el checkbox
    const checkbox = document.querySelector(`input[name="${filterName}"][value="${value}"]`);
    if (checkbox) {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
    }
}

// ===== MANEJO DE ORDENAMIENTO =====
function manejarOrdenamiento(event) {
    const sortBy = event.target.value;
    
    switch (sortBy) {
        case 'nombre':
            cursosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'duracion':
            const duracionOrder = { 'corta': 1, 'media': 2, 'larga': 3 };
            cursosFiltrados.sort((a, b) => duracionOrder[a.duracion] - duracionOrder[b.duracion]);
            break;
        case 'nivel':
            const nivelOrder = { 'inicial': 1, 'intermedio': 2, 'avanzado': 3 };
            cursosFiltrados.sort((a, b) => nivelOrder[a.nivel] - nivelOrder[b.nivel]);
            break;
        default:
            // Relevancia - ordenar por ID (orden original)
            cursosFiltrados.sort((a, b) => a.id - b.id);
    }
    
    mostrarCursos(cursosFiltrados);
}

// ===== MANEJO RESPONSIVE =====
function manejarResize() {
    const filtersSidebar = document.getElementById('filtersSidebar');
    
    if (filtersSidebar && window.innerWidth > 768) {
        filtersSidebar.classList.remove('active');
    }
}

// ===== VER DETALLES DEL CURSO =====
function verDetallesCurso(cursoId) {
    const curso = cursosData.find(c => c.id === cursoId);
    
    if (!curso) {
        alert('Curso no encontrado');
        return;
    }
    
    // Crear modal con detalles del curso
    const modal = crearModalDetalles(curso);
    document.body.appendChild(modal);
    
    // Mostrar modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// ===== CREAR MODAL DE DETALLES =====
function crearModalDetalles(curso) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${curso.nombre}</h2>
                <button class="close-modal" onclick="cerrarModal(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="course-detail-category">
                    <i class="${iconosCategorias[curso.categoria]}"></i>
                    ${nombresCategorias[curso.categoria]}
                </div>
                
                <p class="course-detail-description">${curso.descripcion}</p>
                
                <div class="course-details-grid">
                    <div class="detail-item">
                        <strong>Modalidad:</strong>
                        <span>${obtenerTextoFiltro('modalidad', curso.modalidad)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Duración:</strong>
                        <span>${obtenerTextoFiltro('duracion', curso.duracion)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Nivel:</strong>
                        <span>${obtenerTextoFiltro('nivel', curso.nivel)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Certificado:</strong>
                        <span>${obtenerTextoFiltro('certificado', curso.certificado)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Idioma:</strong>
                        <span>${obtenerTextoFiltro('idioma', curso.idioma)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Formato:</strong>
                        <span>${obtenerTextoFiltro('formato', curso.formato)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Accesibilidad:</strong>
                        <span>${obtenerTextoFiltro('accesibilidad', curso.accesibilidad)}</span>
                    </div>
                </div>
                
                <div class="course-tags-detail">
                    <strong>Temas:</strong>
                    <div class="tags-list">
                        ${curso.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="course-price-detail">
                    <span class="price-label">Precio:</span>
                    <span class="price-value ${curso.costo === 'gratuito' ? 'free' : ''}">${curso.precio}</span>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-inscribirse" onclick="inscribirseCurso(${curso.id})">
                    <i class="fas fa-user-plus"></i>
                    Inscribirse
                </button>
                <button class="btn-contacto" onclick="contactarCurso(${curso.id})">
                    <i class="fas fa-envelope"></i>
                    Contactar
                </button>
            </div>
        </div>
    `;
    
    // Agregar estilos del modal
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .modal-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-content {
                background: white;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .modal-overlay.active .modal-content {
                transform: scale(1);
            }
            
            .modal-header {
                background: var(--primary-burgundy);
                color: white;
                padding: 1.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 20px 20px 0 0;
            }
            
            .modal-header h2 {
                margin: 0;
                font-family: var(--font-primary);
                font-size: 1.4rem;
            }
            
            .close-modal {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            
            .close-modal:hover {
                background: rgba(255,255,255,0.2);
            }
            
            .modal-body {
                padding: 2rem;
            }
            
            .course-detail-category {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                background: var(--soft-green);
                color: var(--charcoal);
                padding: 0.5rem 1rem;
                border-radius: 25px;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            
            .course-detail-description {
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 2rem;
                color: var(--dark-brown);
            }
            
            .course-details-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .detail-item {
                display: flex;
                justify-content: space-between;
                padding: 0.75rem;
                background: var(--light-gray);
                border-radius: 8px;
            }
            
            .detail-item strong {
                color: var(--charcoal);
            }
            
            .course-tags-detail {
                margin-bottom: 2rem;
            }
            
            .tags-list {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 0.5rem;
            }
            
            .tag {
                background: var(--warm-tan);
                color: var(--charcoal);
                padding: 0.25rem 0.75rem;
                border-radius: 15px;
                font-size: 0.85rem;
                font-weight: 500;
            }
            
            .course-price-detail {
                text-align: center;
                padding: 1rem;
                background: var(--cream);
                border-radius: 10px;
                margin-bottom: 1rem;
            }
            
            .price-label {
                font-size: 1rem;
                color: var(--charcoal);
                margin-right: 0.5rem;
            }
            
            .price-value {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--primary-burgundy);
            }
            
            .price-value.free {
                color: var(--sage-green);
            }
            
            .modal-footer {
                padding: 1.5rem 2rem;
                border-top: 1px solid var(--border-color);
                display: flex;
                gap: 1rem;
                justify-content: center;
            }
            
            .btn-inscribirse, .btn-contacto {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .btn-inscribirse {
                background: var(--primary-burgundy);
                color: white;
            }
            
            .btn-inscribirse:hover {
                background: var(--dark-brown);
                transform: translateY(-2px);
            }
            
            .btn-contacto {
                background: var(--sage-green);
                color: white;
            }
            
            .btn-contacto:hover {
                background: var(--dark-brown);
                transform: translateY(-2px);
            }
            
            @media (max-width: 600px) {
                .modal-content {
                    width: 95%;
                    margin: 1rem;
                }
                
                .modal-body {
                    padding: 1.5rem;
                }
                
                .course-details-grid {
                    grid-template-columns: 1fr;
                }
                
                .modal-footer {
                    flex-direction: column;
                    padding: 1rem 1.5rem;
                }
                
                .btn-inscribirse, .btn-contacto {
                    width: 100%;
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            cerrarModal(modal.querySelector('.close-modal'));
        }
    });
    
    return modal;
}

// ===== CERRAR MODAL =====
function cerrarModal(button) {
    const modal = button.closest('.modal-overlay');
    modal.classList.remove('active');
    
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// ===== INSCRIBIRSE A CURSO =====
function inscribirseCurso(cursoId) {
    const curso = cursosData.find(c => c.id === cursoId);
    alert(`¡Inscripción exitosa al curso "${curso.nombre}"!\n\nPronto recibirás más información por email.`);
    
    // Cerrar modal
    const modal = document.querySelector('.modal-overlay.active');
    if (modal) {
        cerrarModal(modal.querySelector('.close-modal'));
    }
}

// ===== CONTACTAR CURSO =====
function contactarCurso(cursoId) {
    const curso = cursosData.find(c => c.id === cursoId);
    alert(`Contacto para el curso "${curso.nombre}"\n\nEmail: info@reducativa.edu.ar\nTeléfono: +54 11 1234-5678\n\n¡Te contactaremos a la brevedad!`);
}

// ===== UTILIDADES =====
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
}// ===== DATOS SIMULADOS DE CURSOS =====
const cursosData = [
    {
        id: 1,
        nombre: "Desarrollo Web Full Stack con JavaScript",
        categoria: "programacion",
        descripcion: "Aprende desarrollo web completo desde HTML hasta frameworks modernos como React y Node.js",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$25,000",
        duracion: "larga",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["JavaScript", "React", "Node.js", "HTML", "CSS"]
    },
    {
        id: 2,
        nombre: "Pintura Artística para Principiantes",
        categoria: "arte",
        descripcion: "Descubre técnicas básicas de pintura al óleo y acrílica con ejercicios prácticos",
        modalidad: "presencial",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "no",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "lengua-señas",
        tags: ["Pintura", "Arte", "Creatividad", "Técnicas"]
    },
    {
        id: 3,
        nombre: "Primeros Auxilios y RCP",
        categoria: "salud",
        descripcion: "Capacitación esencial en primeros auxilios y reanimación cardiopulmonar",
        modalidad: "presencial",
        costo: "arancelado",
        precio: "$8,500",
        duracion: "corta",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Primeros Auxilios", "RCP", "Salud", "Emergencias"]
    },
    {
        id: 4,
        nombre: "Cocina Internacional Vegetariana",
        categoria: "cocina",
        descripcion: "Explora recetas vegetarianas de diferentes culturas del mundo",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$12,000",
        duracion: "media",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Cocina", "Vegetariano", "Internacional", "Recetas"]
    },
    {
        id: 5,
        nombre: "Herramientas Digitales para Educadores",
        categoria: "educacion-digital",
        descripcion: "Aprende a usar tecnologías educativas modernas en el aula",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Educación", "Tecnología", "Aula Digital", "Herramientas"]
    },
    {
        id: 6,
        nombre: "Mantenimiento Básico de Computadoras",
        categoria: "mantenimiento",
        descripcion: "Aprende a diagnosticar y reparar problemas comunes en PC",
        modalidad: "presencial",
        costo: "arancelado",
        precio: "$15,000",
        duracion: "media",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Mantenimiento", "Computadoras", "Reparación", "Hardware"]
    },
    {
        id: 7,
        nombre: "Historia del Arte Moderno",
        categoria: "humanidades",
        descripcion: "Recorrido por los movimientos artísticos del siglo XX",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "larga",
        nivel: "intermedio",
        certificado: "no",
        idioma: "español",
        formato: "texto",
        accesibilidad: "audio-descripcion",
        tags: ["Historia", "Arte", "Movimientos", "Siglo XX"]
    },
    {
        id: 8,
        nombre: "Inglés Conversacional Avanzado",
        categoria: "idiomas",
        descripcion: "Perfecciona tu inglés con conversaciones fluidas y naturales",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$20,000",
        duracion: "larga",
        nivel: "avanzado",
        certificado: "si",
        idioma: "ingles",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Inglés", "Conversación", "Fluidez", "Avanzado"]
    },
    {
        id: 9,
        nombre: "Lengua de Señas Argentina - Nivel Básico",
        categoria: "lengua-señas",
        descripcion: "Introducción a la Lengua de Señas Argentina (LSA)",
        modalidad: "presencial",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "lengua-señas",
        tags: ["LSA", "Inclusión", "Comunicación", "Básico"]
    },
    {
        id: 10,
        nombre: "Técnicas de Ventas Efectivas",
        categoria: "ventas",
        descripcion: "Estrategias comprobadas para mejorar tus habilidades de venta",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$18,000",
        duracion: "corta",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Ventas", "Estrategias", "Efectividad", "Técnicas"]
    },
    {
        id: 11,
        nombre: "Marketing Digital para Emprendedores",
        categoria: "marketing",
        descripcion: "Aprende a promocionar tu negocio en redes sociales y plataformas digitales",
        modalidad: "virtual 