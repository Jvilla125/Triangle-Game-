// Cached 'intro-page' div after clicking start 
const introPage = document.getElementById("intro-page");
const startButton = document.getElementById("start-button");
const gamePage = document.getElementById("game-page");
// event listeners
startButton.addEventListener('click', init);

// functions
function init(){
    introPage.style.display = "none"
    gamePage.style.display = "flex"

}