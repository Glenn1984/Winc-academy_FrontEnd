// Deel A:
const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");


// Deel B:
const fivePlusSeven = () => 5 + 7


// Deel C:
onePlusTwo => 1 + 2


// Deel D:
myFunction = (a, b) => a + b

// Deel E:
addFive = a => a + 5

// Deel F:
createObject = () => ({ greeting: "hoi" })
createObject()

// Tutorial - flaviocopes.com
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
};

const link = document.querySelector('#link')
link.addEventListener('click', () => {
  //this === link
})