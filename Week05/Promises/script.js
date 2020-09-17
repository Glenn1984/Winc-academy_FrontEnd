const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10`);
        } else {
            reject(`${num} is less than ten!`);
        }
    });
};

testNum(5);



// Exercise 2

const makeAllCaps = ((remakeAllWords) => {
    return new Promise ((resolve, reject) => {
        if (remakeAllWords.every(remakeEachWord => {
            return typeof remakeEachWord === `string`;
        }))
            resolve(sortWords(remakeAllWords.map(remakeEachWord => {
                return remakeEachWord.toUpperCase();
            })));
        else {
            reject(`Not a string`);
        };
    });
});

const sortWords = (sortAlphabeticalWords) => {
    return new Promise((resolve, reject) => {
        if (sortAlphabeticalWords) {
            resolve(sortAlphabeticalWords.sort());
        } else {
            reject(`Still not a string!`);
        };
    });
};

const arrayOfWords = ['cucumber', 'tomato', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));