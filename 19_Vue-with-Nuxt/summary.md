# (19) Vue With Nuxt

## Resume

3 poin yang dipelajari :

1. Pengenalan Nuxt
2. Nuxt SSG & SSR
3. SEO Meta dan PWA

### Pengenalan Nuxt

Nuxt adalah framework yang berbasis vue untuk membuat web menjadi sederhana dan ampuh dimana bisa di render dari server atau web statis

untuk menjalankan nuxt menggunakan `npm run dev` dimana akan dijalankan pada localhost:3000.
jika sebelumnya pada vue terdapat views router, src dan public maka pada nuxt tidak ada dan folder bawaannya ada pages, static dan layouts.

untuk folder pages secara otomatis menjadi router dan terhubung langsung menjadi path halaman.

### Nuxt SSG & SSR

SSG merupakan pengembangan situs web yang tidak memiliki halaman dinamis seperti namanya static site generation.

SSR merupakan metode pengembangan solusi terbaik dimana halaman dibuat secara realtime dan dinamis, yaitu melalui panel admin. server yang dibangun ke dalam nuxt akan berjalan dalam produksi.

### SEO Meta

proses dimana meningkatkan kualitas dan kuantitas agar website berada di hasil mesin pencarian dan SEO meta adalah head yang akan memberikan data tentang halaman ke mesin pencarian dan pengunjung situs web.

SEO meta tag penting

- informasi dasar: title dan description
- identitas unik dengan link conanical
- informasi untuk media sosial open graph: og:title, og:description, og:image

SEO didalam body tag

- judul h1
- text alternatif untuk gambar : alt

SEO lainya

- peta indexing: sitemap
- pengarah crawler : robots.txt

### PWA

Progressive web application (PWA) adalah metode pembuatan software dengan kemudahan pemasangan antara website reguler dengan aplikasi mobile & desktop yang menjangkau siapa saja.

cara kerja PWA adalah web app manifest, service workers, icon dan protokol https
