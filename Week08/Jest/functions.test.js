// const functions = require('./functions.js');

// // test('Adds 2 + 2 toEqual 4', () => {
// //     expect(functions.add(2, 2)).toBe(4);
// // });

// // test('Adds 2 + 2 to NOT Equal 5', () => {
// //     expect(functions.add(2, 2)).not.toBe(4);
// // });


// test('isNull should be null', () => {
//     expect(functions.isNull()).toBeNull();
// });


// //////////////////////////////////////////////////

// test('Should be null', () => {
//         // Begin met expect()
//         // Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn. 
//         // Daarna volgt je .toBeSomethingSomething functie, 
//   // zoek de geschikte functie in de documentatie. 
//         // In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk 
//         // Null returned. Dus "toBeNull()" makes the most sense. 
//   expect(functions.isNull()).toBeNull();
// });

// test('checkValue Should be falsy when argument is undefined', () => {
//     expect(functions.checkValue(null)).toBeFalsy();
// });

// test('User should be Brad Traversy object', () => {
//       expect(functions.createUser()).toEqual({
//             firstName: 'Brad',
//             lastName: 'Traversy'
//       });
// });

// // Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// // nu tests maken die werken zonder input van buitenaf:

// // Less than or greater than
// test('Should be under or equal to 1600', () => {
//       const load1 = 800;
//       const load2 = 800;
//       expect(load1 + load2).toBe(1600);
// });

// // Regex
// test('There is no I in team', () => {
//       expect('team').not.toBe();
// });

// // Arrays
// test('Admin should be in usernames', () => {
//  usernames = ['john', 'karen', 'admin'];
//       expect(usernames).not.toStrictEqual('Admin');
// });



/////////////////////////////////////////////////////


//! Test Driven Development - Tests

// const addOne = require("./functions.js");

// test("Add 1 to each item in myArray", function() {
//   const myArray = [31, 57, 12, 5];

//   const unchanged = [31, 57, 12, 5];
//   const expected = [32, 58, 13, 6];
//   const output = addOne(myArray);

//   expect(output).toEqual(expected);
//   expect(myArray).toEqual(unchanged);
// });

//////////////////////////////////////////////////


// const getWordLengths = require("./functions.js");

// test("Get word lengths", function() {
//   const words = ["sun", "potato", "roundabout", "pizza"];
//   const expected = [3, 6, 10, 5];

//   const output = getWordLengths(words);
//   expect(output).toEqual(expected);
// });

//////////////////////////////////////////////////////

const findNeedle = require("./functions.js");

test("Find the needle", function() {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});