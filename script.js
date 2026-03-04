/* =============================================
   BIBEK TAMANG — 3D PORTFOLIO WEBSITE
   Vanilla JavaScript (No libraries)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ===== DOM REFERENCES =====
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const particlesContainer = document.getElementById('particles');
  const profileCard = document.getElementById('profileCard');
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // ===== PROJECT DATA (from GitHub: IGbeebek) =====
  const projectData = [
    {
      icon: '🏥',
      title: 'MediReach',
      desc: 'A healthcare accessibility platform built with JavaScript, designed to connect patients with medical services and resources. Features a full-stack architecture for managing healthcare-related workflows.',
      tags: ['JavaScript', 'Full-Stack', 'Healthcare'],
      features: [
        'Patient-doctor connectivity features',
        'Medical service directory and search',
        'Full-stack JavaScript architecture',
        'User-friendly responsive interface',
        'Healthcare resource management',
        'Accessible design for all users'
      ],
      github: 'https://github.com/IGbeebek/MediReach',
      demo: ''
    },
    {
      icon: '🎨',
      title: 'Art Gallery GUI',
      desc: 'A Java-based desktop application featuring a graphical user interface for browsing, managing, and displaying art collections. Built with Java GUI frameworks for a smooth desktop experience.',
      tags: ['Java', 'GUI', 'Desktop', 'OOP'],
      features: [
        'Interactive art gallery browsing',
        'Java Swing/AWT graphical interface',
        'Art collection management system',
        'Image display with metadata',
        'Object-oriented architecture',
        'Search and filter capabilities'
      ],
      github: 'https://github.com/IGbeebek/Art-Gallery-GUI',
      demo: ''
    },
    {
      icon: '📦',
      title: 'Inventory Management System',
      desc: 'A Python-powered inventory management system for tracking stock levels, managing products, and generating reports. Ideal for small to medium-scale business inventory needs.',
      tags: ['Python', 'Management', 'CLI'],
      features: [
        'Product inventory tracking',
        'Stock level monitoring & alerts',
        'Add, update, and remove items',
        'Report generation functionality',
        'Python-based backend logic',
        'Clean command-line interface'
      ],
      github: 'https://github.com/IGbeebek/Inventory-Management-System',
      demo: ''
    },
    {
      icon: '✅',
      title: 'To-Do List App',
      desc: 'An interactive to-do list web application with task management features including adding, editing, deleting, and marking tasks as complete. Deployed live on GitHub Pages.',
      tags: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
      features: [
        'Add, edit, and delete tasks',
        'Mark tasks as complete',
        'Clean and responsive UI',
        'Local storage persistence',
        'Live on GitHub Pages',
        'Lightweight and fast'
      ],
      github: 'https://github.com/IGbeebek/To_Do_List',
      demo: 'https://igbeebek.github.io/To_Do_List/'
    },
    {
      icon: '🎨',
      title: 'Color Picker',
      desc: 'A sleek, interactive color picker tool built with vanilla JavaScript. Supports hex, RGB, and HSL color formats — perfect for designers and developers who need quick color references.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Tool'],
      features: [
        'Pick colors with visual interface',
        'Hex, RGB, and HSL output formats',
        'Copy color codes to clipboard',
        'Real-time color preview',
        'Responsive and lightweight',
        'No dependencies required'
      ],
      github: 'https://github.com/IGbeebek/Color-Picker',
      demo: ''
    },
    {
      icon: '🕐',
      title: 'Digital Clock',
      desc: 'A stylish digital clock web application with real-time hour, minute, and second display. Features clean design, smooth animations, and a modern visual aesthetic.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Animation'],
      features: [
        'Real-time clock display',
        'Hours, minutes, and seconds',
        'Smooth transition animations',
        'Modern and clean UI design',
        'Responsive layout',
        'Lightweight vanilla JavaScript'
      ],
      github: 'https://github.com/IGbeebek/Digital_Clock',
      demo: ''
    },
    {
      icon: '⏱',
      title: 'Stopwatch',
      desc: 'A precise and functional stopwatch web application with start, stop, lap recording, and reset functionality. Deployed live on GitHub Pages for easy access.',
      tags: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
      features: [
        'Start, stop, and reset controls',
        'Lap time recording',
        'Millisecond precision timing',
        'Clean and intuitive interface',
        'Live on GitHub Pages',
        'Responsive across devices'
      ],
      github: 'https://github.com/IGbeebek/stopWatch',
      demo: 'https://igbeebek.github.io/stopWatch/'
    }
  ];

  // ========================================
  // 1. PARTICLES BACKGROUND
  // ========================================
  function createParticles() {
    const count = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 4 + 1;
      const hue = Math.random() > 0.5 ? 180 : 270; // cyan or purple
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 15;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        background: hsla(${hue}, 100%, 60%, ${Math.random() * 0.4 + 0.1});
        box-shadow: 0 0 ${size * 3}px hsla(${hue}, 100%, 60%, 0.3);
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
      `;

      particlesContainer.appendChild(particle);
    }
  }
  createParticles();

  // ========================================
  // 2. NAVBAR SCROLL EFFECT
  // ========================================
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;

    // Add/remove scrolled class
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active section
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach((item) => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ========================================
  // 3. MOBILE NAV TOGGLE
  // ========================================
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  // ========================================
  // 4. 3D TILT EFFECT (Mouse-based)
  // ========================================
  const tiltElements = document.querySelectorAll('[data-tilt]');
  const tiltConfig = {
    maxTilt: 12,       // Max tilt in degrees
    speed: 400,        // Transition speed in ms
    glare: false,
    perspective: 1200
  };

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltConfig.maxTilt;
      const rotateY = ((x - centerX) / centerX) * tiltConfig.maxTilt;

      const inner = el.querySelector('.project-card-inner, .contact-form, .contact-card, .cube-face');
      if (inner) {
        inner.style.transform = `perspective(${tiltConfig.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      const inner = el.querySelector('.project-card-inner, .contact-form, .contact-card, .cube-face');
      if (inner) {
        inner.style.transform = `perspective(${tiltConfig.perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        inner.style.transition = `transform ${tiltConfig.speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
      }
    });

    el.addEventListener('mouseenter', () => {
      const inner = el.querySelector('.project-card-inner, .contact-form, .contact-card, .cube-face');
      if (inner) {
        inner.style.transition = 'transform 100ms ease-out';
      }
    });
  });

  // ========================================
  // 5. HERO PARALLAX MOUSE MOVEMENT
  // ========================================
  const heroSection = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  const heroCardWrapper = document.querySelector('.hero-card-wrapper');

  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      // Parallax on hero content
      if (heroContent) {
        heroContent.style.transform = `translate(${moveX * -15}px, ${moveY * -10}px)`;
      }

      // Stronger parallax on card
      if (heroCardWrapper) {
        heroCardWrapper.style.transform = `translate(${moveX * 20}px, ${moveY * 15}px)`;
      }

      // Move particles slightly
      if (particlesContainer) {
        particlesContainer.style.transform = `translate(${moveX * 8}px, ${moveY * 8}px)`;
      }
    });
  }

  // ========================================
  // 6. SCROLL REVEAL ANIMATIONS
  // ========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger children if in a grid
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = parent.querySelectorAll('.reveal');
            siblings.forEach((sib, i) => {
              if (sib === entry.target) {
                entry.target.style.transitionDelay = `${i * 0.1}s`;
              }
            });
          }

          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ========================================
  // 7. ANIMATED COUNTERS (Hero stats)
  // ========================================
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target);
      const duration = 2000;
      const start = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * eased);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Trigger counters when hero is visible
  const heroObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  const heroEl = document.getElementById('hero');
  if (heroEl) heroObserver.observe(heroEl);

  // ========================================
  // 8. (Removed — skill bars no longer used)
  // ========================================

  // ========================================
  // 9. PROJECT MODAL
  // ========================================
  const projectButtons = document.querySelectorAll('.project-details-btn');

  projectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.project);
      const project = projectData[index];
      if (!project) return;

      // Fill modal content
      document.getElementById('modalIcon').textContent = project.icon;
      document.getElementById('modalTitle').textContent = project.title;
      document.getElementById('modalDesc').textContent = project.desc;

      // Tags
      const tagsContainer = document.getElementById('modalTags');
      tagsContainer.innerHTML = project.tags.map((t) => `<span>${t}</span>`).join('');

      // Features
      const featuresContainer = document.getElementById('modalFeatures');
      featuresContainer.innerHTML = project.features.map((f) => `<li>${f}</li>`).join('');

      // Links
      const demoLink = document.getElementById('modalDemo');
      const sourceLink = document.getElementById('modalSource');
      if (sourceLink) {
        sourceLink.href = project.github || '#';
      }
      if (demoLink) {
        if (project.demo) {
          demoLink.href = project.demo;
          demoLink.style.display = 'inline-flex';
        } else {
          demoLink.style.display = 'none';
        }
      }

      // Show modal with animation
      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ========================================
  // 10. CONTACT FORM
  // ========================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.btn-submit');
      const originalText = btn.querySelector('span').textContent;

      // Simulate sending
      btn.querySelector('span').textContent = 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      setTimeout(() => {
        formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formStatus.style.color = 'var(--accent-cyan)';
        btn.querySelector('span').textContent = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        contactForm.reset();

        // Clear status after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }, 1500);
    });
  }

  // ========================================
  // 11. SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70; // nav height
        const top = target.offsetTop - offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // 12. DYNAMIC BACKGROUND GRADIENT ON SCROLL
  // ========================================
  function updateBackgroundGradient() {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const hue1 = 240 + scrollPercent * 60; // blue to purple
    const hue2 = 180 + scrollPercent * 40; // cyan to blue

    document.body.style.background = `
      linear-gradient(
        180deg,
        hsl(${hue1}, 15%, 5%) 0%,
        hsl(${hue2}, 10%, 6%) 50%,
        hsl(${hue1 + 20}, 15%, 4%) 100%
      )
    `;
  }

  window.addEventListener('scroll', updateBackgroundGradient, { passive: true });

  // ========================================
  // 13. CURSOR GLOW EFFECT (Desktop only)
  // ========================================
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 240, 255, 0.04), transparent 60%);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
    `;
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursorGlow.style.opacity = '1';
    });
  }

  // ========================================
  // 14. PERFORMANCE: Throttle scroll events
  // ========================================
  let ticking = false;
  const originalScrollHandler = handleNavScroll;

  window.removeEventListener('scroll', handleNavScroll);
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          originalScrollHandler();
          updateBackgroundGradient();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // ========================================
  // 15. PRELOADER (fade out on load)
  // ========================================
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
  });

  // Initial call
  handleNavScroll();
});
