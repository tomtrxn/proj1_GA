// Below ↓ https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event - little optimisation for faster loading/parsing
document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    //array within array - an array will contain all word guesses, and each word guess will contain an inner array of letters
    let guessedWord = [[]]
    //to figure out the next available letter slot in word guess
    let nextSlot = 1;

    // NOTE TO SELF: Use let IF you run into 'TypeError: Assignment to constant variable'.

    //now need to figure out how to iterate over each key and the onclick handler
    const keys = document.querySelectorAll('.keyboard-row button');
    
    for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({target}) => {
        const key = target.getAttribute('data-key');
        updateGuessedWord(key)
        //console.log(key); - quick console log check to see if it reflecting
    };
}      
    //function to tell us the number of words guessed so far
    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWord.length;
        return guessedWord[numberOfGuessedWords - 1];
    }

    //function to tell us the number of letters in the current word - limit of 5
    function updateGuessedWord(letter) {
        const currentWordArr = getCurrentWordArr();
        if(currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter);
            //string will start at index 1 as per set out in function createSquares()
            const nextSlotEl = document.getElementById(String(1))
            nextSlot = nextSlot+ 1;

            nextSlotEl.textContent = letter
        }
    }
    

    //function to create 5x6 grid for wordle
    function createSquares() {
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < 30; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        } 
    }
});