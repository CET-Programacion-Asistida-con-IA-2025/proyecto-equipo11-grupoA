// ===== DATOS EXPANDIDOS DE CURSOS =====
const cursosData = [
    {
        id: 1,
        nombre: "Desarrollo Web Full Stack con JavaScript",
        categoria: "programacion",
        descripcion: "Aprende desarrollo web completo desde HTML hasta frameworks modernos como React y Node.js. Incluye proyectos prácticos y metodologías ágiles.",
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
        descripcion: "Descubre técnicas básicas de pintura al óleo y acrílica con ejercicios prácticos. Desarrolla tu creatividad y expresión artística.",
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
        descripcion: "Capacitación esencial en primeros auxilios y reanimación cardiopulmonar. Aprende a salvar vidas en situaciones de emergencia.",
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
        descripcion: "Explora recetas vegetarianas de diferentes culturas del mundo. Aprende técnicas culinarias saludables y sostenibles.",
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
        descripcion: "Aprende a usar tecnologías educativas modernas en el aula. Transforma tu metodología de enseñanza con herramientas digitales.",
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
        descripcion: "Aprende a diagnosticar y reparar problemas comunes en PC. Conviértete en técnico certificado en reparación de hardware.",
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
        descripcion: "Recorrido por los movimientos artísticos del siglo XX. Analiza obras maestras y comprende el contexto histórico del arte moderno.",
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
        descripcion: "Perfecciona tu inglés con conversaciones fluidas y naturales. Desarrolla confianza para comunicarte en contextos profesionales.",
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
        descripcion: "Introducción a la Lengua de Señas Argentina (LSA). Aprende a comunicarte de manera inclusiva con la comunidad sorda.",
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
        descripcion: "Estrategias comprobadas para mejorar tus habilidades de venta. Aumenta tu productividad y cierra más negocios.",
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
        nombre: "Marketing Digital y Redes Sociales",
        categoria: "marketing",
        descripcion: "Domina las estrategias de marketing digital. Aprende a crear campañas exitosas en redes sociales y medir su impacto.",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$22,000",
        duracion: "media",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Marketing", "Digital", "Redes Sociales", "Campañas"]
    },
    {
        id: 12,
        nombre: "Psicología Aplicada al Trabajo",
        categoria: "psicologia",
        descripcion: "Principios psicológicos para mejorar el ambiente laboral. Desarrolla habilidades de liderazgo y manejo de equipos.",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$16,000",
        duracion: "media",
        nivel: "avanzado",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Psicología", "Trabajo", "Liderazgo", "Equipos"]
    },
    {
        id: 13,
        nombre: "Química Básica para Estudiantes",
        categoria: "ciencias",
        descripcion: "Fundamentos de química general con experimentos virtuales. Ideal para estudiantes de secundaria y universitarios.",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "larga",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Química", "Ciencias", "Experimentos", "Básico"]
    },
    {
        id: 14,
        nombre: "Atención al Cliente Excepcional",
        categoria: "atencion-cliente",
        descripcion: "Técnicas avanzadas para brindar un servicio al cliente excepcional. Maneja situaciones difíciles con profesionalismo.",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$14,000",
        duracion: "corta",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Atención", "Cliente", "Servicio", "Profesionalismo"]
    },
    {
        id: 15,
        nombre: "Desarrollo de Habilidades Blandas",
        categoria: "habilidades-blandas",
        descripcion: "Fortalece tu comunicación, trabajo en equipo y liderazgo. Habilidades esenciales para el éxito profesional.",
        modalidad: "presencial",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "lengua-señas",
        tags: ["Soft Skills", "Comunicación", "Liderazgo", "Trabajo en Equipo"]
    },
    {
        id: 16,
        nombre: "Fotografía Digital Creativa",
        categoria: "arte",
        descripcion: "Aprende composición, iluminación y edición fotográfica. Desarrolla tu ojo artístico y técnica profesional.",
        modalidad: "virtual-asincrono",
        costo: "arancelado",
        precio: "$19,000",
        duracion: "media",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "video",
        accesibilidad: "subtitulos",
        tags: ["Fotografía", "Digital", "Creatividad", "Edición"]
    },
    {
        id: 17,
        nombre: "Excel Avanzado para Profesionales",
        categoria: "programacion",
        descripcion: "Domina Excel desde macros hasta análisis de datos complejos. Conviértete en un experto en hojas de cálculo.",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$13,000",
        duracion: "corta",
        nivel: "avanzado",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Excel", "Macros", "Análisis", "Datos"]
    },
    {
        id: 18,
        nombre: "Nutrición y Alimentación Saludable",
        categoria: "salud",
        descripcion: "Principios de nutrición equilibrada y planificación de menús saludables. Mejora tu bienestar a través de la alimentación.",
        modalidad: "virtual-asincrono",
        costo: "gratuito",
        precio: "Gratuito",
        duracion: "media",
        nivel: "inicial",
        certificado: "no",
        idioma: "español",
        formato: "pdf",
        accesibilidad: "audio-descripcion",
        tags: ["Nutrición", "Salud", "Alimentación", "Bienestar"]
    },
    {
        id: 19,
        nombre: "Francés Básico Conversacional",
        categoria: "idiomas",
        descripcion: "Inicia tu aprendizaje del francés con conversaciones básicas. Ideal para viajeros y principiantes.",
        modalidad: "virtual-sincrono",
        costo: "arancelado",
        precio: "$17,000",
        duracion: "larga",
        nivel: "inicial",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Francés", "Básico", "Conversación", "Viajes"]
    },
    {
        id: 20,
        nombre: "Reparación de Electrodomésticos",
        categoria: "mantenimiento",
        descripcion: "Aprende a diagnosticar y reparar electrodomésticos comunes. Genera ingresos adicionales con esta habilidad práctica.",
        modalidad: "presencial",
        costo: "arancelado",
        precio: "$21,000",
        duracion: "larga",
        nivel: "intermedio",
        certificado: "si",
        idioma: "español",
        formato: "clases-vivo",
        accesibilidad: "subtitulos",
        tags: ["Electrodomésticos", "Reparación", "Técnico", "Diagnóstico"]
    }
];

