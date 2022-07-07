const modeChanger = document.getElementById("mode");
const userInput = document.getElementById("user-input")

// On click, toggle the mode between game and checker
modeChanger.addEventListener("click", e => {
    e.target.innerText == "✅" ? e.target.innerText = "🕹️" : e.target.innerText = "✅";
});

// Change the border of the input based on its state
userInput.addEventListener("input", e => {
    e.target.value === "" ? e.target.style.borderBottom = "10px solid yellow" : e.target.style.borderBottom = "10px solid green";
    console.log(e.target.value);
});