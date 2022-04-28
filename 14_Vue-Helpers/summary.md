# (14) Vue Helpes

## Resume

3 poin yang dipelajari:

1. Navigasi pada Vue
2. Layout Template Vue
3. Penyimpanan Global dan Penyimpanan Global Permanen

### Navigasi pada Vue

Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain. untuk dapat berpindah halaman maka kita harus mempunyai halaman lain.

agar dapat berpindah halaman dapat menggunakan opsi controler yaitu `router-link`
pada navigasi terdapat sub-path

### Layout Template Vue

layout adalah susunan tata letak dan Layout Template Vue adalah komponen yang dipakai pada masing-masing halaman.
layout dapat meneruskan konten dari anak komponennya menggunakan `<router-view>`

### Penyimpanan Global

Penyimpanan Global adalah sebuah metode dimana kita menyimpan variabel yang dapat diakses dengan mudah diseluruh aplikasi.
Penyimpanan Global menggunakan vuex menjadi store untuk aplikasi vue.js

untuk menggunakan vuex dapat menggunakan sintaks `import Vuex from "vuex";` dan `Vue.use(Vuex);`

untuk memodifikasi nilai dari state yang tersimpan menggunakan sintaks `mutations`. dan untuk memanggil mutations menggunakan `store.commit()` dan biasanya pada mutations tidak ada pengolahan muatan didalamnya.
untuk memodifikasi nilai dari state didalam store dapat menggunakan sintaks `action` dan untuk memanggil mutations menggunakan `store.dispatch()`

### Penyimpanan Global Permanen

Vue-persistedstate digunakan untuk mempertahankan dan rehidrasi vuex state kita diantara pemuatan ulang dengan menyimpan dilocalstorage atau cookies.