// ===== VARIABLES GLOBALES =====
let cursosFiltrados = [];
let filtrosActivos = {};
let terminoBusqueda = '';

// ===== INICIALIZACIÓN PRINCIPAL =====
document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Iniciando ReDucativa...");
    
    // Inicializar componentes
    initNavigation();
    initButtonEffects();
    initCarousel();
    initCarouselHero(); // Añadir carrusel del hero
    observeStats(); // para animar las estadisticas
    
    // Inicializar buscador si existe la sección
    const searchSection = document.getElementById('buscador');
    if (searchSection) {
        setTimeout(() => {
            initBuscador();
        }, 100);
    }
});

// ===== FUNCIÓN PARA INICIALIZAR EL CARRUSEL DEL HERO =====
function initCarouselHero() {
    const images = document.querySelectorAll('.carousel-img');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!images.length) return;
    
    let currentSlide = 0;
    const totalSlides = images.length;
    
    function showSlide(index) {
        // Ocultar todas las imágenes
        images.forEach(img => img.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Mostrar imagen actual
        images[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners para botones
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-slide cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Funciones globales para el carrusel (para onclick en HTML)
function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-img');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    if (direction === 1) {
        currentSlide = (currentSlide + 1) % images.length;
    } else {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
    }
    
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    images[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const images = document.querySelectorAll('.carousel-img');
    const indicators = document.querySelectorAll('.indicator');
    
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    images[index].classList.add('active');
    indicators[index].classList.add('active');
}

// ===== INICIALIZACIÓN DEL BUSCADOR =====
function initBuscador() {
    console.log("🔍 Inicializando buscador...");
    
    // Verificar elementos críticos
    const coursesGrid = document.getElementById('coursesGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!coursesGrid) {
        console.error("❌ No se encontró coursesGrid");
        return;
    }
    
    if (!resultsCount) {
        console.error("❌ No se encontró resultsCount");
        return;
    }
    
    // Inicializar variables
    cursosFiltrados = [...cursosData];
    filtrosActivos = {};
    terminoBusqueda = '';
    
    // Configurar eventos
    setupEventListeners();
    
    // Mostrar cursos inmediatamente
    renderCourses();
    updateResultsCount();
    
    console.log("✅ Buscador inicializado correctamente");
}

// ===== CONFIGURAR EVENT LISTENERS =====
function setupEventListeners() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Limpiar búsqueda
    const clearSearch = document.getElementById('clearSearch');
    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchInput);
    }
    
    // Filtros
    const filterTitles = document.querySelectorAll('.filter-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', toggleFilter);
    });
    
    // Checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Limpiar filtros
    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
        clearFilters.addEventListener('click', clearAllFilters);
    }
    
    // Ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Toggle móvil
    const toggleFilters = document.getElementById('toggleFilters');
    const filtersSidebar = document.getElementById('filtersSidebar');
    if (toggleFilters && filtersSidebar) {
        toggleFilters.addEventListener('click', () => {
            filtersSidebar.classList.toggle('active');
        });
    }
}

