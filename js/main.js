// Cached 'intro-page' div after clicking start 
const introPage = document.getElementById("intro-page");
const startButton = document.getElementById("start-button");
const gamePage = document.getElementById("game-page");
// event listeners
startButton.addEventListener('click', init);

// constants
let rows = 5
let columns = 9;
let currentColumns = [];
// functions
function init(){
    introPage.style.display = "none"
    gamePage.style.display = "flex"
    rendor();
}

function rendor(){
    setGame();
}

function setGame(){
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5, 5, 5];
    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < columns; c++){
            row.push(' ');
            let chip = document.createElement('div');
            chip.id = r.toString() + "-" + c.toString();
            chip.classList.add("chip");
            
        }
        board.push(row)
    }
}