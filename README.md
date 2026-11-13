# Portofolio Irvan Chaniagan

Situs portofolio statis yang dibangun dengan HTML, CSS, dan JavaScript murni — tanpa
framework dan tanpa proses build.

## Struktur proyek

```
.
|-- index.html                  # Halaman utama
|-- 404.html                    # Halaman error kustom
|-- pages/                      # Halaman selain beranda
|   |-- about.html
|   |-- contact.html
|   `-- portofolio.html
|-- assets/
|   |-- css/
|   |   `-- style.css           # Seluruh gaya situs + dark mode
|   |-- js/
|   |   `-- script.js           # Navigasi, tema, animasi, form kontak
|   `-- images/
|       |-- backgrounds/        # Gambar latar & foto hero
|       |-- icons/              # Ikon antarmuka
|       `-- projects/           # Foto dokumentasi proyek
|-- README.md
`-- LICENSE
```

`index.html` sengaja tetap berada di root supaya kompatibel dengan hosting statis
seperti GitHub Pages.

## Menjalankan secara lokal

Tidak perlu instalasi apa pun. Buka `index.html` langsung di browser, atau jalankan
server statis sederhana dari root proyek:

```bash
python -m http.server 8080
```

Lalu buka <http://localhost:8080>.

## Konvensi penamaan

- Nama file dan folder: huruf kecil, dipisah tanda hubung (`nama-file.html`).
- Gambar proyek: `nama-proyek-keterangan.jpg`, misalnya `sigap-netra-tim-pkp2.jpg`.
- Simpan gambar pada kategori yang sesuai di `assets/images/`.
- Optimalkan gambar sebelum diunggah (lebar maksimal ~1600 px, format JPG/WebP).

## Deployment

Situs ini disajikan melalui GitHub Pages dari branch `main`:

<https://irvanchaniaganvan.github.io/web-pribadi/>

Setiap push ke `main` akan memperbarui situs secara otomatis.
