document.addEventListener('DOMContentLoaded', () => {
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => { if (link.getAttribute('href').split('/').pop() === pageName) link.classList.add('active'); });
  const menuToggle = document.querySelector('.menu-toggle'); const navMenu = document.querySelector('.nav-menu');
  menuToggle?.addEventListener('click', () => { const isOpen = navMenu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', isOpen); });
  const themeToggle = document.querySelector('.theme-toggle'); if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark');
  themeToggle?.addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); });
  const progress = document.querySelector('.progress-bar'); const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => { const total = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${total ? window.scrollY / total * 100 : 0}%`; backToTop?.classList.toggle('visible', window.scrollY > 500); }, { passive: true });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
  document.querySelectorAll('.current-year').forEach((item) => { item.textContent = new Date().getFullYear(); });
  document.getElementById('contactForm')?.addEventListener('submit', (event) => { event.preventDefault(); const name = document.getElementById('nama').value.trim(); const message = document.getElementById('pesan').value.trim(); if (name && message) window.open(`https://api.whatsapp.com/send?phone=628988493839&text=${encodeURIComponent(`Halo Irvan, saya ${name}.\n\n${message}`)}`, '_blank'); });
});