// ===== CREAR TARJETA DE CURSO MEJORADA =====
function createCourseCard(curso) {
    return `
        <div class="course-card" data-id="${curso.id}">
            <div class="course-header">
                <div class="course-category">
                    <i class="fas ${getCategoryIcon(curso.categoria)}"></i>
                    ${getCategoryName(curso.categoria)}
                </div>
                
                <h3 class="course-title">${curso.nombre}</h3>
                <p class="course-description">${curso.descripcion}</p>
                
                <div class="course-info">
                    <div class="info-item">
                        <i class="fas fa-desktop"></i>
                        <span>${getModalityText(curso.modalidad)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>${getDurationText(curso.duracion)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-signal"></i>
                        <span>${getLevelText(curso.nivel)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-certificate"></i>
                        <span>${curso.certificado === 'si' ? 'Con Certificado' : 'Sin Certificado'}</span>
                    </div>
                </div>
                
                <div class="course-tags">
                    <span class="course-tag ${curso.costo === 'gratuito' ? 'free' : 'paid'}">
                        <i class="fas ${curso.costo === 'gratuito' ? 'fa-gift' : 'fa-credit-card'}"></i>
                        ${curso.costo === 'gratuito' ? 'Gratuito' : 'Arancelado'}
                    </span>
                    <span class="course-tag">
                        <i class="fas fa-globe"></i>
                        ${getLanguageText(curso.idioma)}
                    </span>
                    <span class="course-tag">
                        <i class="fas ${getFormatIcon(curso.formato)}"></i>
                        ${getFormatText(curso.formato)}
                    </span>
                    ${curso.accesibilidad ? `
                        <span class="course-tag">
                            <i class="fas fa-universal-access"></i>
                            ${getAccessibilityText(curso.accesibilidad)}
                        </span>
                    ` : ''}
                </div>
            </div>
            
            <div class="course-footer">
                <div class="course-price ${curso.costo === 'gratuito' ? 'free' : ''}">
                    ${curso.precio}
                </div>
                <button class="course-btn" onclick="showCourseDetails(${curso.id})" aria-label="Ver detalles de ${curso.nombre}">
                    <i class="fas fa-arrow-right"></i>
                    Ver Detalles
                </button>
            </div>
        </div>
    `;
}

// ===== FUNCIONES AUXILIARES MEJORADAS =====
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
    return icons[categoria] || 'fa-book';
}

