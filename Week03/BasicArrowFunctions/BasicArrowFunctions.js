// Deel A:
const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");


// Deel B:
const fivePlusSeven = () => 5 + 7;


// Deel C:
  () => 1 + 2;


// Deel D:
const myFunction = (a, b) => a + b;

// Deel E:
const addFive = a => a + 5;

// Deel F:
const createObject = () => ({ greeting: "hoi" });



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