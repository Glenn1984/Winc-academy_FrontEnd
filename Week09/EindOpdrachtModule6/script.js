//! Jest Tests can be found in Test folder.

// Initialize ALL global variables here
let AMOUNTTRIES = 5;
let WORD;
let INPUTS;
let GAMEOVER;
let TRIES = 0;


// allTheWords = []
// This code here selects a random word
const wordList = [
    "vis",
    "toeter",
    "developer",
    "telefoon",
    "moeder",
    "snoer",
    "geeuw"
];


const wordPicker = (list) => {
    const index = Math.floor(Math.random() * list.length);

    list[index].split("");
    return list[index].split("");
};

const wordGuessed = (WORD, INPUTS) => {
    const remaining = WORD.filter(letter => {
        return !INPUTS.includes(letter);
    });
    return remaining.length === 0;
};

const winGame = () => {
    document.querySelector(".win").style.display = "block";
    GAMEOVER = true;
};

const loseGame = () => {
    document.querySelector(".lose").style.display = "block";
    GAMEOVER = true;
};

const updateTries = () => {
    document.querySelector(".lives span").innerHTML = AMOUNTTRIES - TRIES;
};

const getWrongLetters = (WORD, INPUTS) => {
    const wrongLetters = INPUTS.filter(letter => {
        return !WORD.includes(letter);
    });
    document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
    return wrongLetters;
};

const theWord = (WORD, inputLetterWords) => {
    const display = WORD.map(letter => {
        if (inputLetterWords.includes(letter)) {
            return letter;
        } else {
            return "_";
        };
    });
    document.querySelector(".the_word").innerHTML = display.join(" ");
    return display;
};


const getGivenValue = () => {
    const givenValue = document.querySelector("input").value;
    document.querySelector("input").value = "";
    return givenValue;
};


const checkTries = (value) => {
    if (!WORD.includes(value)) {
        TRIES++;
        updateTries(TRIES);
        return TRIES;
    };
};

const updateLetters = (value) => {
    INPUTS.push(value);
    theWord(WORD, INPUTS);
    getWrongLetters(WORD, INPUTS);
    return INPUTS;
};

const winOrLose = () => {
    if (wordGuessed(WORD, INPUTS)) {
        winGame();
    } else if (TRIES >= AMOUNTTRIES) {
        loseGame();
    };
};


const guessLetter = () => {
    if (GAMEOVER) {
        return;
    }
    const inputValue = getGivenValue();
    if (INPUTS.includes(inputValue) || inputValue === "") {
        return;
    }
    checkTries(inputValue);
    updateLetters(inputValue);
    winOrLose();
};

const checkGameOver = (TRIES) => {
    if (TRIES === 5) {
        return true;
    }
};

const startTheGame = () => {
    INPUTS = [];
    GAMEOVER = false;
    TRIES = 0;

    document.querySelector(".win").style.display = "none";
    document.querySelector(".lose").style.display = "none";
    document.querySelector("input").value = "";
    // resetHangMan();

    WORD = wordPicker(wordList);

    document.querySelector(".lose p span").innerHTML = `"${WORD.join("")}"`;
    WORD;

    document.querySelector(".lives span").innerHTML = AMOUNTTRIES - 0;

    theWord(WORD, INPUTS);
    getWrongLetters(WORD, INPUTS);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".guess").addEventListener("click", guessLetter);
    document.querySelector(".restart").addEventListener("click", startTheGame);
    startTheGame();
});


/////////////////////////////////////////////////////////


//! Jest Tests can be found in Test folder.

module.exports = {
    wordList,
    wordPicker,
    wordGuessed,
    getWrongLetters,
    theWord,
    checkGameOver,
};

//! Jest Tests can be found in Test folder.