# Portofolio Irvan Chaniagan

Struktur proyek situs statis ini dipisahkan berdasarkan tanggung jawab agar lebih mudah dirawat.

```
.
├── index.html                 # Halaman utama
├── pages/                     # Halaman selain beranda
│   ├── about.html
│   ├── contact.html
│   └── portofolio.html
└── assets/                    # Aset antarmuka
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        ├── backgrounds/
        ├── icons/
        └── projects/
```

`index.html` sengaja tetap berada di root supaya kompatibel dengan hosting statis seperti GitHub Pages. Saat menambahkan gambar, simpan pada kategori yang sesuai di `assets/images/`; stylesheet di `assets/css/`; dan JavaScript di `assets/js/`.
