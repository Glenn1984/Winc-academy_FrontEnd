// const functions = {
//     add: (num1, num2) => num1 + num2,
// }

// module.exports = functions;



// const functions = {
//     isNull: function() {
//       return null;
//     },
//     checkValue: function(x) {
//       return x;
//     },
//     createUser: function() {
//       const user = { 
//         firstName: 'Brad' 
//       };
//       user['lastName'] = 'Traversy';
//       return user;
//     }
//   };
  
// module.exports = functions;
  
//////////////////////////////////////////////////

//! Test Driven Development - Functions

// const addOne = function(numbers) {
//   // Schrijf hier de functie...
//   return numbers.map(addOne => addOne + 1);
// }

// module.exports = addOne;

///////////////////////////////////////////////


// const getWordLengths = function(someWords) {
//   //Schrijf je functie...
//   return someWords.map(getWord => getWord.length);
// };

// module.exports = getWordLengths;

////////////////////////////////////////////////////

const findNeedle = function(words, needle) {
  // Schrijf hier de functie...
  return words.indexOf(needle);
};

module.exports = findNeedle;