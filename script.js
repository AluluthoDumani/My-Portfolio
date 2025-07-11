// Dark Mode, Navigation, and Background Animation
document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Particle System
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        const particleCount = 80;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 8 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = 15 + Math.random() * 15;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.3 + 0.2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animation = `float ${duration}s infinite ${delay}s`;
            particle.style.opacity = opacity;
            container.appendChild(particle);
        }
    }

    // Floating Skills
    const skillsData = [
        {icon: 'fab fa-js', name: 'JavaScript'},
        {icon: 'fab fa-react', name: 'React'},
        {icon: 'fab fa-python', name: 'Python'},
        {icon: 'fas fa-database', name: 'Database'},
        {icon: 'fab fa-node-js', name: 'Node.js'},
        {icon: 'fas fa-cloud', name: 'Cloud'},
        {icon: 'fas fa-mobile-alt', name: 'Mobile'},
        {icon: 'fas fa-paint-brush', name: 'Design'},
        {icon: 'fab fa-html5', name: 'HTML5'},
        {icon: 'fab fa-css3-alt', name: 'CSS3'},
        {icon: 'fab fa-git-alt', name: 'Git'},
        {icon: 'fab fa-github', name: 'GitHub'}
    ];

    function createSkills() {
        const container = document.getElementById('skillsContainer');
        if (!container) return;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        skillsData.forEach((skill, index) => {
            const skillEl = document.createElement('div');
            skillEl.classList.add('skill');
            skillEl.style.animation = `float ${15 + index}s infinite ease-in-out`;
            const angle = (index / skillsData.length) * Math.PI * 2;
            const radius = Math.min(containerWidth, containerHeight) * 0.3;
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const x = centerX + Math.cos(angle) * radius - 40;
            const y = centerY + Math.sin(angle) * radius - 40;
            skillEl.style.left = `${x}px`;
            skillEl.style.top = `${y}px`;
            skillEl.style.transform = `rotateZ(${angle}rad)`;
            skillEl.innerHTML = `<i class="${skill.icon}"></i>`;
            container.appendChild(skillEl);
        });
    }

    // Initialize particles and skills if containers exist
    createParticles();
    createSkills();

    // --- Rotating hero section skills in a circle ---
    let rotationAngle = 0;
    setInterval(() => {
        const container = document.getElementById('skillsContainer');
        if (!container) return;
        const skills = container.querySelectorAll('.skill');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const radius = Math.min(containerWidth, containerHeight) * 0.3;
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        skills.forEach((skillEl, index) => {
            const angle = ((index / skills.length) * Math.PI * 2) + rotationAngle;
            const x = centerX + Math.cos(angle) * radius - 40;
            const y = centerY + Math.sin(angle) * radius - 40;
            skillEl.style.left = `${x}px`;
            skillEl.style.top = `${y}px`;
            skillEl.style.transform = `rotateZ(${angle}rad)`;
        });
        rotationAngle += 0.01; // Adjust speed here
    }, 30);

    // Interactive mouse effects
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const glowGrid = document.querySelector('.glow-grid');
        if (glowGrid) {
            glowGrid.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
        }
        document.querySelectorAll('.particle').forEach(particle => {
            const moveX = (x - 0.5) * 10;
            const moveY = (y - 0.5) * 10;
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Timeline points visible on load (if using jQuery)
    if (window.jQuery) {
        $('.timeline-point').css('opacity', '1');
    }
});

