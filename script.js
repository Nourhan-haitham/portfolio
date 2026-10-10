/**
 * Nourhan Haitham — Graphic Designer Portfolio
 * Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeaderScroll();
  initSkillAnimations();
  initProjectGallery();
  initProjectModal();
  initImageUploadPreviews();
  initContactForm();
  initBackToTop();
});

/* ===================================================================
   1. NAVIGATION & MOBILE MENU
   =================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.classList.remove('open');
        mainNav.classList.remove('open');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('open');
      mainNav.classList.remove('open');
    }
  });

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));
}

/* ===================================================================
   2. HEADER SCROLL EFFECT
   =================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ===================================================================
   3. SKILLS PROGRESS BARS ANIMATION
   =================================================================== */
function initSkillAnimations() {
  const skillCards = document.querySelectorAll('.skill-card');
  if (!skillCards.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    skillCards.forEach(card => card.classList.add('animated'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  skillCards.forEach(card => observer.observe(card));
}

/* ===================================================================
   4. PROJECTS GALLERY & FILTERING
   =================================================================== */
function initProjectGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ===================================================================
   5. PROJECT DETAILS MODAL
   =================================================================== */
const projectsData = {
  1: {
    title: "Brand Identity System",
    category: "Brand Identity",
    client: "Acme Creative Studio",
    year: "2026",
    tools: "Adobe Illustrator, Adobe Photoshop",
    description: "A complete visual identity system designed for a contemporary creative studio. The objective was to create a distinctive aesthetic that feels refined, minimalist, and memorable across print and digital media.",
    objectives: "Deliver an authoritative yet modern brand presence, unified visual guidelines, custom logomarks, typography selection, and versatile stationery materials.",
    process: "Competitive Brand Research → Typographic Exploration → Vector Geometry Development → Application to Business Cards, Letterheads & Digital Touchpoints."
  },
  2: {
    title: "Minimalist Logo Mark",
    category: "Logo Design",
    client: "Lumina Lifestyle",
    year: "2026",
    tools: "Adobe Illustrator",
    description: "Crafted a bespoke, minimalist logo mark communicating timeless elegance and modern aesthetic poise. Built with geometric harmony for versatile scaling across tiny icons and large architectural signage.",
    objectives: "Develop an iconic, easily recognizable visual mark that stands out in saturated retail and e-commerce spaces.",
    process: "Concept Ideation → Mathematical Grid Alignment → Monochromatic Contrast Validation → Export to Multi-Format Vector Suites."
  },
  3: {
    title: "Social Media Campaign",
    category: "Social Media Design",
    client: "Aurora Fashion Co.",
    year: "2026",
    tools: "Adobe Photoshop, Adobe Illustrator",
    description: "A high-conversion multi-post social media campaign engineered for Instagram and LinkedIn. Focused on vibrant storytelling, engaging micro-typography, and seamless carousel transitions.",
    objectives: "Boost audience interaction, maintain consistent aesthetic feeds, and drive product discovery through clear call-to-action designs.",
    process: "Audience Persona Study → Color Rhythm Mapping → Layout Templates Creation → Final Export for High-DPI Mobile Displays."
  },
  4: {
    title: "Promotional Event Suite",
    category: "Marketing Design",
    client: "NextGen Creative Summit",
    year: "2026",
    tools: "Adobe Photoshop, Adobe Illustrator",
    description: "Comprehensive marketing materials covering promotional flyers, event roll-up banners, digital announcement slides, and interactive tickets designed with bold visual hierarchy.",
    objectives: "Ensure immediate message legibility from a distance and inspire ticket registrations through dynamic graphic composition.",
    process: "Information Hierarchy Prioritization → Grid Layout & Spatial Balance → Print Preflight & Color Profile Calibration (CMYK)."
  },
  5: {
    title: "Corporate Identity & Stationery",
    category: "Brand Identity",
    client: "Apex Consulting Group",
    year: "2026",
    tools: "Adobe Illustrator, Adobe Photoshop",
    description: "Luxury corporate stationery package featuring high-end business card designs, corporate presentation decks, letterheads, and branded envelopes.",
    objectives: "Establish trust, credibility, and corporate elegance through clean typography, generous margins, and subtle tactile accents.",
    process: "Corporate Stakeholder Discovery → Tactile Material & Paper Weight Selection → Vector Layout Refinement → Client Presentation Mockups."
  },
  6: {
    title: "Editorial Social Visuals",
    category: "Social Media Design",
    client: "Vogue & Verve Magazine",
    year: "2026",
    tools: "Adobe Photoshop",
    description: "A bespoke series of editorial quote cards, story highlights, and curated grid layouts blending editorial photography with thoughtful typography and soft tones.",
    objectives: "Reinforce editorial prestige and cultivate an aspirational digital following through refined graphic harmony.",
    process: "Moodboard Curation → Image Retouching & Color Grading → Typography Layout → Export for Social Story & Feed Formats."
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!modal) return;

  // Modal elements
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalClient = document.getElementById('modalProjectClient');
  const modalDate = document.getElementById('modalProjectDate');
  const modalTools = document.getElementById('modalProjectTools');
  const modalFullDesc = document.getElementById('modalFullDescription');
  const modalObjectives = document.getElementById('modalObjectives');
  const modalProcess = document.getElementById('modalProcess');

  const openModal = (projectId) => {
    const data = projectsData[projectId] || {
      title: `Project Title ${projectId.toString().padStart(2, '0')}`,
      category: "Graphic Design",
      client: "Client / Brand Name",
      year: "2026",
      tools: "Adobe Photoshop, Adobe Illustrator",
      description: "Custom project presentation ready for your portfolio content.",
      objectives: "Deliver an impactful visual solution tailored to client objectives.",
      process: "Research → Ideation → Digital Crafting → Delivery."
    };

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalClient.textContent = `Client: ${data.client}`;
    modalDate.textContent = `Year: ${data.year}`;
    modalTools.textContent = `Tools: ${data.tools}`;
    modalFullDesc.textContent = data.description;
    modalObjectives.textContent = data.objectives;
    modalProcess.textContent = data.process;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ===================================================================
   6. INTERACTIVE IMAGE UPLOAD PREVIEWS
   (Allows Nourhan to test-upload her portrait and covers directly)
   =================================================================== */
function initImageUploadPreviews() {
  // Hero portrait preview
  const personalPhotoInput = document.getElementById('personalPhotoUpload');
  const personalPhotoImg = document.getElementById('personalPhotoImg');
  const personalPlaceholderArea = document.getElementById('photoPlaceholderArea');

  if (personalPhotoInput && personalPhotoImg) {
    personalPhotoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          personalPhotoImg.src = event.target.result;
          personalPhotoImg.classList.remove('hidden');
          // Hide placeholder icon & text elements while keeping the upload button
          const graphic = personalPlaceholderArea.querySelector('.placeholder-graphic');
          const text = personalPlaceholderArea.querySelector('.placeholder-text');
          if (graphic) graphic.style.display = 'none';
          if (text) text.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Project cards cover preview
  const projectInputs = document.querySelectorAll('.project-file-input');
  projectInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const targetImgId = input.getAttribute('data-target-img');
      const targetImg = document.getElementById(targetImgId);

      if (file && targetImg) {
        const reader = new FileReader();
        reader.onload = (event) => {
          targetImg.src = event.target.result;
          targetImg.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
  });
}

/* ===================================================================
   7. CONTACT FORM VALIDATION & HANDLING
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const setGroupError = (input, hasError) => {
    const group = input.closest('.form-group');
    if (group) {
      if (hasError) {
        group.classList.add('has-error');
      } else {
        group.classList.remove('has-error');
      }
    }
  };

  // Real-time error removal on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (!field) return;
    field.addEventListener('input', () => {
      setGroupError(field, false);
      if (feedback) feedback.classList.add('hidden');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim()) {
      setGroupError(nameInput, true);
      isValid = false;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setGroupError(emailInput, true);
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      setGroupError(subjectInput, true);
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      setGroupError(messageInput, true);
      isValid = false;
    }

    if (!isValid) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.querySelector('.feedback-text').textContent = 'Please fill out all required fields correctly.';
        feedback.classList.remove('hidden');
      }
      return;
    }

    // Prepare direct mailto with user's validated inputs
    const recipient = 'nourshaarawy86@gmail.com';
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hello Nourhan,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.querySelector('.feedback-text').innerHTML = `
        <strong>Message prepared!</strong> Opening your email client to send to <em>${recipient}</em>.<br>
        Alternatively, message Nourhan directly on WhatsApp at <strong>01002816904</strong>.
      `;
      feedback.classList.remove('hidden');
    }

    // Launch email client
    window.location.href = mailtoUrl;
  });
}

/* ===================================================================
   8. BACK TO TOP SMOOTH SCROLL
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
