//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             



// var, let, dan const merupakan kata kunci untuk melakukan deklarasi variable didalam javascript.
// var merupakan cara paling kuno dalam mendeklarasikan variable di js, variable yg dideklarasikan dengan var memiliki scope akses lebih luas di fungsinya dibandingkan dengan let yg hanya hidup dalam blok yg sama
// di zaman sekarang, deklarasi variable let lebih sering dipakai di javascript
// contoh

function foo() {
	var bar = "hello";
	if (true) {
		var bar = "world"; // "kata hello diubah menjadi kata world, meskipun didalam satu blok {} lebih dalam"
	}
	console.log(bar); // "world"
}

console.log("Hasil dari fungsi foo adalah...");
console.log("------------");
foo()
console.log("------------");

// let merupakan cara paling modern untuk mendeklarasikan variable di js, variable yg dideklarasikan dengan let tidak memiliki scope akses lebih luas di fungsinya dibandingkan dengan var, tetapi hal ini membuat kode javascript lebih aman, dan mengikuti konvensi bagaimana variable bekerja di bahasa pemrograman lain seperti go, dan rust
// contoh
//
//
function bar() {
	let foo = "hello";
	if (true) {
		let foo = "world";
		console.log(foo); // "world"
	}
	console.log(foo); // "hello" "statement ini keluar dari if scope, nilai foo kembali lagi ke hello"
}

console.log("Hasil dari fungsi bar adalah...");
console.log("------------");
bar()
console.log("------------");

// const deklarasi variable yang nilainya adalah konstan / tidak akan berubah di kode2 berikutnya, biasanya dipakai untuk mendeklarasikan variable seperti api key,  password, port address
//
function baz() {
	const foo = "hello";
	foo = "world"; // akan error, karena kita melakukan perubahan nilai terhadap foo
}

console.log("Hasil dari fungsi baz adalah...");
console.log("------------");
// bar() // silahkan uncomment panggilan fungsi bar untuk melihat error 
console.log("------------");


//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |    /  ____/ 
//  \___ (  <_> ) __ \|  |__ /       \ 
// /____  >____(____  /____/ \_______ \
//      \/          \/               \/

function mathOperationBasic(x, y, operation) {
	var output = 0
	switch (operation) {
		case "+":
			output = x + y
			break
		case "-":
			output = x - y
			break
		case "*":
			output = x * y
			break
		case "/": //
			if (y == 0) { // error handling jika nilak y adalah 0
				console.log("Tidak dapat melakukan pembagian dengan 0")
				return
			}
			output = x / y
			break
	}
	return output
}

let angkaPertama = 10
let angkaKedua = 30
let hasil

// Penjumlahan
hasil = mathOperationBasic(10, 30, "+")
console.log(hasil)
// Perkalian
hasil = mathOperationBasic(10, 30, "*")
console.log(hasil)
// Pengurangan
hasil = mathOperationBasic(10, 30, "-")
console.log(hasil)
// Pembagian
hasil = mathOperationBasic(10, 30, "/")
console.log(hasil)