function getCategoryName(categoria) {
    const names = {
        'programacion': 'Programación',
        'arte': 'Arte y Creatividad',
        'salud': 'Salud y Bienestar',
        'cocina': 'Gastronomía',
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
    return names[categoria] || categoria;
}

function getModalityText(modalidad) {
    const texts = {
        'presencial': 'Presencial',
        'virtual-asincrono': 'Virtual Asincrónico',
        'virtual-sincrono': 'Virtual Sincrónico'
    };
    return texts[modalidad] || modalidad;
}

function getDurationText(duracion) {
    const texts = {
        'corta': '1-4 semanas',
        'media': '1-3 meses',
        'larga': '3+ meses'
    };
    return texts[duracion] || duracion;
}

function getLevelText(nivel) {
    const texts = {
        'inicial': 'Inicial',
        'intermedio': 'Intermedio',
        'avanzado': 'Avanzado'
    };
    return texts[nivel] || nivel;
}

function getLanguageText(idioma) {
    const texts = {
        'español': 'Español',
        'ingles': 'Inglés',
        'otro': 'Otro idioma'
    };
    return texts[idioma] || idioma;
}

function getFormatIcon(formato) {
    const icons = {
        'video': 'fa-play-circle',
        'texto': 'fa-file-alt',
        'pdf': 'fa-file-pdf',
        'clases-vivo': 'fa-video'
    };
    return icons[formato] || 'fa-file';
}

function getFormatText(formato) {
    const texts = {
        'video': 'Video',
        'texto': 'Texto',
        'pdf': 'PDF',
        'clases-vivo': 'Clases en Vivo'
    };
    return texts[formato] || formato;
}

function getAccessibilityText(accesibilidad) {
    const texts = {
        'subtitulos': 'Subtítulos',
        'lengua-señas': 'Lengua de Señas',
        'audio-descripcion': 'Audio Descripción'
    };
    return texts[accesibilidad] || accesibilidad;
}

// ===== RENDERIZAR CURSOS MEJORADO =====
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!coursesGrid) {
        console.error('❌ No se encontró coursesGrid');
        return;
    }
    
    // Mostrar indicador de carga
    coursesGrid.classList.add('loading');
    
    setTimeout(() => {
        if (cursosFiltrados.length === 0) {
            coursesGrid.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
        } else {
            if (noResults) noResults.style.display = 'none';
            
            const coursesHTML = cursosFiltrados.map((curso, index) => {
                // Agregar delay para animación escalonada
                const card = createCourseCard(curso);
                return card.replace('class="course-card"', `class="course-card" style="animation-delay: ${index * 0.1}s"`);
            }).join('');
            
            coursesGrid.innerHTML = coursesHTML;
        }
        
        // Remover indicador de carga
        coursesGrid.classList.remove('loading');
        
        console.log(`📚 Mostrando ${cursosFiltrados.length} cursos`);
    }, 100);
}

// ===== MANEJO DE BÚSQUEDA =====
function handleSearch(event) {
    terminoBusqueda = event.target.value.toLowerCase().trim();
    
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        clearBtn.style.opacity = terminoBusqueda ? '1' : '0';
        clearBtn.style.visibility = terminoBusqueda ? 'visible' : 'hidden';
    }
    
    applyFilters();
}

function clearSearchInput() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        terminoBusqueda = '';
        
        const clearBtn = document.getElementById('clearSearch');
        if (clearBtn) {
            clearBtn.style.opacity = '0';
            clearBtn.style.visibility = 'hidden';
        }
        
        applyFilters();
    }
}

// ===== APLICAR FILTROS =====
function applyFilters() {
    cursosFiltrados = cursosData.filter(curso => {
        // Filtro de búsqueda
        if (terminoBusqueda) {
            const searchText = [
                curso.nombre,
                curso.descripcion,
                curso.categoria,
                ...curso.tags
            ].join(' ').toLowerCase();
            
            if (!searchText.includes(terminoBusqueda)) {
                return false;
            }
        }
        
        // Filtros por categorías
        for (const [filterName, filterValues] of Object.entries(filtrosActivos)) {
            if (filterValues.length > 0 && !filterValues.includes(curso[filterName])) {
                return false;
            }
        }
        
        return true;
    });
    
    renderCourses();
    updateResultsCount();
}

// ===== ACTUALIZAR CONTADOR =====
function updateResultsCount() {
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

// ===== TOGGLE FILTROS =====
function toggleFilter(event) {
    const filterTitle = event.currentTarget;
    const filterName = filterTitle.getAttribute('data-filter');
    const filterContent = document.getElementById(filterName + '-content');
    
    if (filterContent) {
        filterTitle.classList.toggle('active');
        filterContent.classList.toggle('active');
    }
}

// ===== MANEJO DE CAMBIOS EN FILTROS =====
function handleFilterChange(event) {
    const checkbox = event.target;
    const filterName = checkbox.name;
    const filterValue = checkbox.value;
    
    if (!filtrosActivos[filterName]) {
        filtrosActivos[filterName] = [];
    }
    
    if (checkbox.checked) {
        if (!filtrosActivos[filterName].includes(filterValue)) {
            filtrosActivos[filterName].push(filterValue);
        }
    } else {
        filtrosActivos[filterName] = filtrosActivos[filterName].filter(value => value !== filterValue);
        if (filtrosActivos[filterName].length === 0) {
            delete filtrosActivos[filterName];
        }
    }
    
    applyFilters();
}

// ===== LIMPIAR FILTROS =====
function clearAllFilters() {
    filtrosActivos = {};
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    clearSearchInput();
    applyFilters();
}

// ===== ORDENAMIENTO =====
function handleSort(event) {
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
            cursosFiltrados.sort((a, b) => a.id - b.id);
    }
    
    renderCourses();
}

