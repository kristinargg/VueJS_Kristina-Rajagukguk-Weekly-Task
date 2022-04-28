# (22) Relational Database

## Resume

3 poin yang dipelajari:

1. relationship database
2. entity relationship diagram
3. sql statement

### Relationship Database

database adalah sekumpulan data atau informasi yang disimpan secara sistematis.

database relationship terdiri dari tiga yaitu:

1. one to one, dimana relasi satu baris data yang terhubung hanya tepat satu kali pada baris data ditabel lain
2. one to many, dimana relasi satu baris data dapat terhubung lebih dari satu baris data di tabel lain
3. many to many, dimana relasi beberapa baris data dapat terhubung ke banyak baris data di tabel lain

### Entity Relationship Diagram

Entity Relationship Diagram adalah diagram yang digunakan untuk perancangan siatu database dan menunjukkan relasi antar objek atau entitas beserta atribut-atribut secara detail.

### SQL Statement

jenis-jenis perintah sql:

1. Data Definition language, sekumpulan perintah yang digunakan untuk mendefinisikan database, tabel, atribut dan lain-lain. DDL statement sebagai berikut
   - Create (membuat)
   - Alter (mengubah)
   - Drop (menghapus)
2. Data Manipulation Language, digunakan untuk memanipulasi data. statement operation sebagai berikut
   - insert (menambahkan data)
   - select (menampilkan)
   - update (melakukan perubahan)
   - delete (menghapus data)

DML Statement

- like/between
- and/or
- order by
- limit

3. Data Control Language, digunakan untuk melakukan pengontrolan data dan server database. DCL statememt sebagai berikut
   - grant (memberi akses user)
   - revoke (menghapus/menarik akses user)

### Join

sebuah klausa untuk mengkombinasikan record dari dua atau lebih tabel. join standar sql ansi yaitu inner, left, right.

### Union

untuk menggabungkan 2 buah tabel atau lebih ke dalam sebuah hasil dan jumlah field yang dikeluarkan/dipanggil harus sama.

### Aggregate

dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal. fungsi Agregasi sql sebagai berikut min, max, sum. avg, count, having
