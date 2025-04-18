//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

// 1. Function Declaration
// Cara membuat function dengan deklarasi menggunakan keyword 'function' dan nama function.
// Contoh:
function add(a, b) {
	return a + b;
}

// 2. Function Expression
// Cara membuat function dengan menyimpan function ke dalam variabel.
// Contoh:
const multiply = function(a, b) {
	return a * b;
};

// 3. Arrow Function (ES6)
// Cara membuat function dengan menggunakan sintaks arrow (panah) untuk penulisan yang lebih ringkas.
// Contoh:
const subtract = (a, b) => a - b;

// Penggunaan function yang telah dibuat:
console.log('Add:', add(5, 3));         // Output: 8
console.log('Multiply:', multiply(5, 3));   // Output: 15
console.log('Subtract:', subtract(5, 3));   // Output: 2

//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |    /  ____/ 
//  \___ (  <_> ) __ \|  |__ /       \ 
// /____  >____(____  /____/ \_______ \
//      \/          \/               \/

function hitungLuas(panjang, lebar) {
	return panjang * lebar
}

let luas = hitungLuas(10, 10)
console.log(luas)


