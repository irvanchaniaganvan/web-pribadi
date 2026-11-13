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

    const namaInput  = document.getElementById('nama');
    const pesanInput = document.getElementById('pesan');
    const namaError  = document.getElementById('nama-error');
    const pesanError = document.getElementById('pesan-error');
    const successMsg = document.getElementById('form-success');

    const name    = namaInput.value.trim();
    const message = pesanInput.value.trim();
    let valid = true;

    // Reset state
    [namaInput, pesanInput].forEach((el) => el.classList.remove('error'));
    namaError.textContent  = '';
    pesanError.textContent = '';
    successMsg?.classList.remove('visible');

    if (!name) {
      namaInput.classList.add('error');
      namaError.textContent = 'Nama tidak boleh kosong.';
      valid = false;
    }

    if (!message) {
      pesanInput.classList.add('error');
      pesanError.textContent = 'Pesan tidak boleh kosong.';
      valid = false;
    }

    if (valid) {
      const text = encodeURIComponent(`Halo Irvan, saya ${name}.\n\n${message}`);
      window.open(`https://api.whatsapp.com/send?phone=628988493839&text=${text}`, '_blank');
      successMsg?.classList.add('visible');
      event.target.reset();
    }
  });

  // ── Image lightbox ───────────────────────────────────────────
  const zoomables = document.querySelectorAll('.project-gallery img, .project-cad img');

  if (zoomables.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Pratinjau gambar');
    lightbox.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Tutup pratinjau">✕</button>
      <img alt="">
      <p class="lightbox-caption"></p>
    `;
    document.body.appendChild(lightbox);

    const boxImg = lightbox.querySelector('img');
    const boxCap = lightbox.querySelector('.lightbox-caption');
    const boxClose = lightbox.querySelector('.lightbox-close');
    let lastFocused = null;

    const openLightbox = (img) => {
      lastFocused = document.activeElement;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || '';
      const figure = img.closest('figure');
      boxCap.textContent = figure?.querySelector('figcaption')?.textContent || '';
      lightbox.classList.add('open');
      document.body.classList.add('lightbox-open');
      boxClose.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.classList.remove('lightbox-open');
      boxImg.removeAttribute('src');
      lastFocused?.focus();
    };

    zoomables.forEach((img) => {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.addEventListener('click', () => openLightbox(img));
      img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(img);
        }
      });
    });

    boxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
});
