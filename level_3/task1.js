//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

/*
Contoh sederhana penggunaan conditional if-else di JavaScript

Misalkan kita punya sebuah variabel yang bernama 'angka':
let angka = 10;

Kita ingin mengecek apakah 'angka' tersebut lebih besar dari 5 atau tidak.
Untuk itu, kita bisa menggunakan struktur if-else seperti berikut:

if (angka > 5) {
  console.log('Angka lebih dari 5');
} else {
  console.log('Angka 5 atau kurang');
}

Penjelasan:
- Baris 'if (angka > 5)' mengecek kondisi apakah angka lebih dari 5
- Jika kondisi bernilai true, maka blok kode di dalam if akan dieksekusi.
- Jika kondisi bernilai false, blok kode di dalam else yang akan dieksekusi.
*/


//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |    /  ____/ 
//  \___ (  <_> ) __ \|  |__ /       \ 
// /____  >____(____  /____/ \_______ \
//      \/          \/               \/
const cekHarga = 30000
const cekHarga2 = 8000
const cekHarga3 = 3000
function checkPrice(price) {
	if (price >= 10000) {
		console.log("Mahal")
	} else if (price > 5000) {
		console.log("Sedang")
	} else if (price < 5000 && price > 0) {
		console.log("Murah")
	}
}

checkPrice(cekHarga)
checkPrice(cekHarga2)
checkPrice(cekHarga3)

