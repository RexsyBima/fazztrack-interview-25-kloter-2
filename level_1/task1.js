//                    .__     ____ 
//   _______________  |  |   /_   |
//  /  ___/  _ \__  \ |  |    |   |
//  \___ (  <_> ) __ \|  |__  |   |
// /____  >____(____  /____/  |___|
//      \/          \/             

class Person {
	constructor(firstName, lastName, yearBirth) {
		this.firstName = firstName
		this.lastName = lastName
		this.yearBirth = yearBirth
	}
}

const firstName = "Rexsy"
const lastName = "Bima"
const yearBirth = 2001
const age = new Date().getFullYear() - yearBirth
const personData = new Person(firstName, lastName, yearBirth)

const programsLearned = ["Python", "Rust", "Go", "Javascript", "Typescript"]
console.log(`Halo, nama saya ${firstName} ${lastName}. saya berumur ${age} tahun dan memiliki pengalaman bahasa pemrograman (dari paling awal sampai terbaru) ${programsLearned}.`)
