document.addEventListener('DOMContentLoaded', () => {
  // ── Active nav link ──────────────────────────────────────────
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.getAttribute('href').split('/').pop() === pageName) {
      link.classList.add('active');
    }
  });

  // ── Mobile menu toggle ───────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu    = document.querySelector('.nav-menu');
  menuToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // ── Theme toggle ─────────────────────────────────────────────
  const themeToggle = document.querySelector('.theme-toggle');
  if (localStorage.getItem('portfolio-theme') === 'dark') {
    document.body.classList.add('dark');
  }
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  });

  // ── Scroll: progress bar & back-to-top ───────────────────────
  const progress  = document.querySelector('.progress-bar');
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${total ? (window.scrollY / total) * 100 : 0}%`;
    backToTop?.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Reveal on scroll ─────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

  // ── Current year ─────────────────────────────────────────────
  document.querySelectorAll('.current-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // ── Contact form → WhatsApp ───────────────────────────────────
  document.getElementById('contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name    = document.getElementById('nama').value.trim();
    const message = document.getElementById('pesan').value.trim();
    if (name && message) {
      const text = encodeURIComponent(`Halo Irvan, saya ${name}.\n\n${message}`);
      window.open(`https://api.whatsapp.com/send?phone=628988493839&text=${text}`, '_blank');
    }
  });
});
