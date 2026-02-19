// ============================================
// sortNow & Company - Interactive Features
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // Navigation
  // ============================================

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      const icon = this.querySelector('i') || this;
      if (navMenu.classList.contains('active')) {
        icon.textContent = '✕';
      } else {
        icon.textContent = '☰';
      }
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          const icon = mobileMenuToggle.querySelector('i') || mobileMenuToggle;
          icon.textContent = '☰';
        }
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================
  // Smooth Scrolling
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ============================================
  // Scroll Animations
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all glass cards for animation
  const animatedElements = document.querySelectorAll('.glass-card, .hero-content');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });

  // ============================================
  // Form Handling
  // ============================================

  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      const formData = {
        name: document.querySelector('#name')?.value,
        email: document.querySelector('#email')?.value,
        company: document.querySelector('#company')?.value,
        message: document.querySelector('#message')?.value
      };

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }

      // Simulate form submission
      showNotification('Thank you! We will get back to you soon.', 'success');
      contactForm.reset();

      // In production, you would send this data to a server
      console.log('Form submitted:', formData);
    });
  }

  // ============================================
  // Notification System
  // ============================================

  function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      right: '20px',
      padding: '1rem 1.5rem',
      background: type === 'success'
        ? 'rgba(34, 197, 94, 0.2)'
        : 'rgba(239, 68, 68, 0.2)',
      backdropFilter: 'blur(20px)',
      border: `1px solid ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
      borderRadius: '0.75rem',
      color: '#ffffff',
      fontSize: '0.95rem',
      fontWeight: '500',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      zIndex: '10000',
      animation: 'slideInRight 0.3s ease',
      maxWidth: '400px'
    });

    document.body.appendChild(notification);

    // Remove notification after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // ============================================
  // Card Hover Effects
  // ============================================

  const glassCards = document.querySelectorAll('.glass-card');

  glassCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // ============================================
  // CTA Button Analytics (placeholder)
  // ============================================

  const ctaButtons = document.querySelectorAll('.btn-primary');

  ctaButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      const buttonText = this.textContent.trim();
      console.log('CTA clicked:', buttonText);
      // In production, send to analytics
    });
  });

  // ============================================
  // Parallax Effect for Hero Section
  // ============================================

  // ============================================
  // Parallax Effect for Hero Content (Subtle)
  // ============================================

  const heroContent = document.querySelector('.hero-content');

  if (heroContent) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      // Move content slightly slower than scroll to create depth
      // But verify it doesn't push into next section visually 
      // if the next section has higher z-index (default is usually static)
      // Actually, to avoid overlap issues reported, let's keep it simple for now
      // or ensure the hero container has overflow hidden if we animate children.
      // But previously the WHOLE hero was moving. That was definitely the overlap cause.

      if (scrolled < window.innerHeight) {
        // Only Opacity fade out
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
        // heroContent.style.transform = `translateY(${scrolled * 0.3}px)`; // Disabled to prevent overlap
      }
    });
  }

  // ============================================
  // ScrollSpy / Active Link Highlight (Intersection Observer)
  // ============================================
  const sections = document.querySelectorAll('section[id]');

  const scrollSpyOptions = {
    threshold: 0.2, // Trigger when 20% of section is visible
    rootMargin: "-100px 0px -50% 0px" // Offset for navbar
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        // Add active class to corresponding link
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, scrollSpyOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // ============================================
  // Dynamic Year in Footer
  // ============================================

  const yearElement = document.querySelector('#current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});

// ============================================
// Add CSS for notifications animation
// ============================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