// ===== MOSTRAR DETALLES DEL CURSO MEJORADO =====
function showCourseDetails(cursoId) {
    const curso = cursosData.find(c => c.id === cursoId);
    if (!curso) {
        console.error('Curso no encontrado');
        return;
    }
    
    // Crear modal personalizado en lugar de alert
    const modalHTML = `
        <div class="course-modal" id="courseModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        ">
            <div style="
                background: var(--white);
                border-radius: var(--border-radius-lg);
                padding: var(--spacing-xl);
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                margin: var(--spacing-lg);
                box-shadow: var(--shadow-heavy);
                position: relative;
            ">
                <button onclick="closeModal()" style="
                    position: absolute;
                    top: var(--spacing-md);
                    right: var(--spacing-md);
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--charcoal);
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: var(--transition);
                " onmouseover="this.style.background='var(--light-gray)'" onmouseout="this.style.background='none'">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="course-category" style="margin-bottom: var(--spacing-md);">
                    <i class="fas ${getCategoryIcon(curso.categoria)}"></i>
                    ${getCategoryName(curso.categoria)}
                </div>
                
                <h2 style="
                    font-family: var(--font-primary);
                    color: var(--primary-burgundy);
                    margin-bottom: var(--spacing-md);
                    font-size: 1.8rem;
                ">${curso.nombre}</h2>
                
                <p style="
                    color: var(--dark-brown);
                    margin-bottom: var(--spacing-lg);
                    line-height: 1.6;
                ">${curso.descripcion}</p>
                
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--spacing-md);
                    margin-bottom: var(--spacing-lg);
                    padding: var(--spacing-md);
                    background: var(--light-gray);
                    border-radius: var(--border-radius);
                ">
                    <div><strong>Modalidad:</strong> ${getModalityText(curso.modalidad)}</div>
                    <div><strong>Duración:</strong> ${getDurationText(curso.duracion)}</div>
                    <div><strong>Nivel:</strong> ${getLevelText(curso.nivel)}</div>
                    <div><strong>Certificado:</strong> ${curso.certificado === 'si' ? 'Sí' : 'No'}</div>
                    <div><strong>Idioma:</strong> ${getLanguageText(curso.idioma)}</div>
                    <div><strong>Formato:</strong> ${getFormatText(curso.formato)}</div>
                </div>
                
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: var(--spacing-lg);
                    border-top: 1px solid var(--border-color);
                ">
                    <div style="
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: ${curso.costo === 'gratuito' ? 'var(--sage-green)' : 'var(--primary-burgundy)'};
                        font-family: var(--font-primary);
                    ">${curso.precio}</div>
                    
                    <button onclick="enrollCourse(${curso.id})" style="
                        background: var(--primary-burgundy);
                        color: var(--white);
                        border: none;
                        padding: var(--spacing-md) var(--spacing-lg);
                        border-radius: var(--border-radius);
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: var(--transition);
                    " onmouseover="this.style.background='var(--dark-brown)'" onmouseout="this.style.background='var(--primary-burgundy)'">
                        <i class="fas fa-graduation-cap"></i>
                        Inscribirse
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ===== FUNCIONES AUXILIARES PARA EL MODAL =====
function closeModal() {
    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.remove();
    }
}

function enrollCourse(cursoId) {
    const curso = cursosData.find(c => c.id === cursoId);
    if (curso) {
        alert(`¡Genial! Te has inscrito en: ${curso.nombre}\n\nPronto recibirás más información sobre cómo comenzar.`);
        closeModal();
    }
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(event) {
    const modal = document.getElementById('courseModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== NAVEGACIÓN =====
function initNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // Scroll suave mejorado para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== EFECTOS DE BOTONES CONECTADOS =====
function initButtonEffects() {
    // Botón "Explorar Recursos" del hero
    const explorarBtn = document.getElementById('explorar-btn');
    if (explorarBtn) {
        explorarBtn.addEventListener('click', () => {
            scrollToSection('recursos');
        });
    }

    // Botón "Comenzar Capacitación" del hero
    const capacitacionBtn = document.getElementById('capacitacion-btn');
    if (capacitacionBtn) {
        capacitacionBtn.addEventListener('click', () => {
            scrollToSection('buscador');
        });
    }

    // Botón "Registrarse Gratis" del CTA
    const registrarseBtn = document.getElementById('registrarse-btn');
    if (registrarseBtn) {
        registrarseBtn.addEventListener('click', () => {
            alert('¡Próximamente! Sistema de registro en desarrollo.');
        });
    }

    // ===== CONECTAR TARJETAS DE FEATURES =====
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            handleFeatureCardClick(category);
        });
    });
}

// ===== FUNCIÓN PARA MANEJAR CLICS EN TARJETAS DE FEATURES =====
function handleFeatureCardClick(category) {
    switch(category) {
        case 'recursos':
            // "Biblioteca Digital" - ir al mapa de bibliotecas
            scrollToSection('map-section');
            break;
        case 'capacitacion':
            // "Cursos Especializados" - ir al buscador de cursos
            scrollToSection('buscador');
            break;
        case 'comunidad':
            // "Comunidad Educativa" - ir a fundadoras
            scrollToSection('founders-carousel');
            break;
        case 'herramientas':
            // "Herramientas Interactivas" - ir al buscador con filtro de herramientas
            scrollToSection('buscador');
            // Opcional: pre-filtrar por categoría educación digital
            setTimeout(() => {
                filterByCategory('educacion-digital');
            }, 500);
            break;
        default:
            console.log('Categoría no reconocida:', category);
    }
}

// ===== FUNCIÓN AUXILIAR PARA SCROLL SUAVE =====
function scrollToSection(sectionId) {
    // Primero intentar con el ID directo
    let targetElement = document.getElementById(sectionId);
    
    // Si no existe, intentar con querySelector por clase
    if (!targetElement) {
        targetElement = document.querySelector(`.${sectionId}`);
    }
    
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Añadir efecto visual temporal
        targetElement.style.transition = 'background-color 0.3s ease';
        const originalBg = targetElement.style.backgroundColor;
        targetElement.style.backgroundColor = 'rgba(114, 47, 55, 0.1)';
        
        setTimeout(() => {
            targetElement.style.backgroundColor = originalBg;
        }, 1000);
    } else {
        console.warn(`Sección no encontrada: ${sectionId}`);
    }
}

// ===== FUNCIÓN PARA FILTRAR POR CATEGORÍA =====
function filterByCategory(categoria) {
    // Verificar si el buscador está inicializado
    if (!document.getElementById('coursesGrid')) {
        console.warn('Buscador no inicializado');
        return;
    }
    
    // Limpiar filtros existentes
    clearAllFilters();
    
    // Encontrar y marcar el checkbox de la categoría
    const categoryCheckbox = document.querySelector(`input[name="categoria"][value="${categoria}"]`);
    if (categoryCheckbox) {
        categoryCheckbox.checked = true;
        
        // Activar el filtro
        filtrosActivos.categoria = [categoria];
        
        // Abrir la sección de filtros de categoría
        const categoryFilter = document.querySelector('[data-filter="categoria"]');
        const categoryContent = document.getElementById('categoria-content');
        if (categoryFilter && categoryContent) {
            categoryFilter.classList.add('active');
            categoryContent.classList.add('active');
        }
        
        // Aplicar filtros
        applyFilters();
    }
}

// ===== CARRUSEL DE FUNDADORAS =====
function initCarousel() {
    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const cards = document.querySelectorAll(".founder-card");

    if (!track || !cards.length) return;

    let currentIndex = 0;
    const maxIndex = Math.max(0, cards.length - 3); // Mostrar 3 tarjetas

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 35; // Incluir gap
        const translateX = -currentIndex * cardWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
            updateCarousel();
        });
    }

    // Auto-slide cada 5 segundos
    setInterval(() => {
        currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);

    updateCarousel();
}

// Función para animar los números de las estadísticas
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 segundos de duración
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Función de easing para una animación más suave
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentValue = Math.floor(target * easedProgress);
            stat.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(updateNumber);
    });
}

// Función para detectar cuando la sección entra en el viewport
function observeStats() {
    const statsSection = document.querySelector('.stats');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, {
        threshold: 0.3 // Activar cuando el 30% de la sección sea visible
    });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

console.log("📝 ReDucativa Script Cargado - Todos los botones conectados");