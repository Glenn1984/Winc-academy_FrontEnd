// [ ] .find method
// [ ] .forEach method
// [ ] .some method
// [ ] .every method
// [ ] de .includes method

// [ ] de .map method

// [ ] de .filter method

// [ ] de .reduce method


// Deel A

    // const superheroes = [
    // { name: "Batman", alter_ego: "Bruce Wayne" },
    // { name: "Superman", alter_ego: "Clark Kent" },
    // { name: "Spiderman", alter_ego: "Peter Parker" }]
    
    // const findSpiderMan = (superheroes) => {
    //     return superheroes.find(function(element) {
    //     return element.name === "Spiderman";
    //     });
    // };
    
    // console.log(findSpiderMan(superheroes));
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


    // Deel B
    
    // const doubleArrayValues = ([1, 2, 3])
    // const doubledNumbers = doubleArrayValues.map(function (num) {
    //     return num * 2;
    // });
    // console.log(doubledNumbers);
    // result should be [2, 4, 6]


    // Deel C

    // const containsNumberBiggerThan10 = (function (arr) {
    //     return arr.some(num => {
    //         return num > 10;
    //     });
    // });
    // console.log("weet niet of het zonder dit werkt:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
    // containsNumberBiggerThan10([1,2,1,2,1,2])
    // result should be false


    // Deel D
    // const isItalyInTheGreat7 = function (element) {
    // return element.includes("Italy");
    // };
    // isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
    // result should be true


    // Deel E

    // const tenfold = function (element) {
    // return element.map(num => {
    //     return num * 10;
    // });
    // };
    
    // console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
    // result should be [10, 40, 30, 60, 90, 70, 110]


    // Deel F
    // const isBelow100 = (function (arr) {
    //     return arr.some(num => {
    //         return num < 100;
    //     });
    // });

    // console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
    // result should be: false


    // Deel G
    const bigSum = function(element) {
        return element.reduce((acc, val) => {
            return acc + val;
        });
    };
    
    console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
    // result should be 1118