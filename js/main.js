// Cached 'intro-page' div after clicking start 
const introPage = document.getElementById("intro-page");
const startButton = document.getElementById("start-button");

// event listeners
startButton.addEventListener('click', init);

// functions
function init(){
    introPage.style.display = "none"
}