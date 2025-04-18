
//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

// Pengulangan adalah konsep dalam pemrograman yang digunakan untuk menjalankan sebuah blok kode berulang kali selama kondisi tertentu terpenuhi.

// Contoh pengulangan menggunakan for loop
console.log('Contoh pengulangan dengan for loop:');
for (let i = 1; i <= 5; i++) {
	console.log('Perulangan ke ' + i);
}

// Contoh pengulangan menggunakan while loop
console.log('Contoh pengulangan dengan while loop:');
let j = 1;
while (j <= 5) {
	console.log('Perulangan ke ' + j);
	j++;
}

//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |    /  ____/ 
//  \___ (  <_> ) __ \|  |__ /       \ 
// /____  >____(____  /____/ \_______ \
//      \/          \/               \/

for (let i = 20; i >= 15 && i <= 20; i--) {
	console.log(i)
}

console.log("-------------------------------")
//
//                    .__    ________  
//   _______________  |  |   \_____  \ 
//  /  ___/  _ \__  \ |  |     _(__  < 
//  \___ (  <_> ) __ \|  |__  /       \
// /____  >____(____  /____/ /______  /
//      \/          \/              \/ 

function fazztrackPrinter(n) {
	if (n % 3 === 0 && n % 5 === 0) {
		console.log("fazztrack")
	} else if (n % 3 === 0) {
		console.log("fazz")
	} else if (n % 5 === 0) {
		console.log("track")
	} else {
		console.log(n)
	}
}

for (let i = 1; i <= 15; i++) {
	fazztrackPrinter(i)
}
