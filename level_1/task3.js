// ini comment satu baris

/* tipe data javascript adalah
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
let sources = https://www.w3schools.com/js/js_datatypes.asp
*/

// tipe data string
const firstName = "Rexsy"
const lastName = "Bima"
const fullName = firstName + " " + lastName

// tipe data number
let age = 20
let height = 1.80
const pi = 3.14


// tipe data bigint 
let x = 9999999999999999;
let y = 9999999999999999;
let z = 9999999999999999;


// tipe data boolean
let isWorking = true
let isMarried = false
let isPriceFixed = true

// tipe data undefined
let foo
let bar
let baz


// tipe data null
let discontPrice = null
let hobby = null
let job = null

// tipe data symbol (symbol adalah tipe data unik, immutable, sehingga const sudah cukup)
const fooSymbol = Symbol("foo")
const barSymbol = Symbol("bar")
const bazSymbol = Symbol("baz")


// tipe data Object
let person = {
	name: "Rexsy",
	age: 20
}

let car = {
	name: "Toyota",
	year: 2020
}

let product = {
	name: "Laptop",
	price: 5000000
}

// extra : arrays (saya tidak tahu kenapa arrays tidak hidup sebagai sebuah tipe data sendiri berdasarkan https://www.w3schools.com/js/js_datatypes.asp)
//
let hobbies = ["coding", "reading", "sleeping"]
let cars = ["Toyota", "Honda", "Mazda"]
let products = ["Laptop", "Smartphone", "Tablet"]


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
