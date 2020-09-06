const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];
    
    // alleen gebruik maken van .map, .filter of .reduce !
   
    // Deel 1:

// const heroesByName = superheroes.map(item => { 
//     return item.name;
// });
// console.log(heroesByName);


// Deel 2:

// const lightWeightHeroes = superheroes.filter(element => {
//     return element.weight < 190;
// })
// console.log(lightWeightHeroes);


// Deel 3

// const twoHundredPounds = superheroes
//     .filter(element => element.weight == 200)
//     .map(element => element.name);
// console.log(twoHundredPounds)


// Deel 4

// const appearance = superheroes.map(element => {
//     return element.first_appearance;
// });
// console.log(appearance)


// Deel 5

// const publishedBy = superheroes.filter(element => {
//     return element.publisher == "DC Comics";
// })
// console.log(publishedBy)

// const publish = superheroes.filter(item => {
//     return item.publisher == "Marvel Comics";
// })
// console.log(publish)


// Deel 6

// const countWeight = superheroes
//     .filter(element => element.weight > 0) // filters the "unknown"
//     .map(element => parseInt(element.weight, 10)) // returns it as number
//     .reduce((element, curVal) => element + curVal) // counts element + currentValue
//     console.log(countWeight)


// Deel 7

// const countWeightSuperhero = superheroes
//     .filter(element => element.publisher == "Marvel Comics")
//     .filter(element => element.weight > 0)
//     .map(element => parseInt(element.weight, 10))
//     .reduce((element, curVal) => element + curVal)
//     console.log(countWeightSuperhero) // 2637


// Deel 8

const mostHeavyHero = superheroes
    .filter(element => element.weight > 0) // This shows me, what's in the array.
    .filter(element => element.weight > 250) // This shows me, the most heavy superhero.

    console.log(mostHeavyHero) // Name: Hulk, Weight: 1400.