'use strict';

// ============================================================
// MODAL
// ============================================================
const modalOverlay  = document.getElementById('modal-overlay');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose    = document.getElementById('modal-close');
const modalForm     = document.getElementById('modal-form');
const ctaButtons    = document.querySelectorAll('.cta-btn');

let lastFocusedElement = null;

// Éléments focusables dans la modal
function getModalFocusables() {
  return modalOverlay.querySelectorAll(
    'input, button, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
  );
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const focusables = getModalFocusables();
  if (!focusables.length) return;
  const first = focusables[0];
  const last  = focusables[focusables.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function openModal() {
  lastFocusedElement = document.activeElement;
  modalOverlay.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', trapFocus);

  // Focus premier champ
  const firstInput = modalOverlay.querySelector('input');
  if (firstInput) setTimeout(() => firstInput.focus(), 50);
}

function closeModal() {
  modalOverlay.classList.remove('modal-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', trapFocus);
  if (lastFocusedElement) lastFocusedElement.focus();
}

// Ouvrir via tous les boutons CTA
ctaButtons.forEach(btn => btn.addEventListener('click', openModal));

// Fermer via croix
modalClose.addEventListener('click', closeModal);

// Fermer via clic sur le backdrop
modalBackdrop.addEventListener('click', closeModal);

// Fermer via Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('modal-open')) {
    closeModal();
  }
});

// Soumission formulaire (prototype : juste un feedback visuel)
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = modalForm.querySelector('button[type="submit"]');
  btn.textContent = 'Demande envoyée ✓';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  setTimeout(() => {
    closeModal();
    // Reset
    modalForm.reset();
    btn.textContent = 'Je réserve mon appel';
    btn.disabled = false;
    btn.style.opacity = '';
  }, 1800);
});


// ============================================================
// BURGER MENU
// ============================================================
const burgerBtn  = document.getElementById('burger-btn');
const mobileNav  = document.getElementById('mobile-nav');
const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-link, .cta-btn');

function openBurger() {
  burgerBtn.setAttribute('aria-expanded', 'true');
  burgerBtn.setAttribute('aria-label', 'Fermer le menu');
  mobileNav.classList.add('nav-open');
  document.body.style.overflow = 'hidden';
}

function closeBurger() {
  burgerBtn.setAttribute('aria-expanded', 'false');
  burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
  mobileNav.classList.remove('nav-open');
  document.body.style.overflow = '';
}

function toggleBurger() {
  const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeBurger() : openBurger();
}

burgerBtn.addEventListener('click', toggleBurger);

// Fermer le menu mobile quand on clique sur un lien
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeBurger();
  });
});


// ============================================================
// SMOOTH SCROLL (pour les liens d'ancres)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

initSmoothScroll();


// ============================================================
// FAQ ACCORDION
// ============================================================
function initAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item    = trigger.closest('.faq-item');
      const answer  = item.querySelector('.faq-answer');
      const chevron = trigger.querySelector('.faq-chevron');
      const isOpen  = trigger.getAttribute('aria-expanded') === 'true';

      // Fermer tous les autres
      triggers.forEach(other => {
        if (other === trigger) return;
        const otherItem    = other.closest('.faq-item');
        const otherAnswer  = otherItem.querySelector('.faq-answer');
        const otherChevron = other.querySelector('.faq-chevron');
        other.setAttribute('aria-expanded', 'false');
        otherAnswer.style.maxHeight = '0';
        otherChevron.style.transform = 'rotate(0deg)';
      });

      // Toggle courant
      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
        chevron.style.transform = 'rotate(0deg)';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
}

initAccordion();


