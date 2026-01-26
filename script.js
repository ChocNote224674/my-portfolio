// ==========================================
// YOUSSEF ABDELHEDI - PORTFOLIO
// JavaScript for Interactions
// ==========================================

// Theme Toggle
const initTheme = () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
};

// Smooth Scroll with Offset
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Navbar Scroll Effect
const initNavbarScroll = () => {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 10px var(--shadow-sm)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
};

// Intersection Observer for Animations
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const elements = document.querySelectorAll(`
        .section-header,
        .about-text,
        .research-card,
        .timeline-item,
        .project-card,
        .skill-category,
        .leadership-item,
        .contact-card
    `);
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Active Link Highlighting
const initActiveLinks = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const highlightNav = () => {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = 'var(--text-secondary)';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = 'var(--accent-primary)';
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);
};

// Typing Effect for Hero Subtitle (Optional Enhancement)
const initTypingEffect = () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 1000);
};

// Project Cards Hover Effect Enhancement
const initProjectCardEffects = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(0.5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
};

// Copy Email to Clipboard (Enhanced Contact)
const initCopyEmail = () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    // Visual feedback
                    const originalText = this.querySelector('p').textContent;
                    this.querySelector('p').textContent = 'Copied!';
                    
                    setTimeout(() => {
                        this.querySelector('p').textContent = originalText;
                    }, 2000);
                });
            }
        });
    });
};

// Parallax Effect for Hero Background
const initParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const gridOverlay = hero.querySelector('.grid-overlay');
            if (gridOverlay) {
                gridOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });
};

// Research Cards Stagger Animation
const initResearchCardAnimation = () => {
    const cards = document.querySelectorAll('.research-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
};

// Timeline Progress Indicator
const initTimelineProgress = () => {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    const timelineLine = timeline.querySelector('::before');
    
    window.addEventListener('scroll', () => {
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        
        if (scrollPosition > timelineTop) {
            const progress = Math.min(
                ((scrollPosition - timelineTop) / timelineHeight) * 100,
                100
            );
            
            // Update timeline line height based on scroll
            timeline.style.setProperty('--timeline-progress', `${progress}%`);
        }
    });
};

// Mobile Menu Toggle (for future enhancement)
const initMobileMenu = () => {
    // This can be implemented when adding a mobile hamburger menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

// Performance: Debounce Function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Lazy Load Images (if you add images later)
const initLazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Easter Egg: Konami Code
const initEasterEgg = () => {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Easter egg triggered!
                document.body.style.animation = 'rainbow 2s infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 10000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
};

// Cursor Trail Effect (Optional Creative Enhancement)
const initCursorTrail = () => {
    const trail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent-primary);
            border-radius: 50%;
            pointer-events: none;
            opacity: ${1 - (i / trailLength)};
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    setInterval(() => {
        trail.forEach((dot, index) => {
            const next = trail[index + 1] || { offsetLeft: mouseX, offsetTop: mouseY };
            dot.style.left = `${next.offsetLeft || mouseX}px`;
            dot.style.top = `${next.offsetTop || mouseY}px`;
        });
    }, 30);
};

// Initialize All Functions
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initActiveLinks();
    // initTypingEffect(); // Uncomment if you want typing effect
    initProjectCardEffects();
    initCopyEmail();
    initParallax();
    initResearchCardAnimation();
    initTimelineProgress();
    initMobileMenu();
    initLazyLoad();
    initEasterEgg();
    // initCursorTrail(); // Uncomment for cursor trail effect (might be too much)
    
    console.log('🚀 Portfolio loaded successfully!');
    console.log('✨ Designed by Youssef Abdelhedi');
});

// Prevent animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});