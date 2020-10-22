//? test Jest...

// test('Jest - test', () => {
//     const a = 6
//     expect(a == 6).toBe(true);
// }); //* Test werkt.

////////////////////////////////////////////////////////

const {
    wordList,
    wordPicker,
    wordGuessed,
    getWrongLetters,
    theWord,
    checkGameOver,

} = require("../script.js");



test('The wordList contains the word in it ?', () => {
    expect(wordList).toContain("developer");
});

test("The wordList don't has the word in it ?", () => {
    expect(wordList).not.toContain("developers");
});

test('Check if wordPicker is not empty', () => {
    const word = ["iphone"];
    expect(wordPicker(word)).toEqual(["i", "p", "h", "o", "n", "e"])
})

test("Pick a word out of wordList and check if it's not a string", () => {
    const wordList = ["vis", "snoer"];
    expect(wordPicker(wordList)).not.toBe("");
});

test("Check if word has a character", () => {
    const word = ["s", "n", "o", "e", "r"];
    const inputs = ["b"];
    expect(getWrongLetters(word, inputs)).toContain("b");
});

test("Check if word is guessed", () => {
    const word = ["s", "n", "o", "e", "r"];
    const inputs = ["s", "n", "o", "e", "r"];
    expect(wordGuessed(word, inputs)).toBe(true);
});

test("Check if character is in word", () => {
    const charArray = ["t", "e", "s", "t"];
    const char = ["t"];
    expect(theWord(charArray, char)).toContain("t");
});

test("check gameOver when no tries left", () => {
    const tries = 5;
    expect(checkGameOver(tries)).toBe(true);
});

test("check game won if word is guessed", () => {
    const word = ["t", "e", "s", "t"];
    expect(wordGuessed(word, ["t", "e", "s", "t"])).toEqual(true);
});