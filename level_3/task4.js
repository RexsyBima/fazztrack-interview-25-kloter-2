
//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

function topDownTriangle(num) {
	for (let i = num; i >= 1; i--) {
		let baris = '';
		for (let j = 1; j <= i; j++) {
			baris += i + ' ';
		}
		console.log(baris.trim());
	}
}

let foo = topDownTriangle(5);
console.log(foo)
