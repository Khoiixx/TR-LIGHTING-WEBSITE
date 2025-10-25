// TR Lighting Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initMobileMenu();
    initTypewriter();
    initParticles();
    initScrollAnimations();
    initDiscordCopy();
    initButtonAnimations();
    
    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                }
            });
        }
    }
    
    // Typewriter Effect for Hero Text
    function initTypewriter() {
        const typedElement = document.getElementById('typed-text');
        if (typedElement) {
            const typed = new Typed('#typed-text', {
                strings: ['Lighting for Events', 'Concert Experiences', 'Stage Productions', 'Live Shows'],
                typeSpeed: 80,
                backSpeed: 60,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    // Particle System
    function initParticles() {
        const particlesContainer = document.getElementById('particles-container');
        if (particlesContainer) {
            // Create particles
            for (let i = 0; i < 50; i++) {
                createParticle(particlesContainer);
            }
            
            // Continuously create new particles
            setInterval(() => {
                if (particlesContainer.children.length < 30) {
                    createParticle(particlesContainer);
                }
            }, 500);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 25000);
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Discord Username Copy
    function initDiscordCopy() {
        const copyBtn = document.getElementById('copy-discord');
        if (copyBtn) {
            copyBtn.addEventListener('click', function() {
                const username = 'khoii_fishh';
                navigator.clipboard.writeText(username).then(() => {
                    // Show success feedback
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copy-success');
                    
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                        copyBtn.classList.remove('copy-success');
                    }, 2000);
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = username;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 2000);
                });
            });
        }
    }
    
    // Button Hover Animations
    function initButtonAnimations() {
        // Glow button hover effect
        const glowButtons = document.querySelectorAll('.glow-button');
        glowButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    scale: 1.05,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            button.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
        
        // Product card hover effects
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    translateY: -8,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
        
        // Contact card hover effects
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    translateY: -4,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
    
    // Navigation Link Hover Effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate elements on load
        anime({
            targets: '.fade-in',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
        });
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-bg');
        
        if (heroBackground) {
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Dynamic cursor glow effect
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update glow effects based on mouse position
        const glowElements = document.querySelectorAll('.glow-text, .glow-button');
        glowElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(mouseX - (rect.left + rect.width / 2), 2) + 
                Math.pow(mouseY - (rect.top + rect.height / 2), 2)
            );
            
            if (distance < 200) {
                const intensity = 1 - (distance / 200);
                element.style.filter = `brightness(${1 + intensity * 0.3})`;
            } else {
                element.style.filter = 'brightness(1)';
            }
        });
    });
    
    // Performance optimization: Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.display = 'none';
        });
    }
    
    // Console easter egg
    console.log('%c🌟 TR Lighting ✦', 'color: #9333ea; font-size: 24px; font-weight: bold;');
    console.log('%cThe Future of Lighting for Events', 'color: #a855f7; font-size: 14px;');
    console.log('%cBuilt with ❤️ using modern web technologies', 'color: #9ca3af; font-size: 12px;');
});