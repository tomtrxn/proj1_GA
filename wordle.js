// Below ↓ https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event - little optimisation for faster loading/parsing
document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    //now need to figure out how to iterate over each key and the onclick handler
    const keys = document.querySelectorAll('.keyboard-row button');

    for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({target}) => {
        const key = target.getAttribute('data-key');

        console.log(key);
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