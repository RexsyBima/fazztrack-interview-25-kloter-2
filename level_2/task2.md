
%%                    .__     ____ 
%%_______________  |  |   /_   |
%%/  ___/  _ \__  \ |  |    |   |
%%\___ (  <_> ) __ \|  |__  |   |
%%/____  >____(____  /____/  |___|
%%\/          \/             


Jawaban dan Penjelasan:

1. Inline Styling:
   Inline styling adalah metode menerapkan CSS secara langsung pada elemen HTML melalui atribut "style". Contohnya:
   `<p style='color: red;'>Teks berwarna merah</p>`
   Kelebihan: Praktis untuk perubahan cepat pada elemen tertentu.
   Kekurangan: Tidak reusable dan sulit di-maintain bila digunakan secara berlebihan.

1. Internal Styling:
   Internal styling adalah metode menyematkan CSS di dalam dokumen HTML melalui tag <style> yang ditempatkan di bagian <head>.
   Contohnya:
    ```html
     <html>
       <head>
         <style>
           p { color: blue; }
         </style>
       </head>
       <body>
         <p>Teks berwarna biru</p>
       </body>
     </html>```

   Kelebihan: Memudahkan pengaturan style khusus untuk satu halaman.
   Kekurangan: Hanya berlaku di halaman tersebut dan tidak bisa digunakan ulang di halaman lain.

3. External Styling:
   External styling adalah metode memisahkan CSS ke file eksternal (misalnya, style.css) dan menghubungkannya ke dokumen HTML menggunakan tag <link>.
   Contohnya:
```html
   <html>
     <head>
       <link rel="stylesheet" type="text/css" href="style.css">
     </head>
     <body>
       <p>Teks berwarna hijau</p>
     </body>
   </html>
```
   Kelebihan: Memudahkan pemeliharaan dan penggunaan ulang style di banyak halaman.
   Kekurangan: Memerlukan file tambahan dan dapat menambah jumlah request HTTP.
   
   

//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |    /  ____/ 
//  \___ (  <_> ) __ \|  |__ /       \ 
// /____  >____(____  /____/ \_______ \
//      \/          \/               \/


15 properti dalam CSS:

1. color:
   - Digunakan untuk menentukan warna teks dari sebuah elemen.

2. background-color:
   - Menetapkan warna latar belakang elemen.

3. font-size:
   - Mengatur ukuran huruf teks dalam elemen.

4. font-family:
   - Menentukan jenis huruf (font) yang digunakan.

5. margin:
   - Menetapkan ruang luar (jarak) di sekitar elemen.

6. padding:
   - Mengatur jarak antara konten elemen dengan batas (border) elemen.

7. border:
   - Menambahkan garis tepi di sekitar elemen. Dapat mengatur ketebalan, jenis garis, dan warnanya.

8. display:
   - Menentukan cara elemen ditampilkan (contoh: block, inline, flex, grid).

9. position:
   - Menyediakan metode untuk mengatur posisi elemen (relative, absolute, fixed, sticky).

10. width:
    - Mengatur lebar elemen.

11. height:
    - Mengatur tinggi elemen.

12. text-align:
    - Mengatur perataan teks secara horizontal di dalam elemen (misal: left, right, center, justify).

13. line-height:
    - Mengatur jarak antar garis dalam teks, membantu mengoptimalkan keterbacaan.

14. opacity:
    - Mengontrol tingkat transparansi elemen, dengan nilai antara 0 (transparan) hingga 1 (opaque).

15. transition:
    - Menyediakan efek transisi halus ketika satu atau lebih properti berubah nilainya.

Contoh penggunaan dalam CSS:
  
```css
  .contoh {
      color: #333;
      background-color: #f9f9f9;
      font-size: 16px;
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      text-align: center;
      line-height: 1.5;
      opacity: 0.9;
      transition: all 0.3s ease;
  }
```