// ============================================================
// TÉMOIGNAGES — animation étoiles au scroll (Intersection Observer)
// ============================================================
function initStarsAnimation() {
  const cards = document.querySelectorAll('.temoignage-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const stars = entry.target.querySelectorAll('.star');
      stars.forEach((star, i) => {
        setTimeout(() => {
          star.style.opacity = '1';
        }, i * 100);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
}

initStarsAnimation();


// ============================================================
// NAV SCROLL — backdrop-blur au défilement
// ============================================================
const mainNav = document.getElementById('main-nav');

function onScroll() {
  if (window.scrollY > 20) {
    mainNav.classList.add('nav-scrolled');
  } else {
    mainNav.classList.remove('nav-scrolled');
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
// Vérification initiale (si la page se charge déjà scrollée)
onScroll();


// ============================================================
// BACKGROUND GLOW SPHERES — Float Animation (Organic Motion)
// ============================================================
document.querySelectorAll('.bg-glow-sphere').forEach((sphere, i) => {
  // Animation flottante aléatoire pour chaque sphère
  const duration = 15 + Math.random() * 10; // 15-25s
  const yOffset = 50 + Math.random() * 100; // 50-150px

  gsap.to(sphere, {
    y: yOffset,
    x: Math.random() * 40 - 20, // Oscillation subtile X
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});


// ============================================================
// HERO H1 ANIMATION — Respecte la structure HTML avec spans
// ============================================================
function heroH1Animation() {
  const h1 = document.querySelector('#hero h1');
  if (!h1) return;

  // Anime le H1 tel quel, sans toucher au HTML interne
  gsap.from(h1, {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.1
  });
}
heroH1Animation();


// ============================================================
// PIN SECTION "METHODE" — Timeline Scrollytelling (Progressive Reveal)
// ============================================================
const methodeSection = document.getElementById('methode');
if (methodeSection) {
  const pilierCards = gsap.utils.toArray('[data-pilier]');
  const pilier1 = pilierCards[0];
  const pilier2 = pilierCards[1];
  const pilier3 = pilierCards[2];

  // Vérifier que tous les piliers existent
  if (pilier1 && pilier2 && pilier3) {
    // ========== MAIN TIMELINE WITH PINNING ==========
    const scrollytelling = gsap.timeline({
      scrollTrigger: {
        trigger: methodeSection,
        start: 'top top',
        end: '+=2000', // Assez de place pour chaque pilier
        pin: true,
        scrub: 1.2,
        markers: false
      }
    });

    // LABEL "start" : Pilier 1 déjà visible
    scrollytelling.addLabel('pilier1Start', 0);
    scrollytelling.to(pilier1, { opacity: 1, scale: 1, y: 0, duration: 0.1 }, 'pilier1Start');

    // LABEL "pilier2" : Transition Pilier 2 (opacity 0->1, y: 50->0)
    scrollytelling.addLabel('pilier2Reveal', 0.33);
    scrollytelling.to(pilier2, { opacity: 1, y: 0, duration: 0.4, stagger: 0 }, 'pilier2Reveal');

    // LABEL "pilier3" : Transition Pilier 3 (opacity 0->1, y: 50->0)
    scrollytelling.addLabel('pilier3Reveal', 0.66);
    scrollytelling.to(pilier3, { opacity: 1, y: 0, duration: 0.4, stagger: 0 }, 'pilier3Reveal');
  }
}


// ============================================================
// INITIALISATION LENIS (SMOOTH SCROLL)
// ============================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ============================================================
// ANIMATIONS GSAP & SCROLLTRIGGER
// ============================================================
gsap.registerPlugin(ScrollTrigger);

// 1. Parallax & Zoom AGRESSIF sur le Hero Background (Cinématique Godly)
gsap.to('#hero img', {
  scale: 1.12,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5 /* Lissage plus agressif */
  }
});

// 1b. Halo pulse animation
gsap.to('.hero-halo', {
  opacity: 0.8,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut'
}, 0);

// 2. Hero Stagger Animation (Framer Motion logic: staggerChildren 0.15)
const heroItems = ['#hero h1', '#hero p', '#hero .cta-btn'];
gsap.from(heroItems, {
  y: 60,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15, // Exact Framer staggerChildren
  ease: 'power2.out', // easeOut equivalent
  delay: 0.1
});

// 2b. Number Counting Animations (Stats section)
const statsContainer = document.querySelector('.border-t.border-b.border-white\\/10');
if (statsContainer) {
  const statDivs = statsContainer.querySelectorAll('[class*="text-center"]');

  statDivs.forEach((statDiv) => {
    const valueDiv = statDiv.querySelector('.text-5xl');
    if (!valueDiv) return;

    const text = valueDiv.textContent.trim();
    let targetValue;

    if (text === '47') {
      targetValue = 47;
    } else if (text === '+340%') {
      targetValue = 340;
    } else if (text === '92%') {
      targetValue = 92;
    }

    if (targetValue) {
      const formatValue = (val) => {
        if (text === '+340%') return '+' + Math.round(val) + '%';
        if (text === '92%') return Math.round(val) + '%';
        return Math.round(val);
      };

      const counter = { value: 0 };

      gsap.to(counter, {
        value: targetValue,
        duration: 2.5,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: statDiv,
          start: 'top 80%',
          once: true
        },
        onUpdate: () => {
          valueDiv.textContent = formatValue(counter.value);
        }
      });
    }
  });
}

// 3. FadeUp Scroll Reveal (Framer Motion logic: whileInView, margin: "-100px")
gsap.utils.toArray('.gsap-reveal').forEach(card => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out', // easeOut
    scrollTrigger: {
      trigger: card,
      start: 'top 80%', // margin: "-100px" = 80% visibility
      once: true, // Play une seule fois (whileInView once: true)
      toggleActions: 'play none none none'
    }
  });
});

// 4. Button Spring Animation (Framer: type: "spring", stiffness: 300)
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.08,
      duration: 0.4,
      ease: 'back.out(1.5)' // Spring effect (stiffness 300 ≈ back.out(1.5))
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: 'back.out(1.5)'
    });
  });

  btn.addEventListener('mousedown', () => {
    gsap.to(btn, { scale: 0.95, duration: 0.1, overwrite: 'auto' });
  });

  btn.addEventListener('mouseup', () => {
    gsap.to(btn, { scale: 1.08, duration: 0.2, ease: 'back.out(1.5)' });
  });
});