// ======= Developer Skills 3D Carousel =======
document.addEventListener('DOMContentLoaded', function() {
    // Only run if carousel container exists
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel || !indicatorsContainer || !prevBtn || !nextBtn) return;

    const skills = [
        {
            title: "Frontend Development",
            icon: "fas fa-code",
            description: "Building responsive and interactive user interfaces with modern frameworks.",
            level: 90,
            floatingIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js", "fab fa-react", "fab fa-vuejs"]
        },
        {
            title: "JavaScript",
            icon: "fab fa-js",
            description: "Expert in ES6+, DOM manipulation, and modern JavaScript frameworks.",
            level: 95,
            floatingIcons: ["fab fa-node-js", "fab fa-angular", "fab fa-react", "fab fa-vuejs", "fab fa-npm"]
        },
        {
            title: "React",
            icon: "fab fa-react",
            description: "Creating component-based applications with React ecosystem.",
            level: 85,
            floatingIcons: ["fab fa-js", "fab fa-npm", "fab fa-git-alt", "fab fa-sass", "fab fa-figma"]
        },
        {
            title: "UI/UX Design",
            icon: "fas fa-paint-brush",
            description: "Designing intuitive and visually appealing user experiences.",
            level: 80,
            floatingIcons: ["fab fa-figma", "fab fa-adobe", "fas fa-palette", "fas fa-drafting-compass", "fas fa-magic"]
        },
        {
            title: "Backend Development",
            icon: "fas fa-server",
            description: "Building RESTful APIs and server-side applications.",
            level: 75,
            floatingIcons: ["fab fa-node-js", "fab fa-python", "fas fa-database", "fab fa-php", "fas fa-code"]
        },
        {
            title: "Database Management",
            icon: "fas fa-database",
            description: "Designing and optimizing SQL and NoSQL databases.",
            level: 70,
            floatingIcons: ["fas fa-table", "fas fa-server", "fas fa-code", "fas fa-cloud", "fas fa-sync-alt"]
        },
        {
            title: "DevOps",
            icon: "fas fa-cloud",
            description: "Implementing CI/CD pipelines and cloud infrastructure.",
            level: 65,
            floatingIcons: ["fab fa-docker", "fab fa-aws", "fab fa-git-alt", "fas fa-terminal", "fas fa-cogs"]
        }
    ];

    let currentIndex = 0;
    const totalItems = skills.length;
    const angle = 360 / totalItems;

    // Create carousel items
    skills.forEach((skill, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';

        // Floating icons
        let floatingIconsHtml = '';
        if (skill.floatingIcons && skill.floatingIcons.length > 0) {
            floatingIconsHtml = '<div class="floating-icons">';
            skill.floatingIcons.forEach((iconClass, i) => {
                const top = Math.random() * 120 - 30;
                const left = Math.random() * 120 - 30;
                const animationDuration = 15 + Math.random() * 10;
                const animationDelay = Math.random() * 5;
                floatingIconsHtml += `
                    <i class="${iconClass} floating-icon" 
                       style="top:${top}%; left:${left}%;
                       animation-duration:${animationDuration}s;
                       animation-delay:${animationDelay}s;">
                    </i>
                `;
            });
            floatingIconsHtml += '</div>';
        }

        item.innerHTML = `
            ${floatingIconsHtml}
            <div class="icon-container">
                <div class="icon">
                    <i class="${skill.icon}"></i>
                </div>
            </div>
            <h3 class="skill-title">${skill.title}</h3>
            <p class="skill-description">${skill.description}</p>
            <div class="level">
                <div class="level-bar" style="width: ${skill.level}%"></div>
            </div>
        `;

        carousel.appendChild(item);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    });

    // Position items in 3D space
    function positionItems() {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, i) => {
            const rotateY = i * angle;
            const translateZ = 600;
            item.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
        });
    }

    // Example: Place this in your carousel initialization JS
    function positionCarouselItems() {
        const items = document.querySelectorAll('.carousel-item');
        const total = items.length;
        const angle = 360 / total;
        items.forEach((item, i) => {
            item.style.transform = `rotateY(${i * angle}deg) translateZ(400px)`; // Adjust 400px for spacing
        });
    }
    positionCarouselItems();

    // Update carousel position
    function updateCarousel() {
        carousel.style.transform = `rotateY(${currentIndex * -angle}deg)`;
        document.querySelectorAll('.indicator').forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Navigation
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        else if (e.key === 'ArrowRight') nextBtn.click();
    });

    // Mouse drag support
    let startX, isDragging = false;
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        carousel.style.transition = 'none';
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - startX;
        const sensitivity = 0.5;
        const rotateDelta = diffX * sensitivity;
        carousel.style.transform = `rotateY(${currentIndex * -angle + rotateDelta}deg)`;
    });
    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.transition = 'transform 1s cubic-bezier(0.17, 0.67, 0.1, 0.97)';
        const diffX = e.clientX - startX;
        const threshold = 50;
        if (diffX > threshold) prevBtn.click();
        else if (diffX < -threshold) nextBtn.click();
        else updateCarousel();
    });

    // Initialize
    positionItems();
    updateCarousel();

    // Auto-rotate
    let autoRotate = setInterval(() => {
        nextBtn.click();
    }, 5000);

    // Pause auto-rotate on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoRotate);
    });
    carousel.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });
});
