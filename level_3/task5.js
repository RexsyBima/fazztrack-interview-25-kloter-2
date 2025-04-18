
//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

function calculateTripPrice(distanceKM) {
	let basePrice = 5000
	if (distanceKM <= 2 && distanceKM > 0) {
		return basePrice
	} else if (distanceKM > 2) {
		for (let i = 3; i <= distanceKM; i++) {
			basePrice += 3000
		}
		return basePrice
	}
}

price = calculateTripPrice(5)
console.log(price)