// 5. Card Hover Spring Animation (Spring stiffness 200 + glassmorphism)
document.querySelectorAll('.pilier-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: 'back.out(1.3)'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'back.out(1.3)'
    });
  });
});

// Témoignages : hover redresse + zoom (rotate back to original)
document.querySelectorAll('.temoignage-card').forEach((card, index) => {
  // Déterminer la rotation originale
  const originalRotation = index === 0 ? -1.2 : (index === 1 ? 0 : 1.2);

  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      scale: 1.02,
      rotation: 0,
      duration: 0.4,
      ease: 'back.out(1.3)'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      rotation: originalRotation,
      duration: 0.3,
      ease: 'back.out(1.3)'
    });
  });
});

// 6. Parallax Scroll (Framer: useTransform scrollY)
ScrollTrigger.create({
  onUpdate: (self) => {
    const scrollY = self.getVelocity() * -1;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      gsap.set(el, { y: window.scrollY * speed });
    });
  }
});

// 7. Stagger Horizontal (Framer: staggerChildren 0.1, x offset)
gsap.utils.toArray('[data-stagger-x]').forEach((item, i) => {
  gsap.from(item, {
    x: -20,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1, // staggerChildren: 0.1
    ease: 'power2.out'
  });
});

// 8. Section Fade-in on Scroll (Framer: whileInView opacity)
gsap.utils.toArray('[data-fade-in]').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      once: true
    }
  });
});

// 9. Sticky CTA — Apparition après le Hero (whileInView logic)
const stickyCta = document.getElementById('sticky-cta');
if (stickyCta) {
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'bottom bottom',
    onEnter: () => {
      gsap.fromTo(stickyCta,
        { y: 50, opacity: 0, pointerEvents: 'none' },
        { y: 0, opacity: 1, pointerEvents: 'auto', duration: 0.5, ease: 'back.out(1.2)' }
      );
    },
    onLeaveBack: () => {
      gsap.to(stickyCta, { opacity: 0, pointerEvents: 'none', duration: 0.4, y: 50 });
    }
  });

  // Sticky CTA ouvre la modal
  stickyCta.addEventListener('click', openModal);
}
