// ====================== Mobile Menu Toggle ======================
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.getElementById('menu-list');
    
    // Event listener untuk toggle menu
    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('hidden');
    });
    
    // Menutup menu saat link di klik (opsional)
    const menuLinks = menuList.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuList.classList.add('hidden');
        });
    });
});

// ====================== Navbar Scroll Effect ======================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// ====================== Gallery Slider ======================
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slide');
    const dotsContainer = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    // Show initial slide
    showSlide(currentIndex);

    // Next slide
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    });

    // Auto-advance slides (optional)
    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    // Pause on hover
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    galleryContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    });

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }
});


