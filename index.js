const modeChanger = document.getElementById("mode");
const userInput = document.getElementById("user-input")
var allModeDA = document.querySelectorAll("[data-mode]");

// On click, toggle the mode between game and checker
modeChanger.addEventListener("click", e => {
    if (e.target.innerText == "✅") {
        e.target.innerText = "🕹️";
        allModeDA.forEach(element => {
            if (element.classList.contains("mode-header")){
                element.innerText = 'Game time!'
            }
            element.dataset.mode = 'game'
        });

    }
    else {
        e.target.innerText = "✅";
        allModeDA.forEach(element => {
            if (element.classList.contains("mode-header")) {
                element.innerText = 'Variable checker'
            }
            element.dataset.mode = 'checker'
        });
    }

});

// Change the border of the input based on its state
userInput.addEventListener("input", e => {
    e.target.value === "" ? e.target.style.borderBottom = "10px solid yellow" : e.target.style.borderBottom = "10px solid green";
});