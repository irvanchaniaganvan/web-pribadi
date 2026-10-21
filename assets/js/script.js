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
  const skillDescriptions = {
    'Teknik Elektro': 'Mempelajari prinsip listrik dan elektronika untuk memahami, merancang, serta mengembangkan rangkaian dan perangkat.',
    'Mekatronika': 'Menggabungkan mekanika, elektronika, dan pemrograman untuk membangun mesin atau sistem otomatis.',
    'AIoT': 'Menghubungkan perangkat ke internet dan memanfaatkan kecerdasan buatan agar data dapat menghasilkan respons yang lebih cerdas.',
    'Rancang Bangun Sistem': 'Menyusun kebutuhan, merancang komponen, lalu mengintegrasikannya menjadi sistem yang berfungsi.',
    'Prototyping': 'Membuat model awal untuk mencoba ide, menemukan kekurangan, dan menyempurnakan rancangan.',
    'Problem Solving': 'Memahami akar masalah, membandingkan pilihan, lalu menguji solusi yang paling sesuai.',
    'Kolaborasi Tim': 'Bekerja bersama dengan berbagi ide, tugas, dan umpan balik untuk mencapai tujuan proyek.',
    'Inovasi Teknologi': 'Mengembangkan atau mengadaptasi teknologi menjadi solusi baru yang berguna bagi kebutuhan nyata.'
  };
  const skillDescription = document.getElementById('skill-description');
  document.querySelectorAll('.skill-chip').forEach((button) => button.addEventListener('click', () => {
    const wasExpanded = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.skill-chip').forEach((chip) => chip.setAttribute('aria-expanded', 'false'));
    if (wasExpanded) { skillDescription.hidden = true; skillDescription.replaceChildren(); return; }
    button.setAttribute('aria-expanded', 'true');
    const title = document.createElement('strong'); title.textContent = button.textContent;
    const explanation = document.createElement('span'); explanation.textContent = skillDescriptions[button.textContent];
    skillDescription.replaceChildren(title, explanation); skillDescription.hidden = false;
  }));
  document.querySelectorAll('.current-year').forEach((item) => { item.textContent = new Date().getFullYear(); });
  document.getElementById('contactForm')?.addEventListener('submit', (event) => { event.preventDefault(); const name = document.getElementById('nama').value.trim(); const message = document.getElementById('pesan').value.trim(); if (name && message) window.open(`https://api.whatsapp.com/send?phone=628988493839&text=${encodeURIComponent(`Halo Irvan, saya ${name}.\n\n${message}`)}`, '_blank'); });
});
