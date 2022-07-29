const modeSwitcher = document.getElementById('mode-switcher');
const userInput = document.getElementById('user-input')
const leftController = document.querySelector('.controller-left')
const rightController = document.querySelector('.controller-right')
const settingsModal = document.querySelector('.modal__settings')
const closeModalBtns = document.querySelectorAll('.close-modal')
const gameOptionsSelect = document.querySelector('.modal__settings__select')
const allModeDAs = document.querySelectorAll('[data-mode]');
var allSpecific = document.querySelectorAll('.specific')
var allModalInputs = document.querySelectorAll('#modal input')

// game values
var lives = 3;
var time = 10;


// On click, toggle the mode between game and checker
modeSwitcher.addEventListener("click", e => {
    if (e.target.innerText == "✅") {
        e.target.innerText = "🕹️";
        allModeDAs.forEach(element => {
            if (element.classList.contains('mode-header')){
                element.innerText = 'Game time!'
            }
            element.dataset.mode = 'game'
        });

    }
    else {
        e.target.innerText = "✅";
        allModeDAs.forEach(element => {
            if (element.classList.contains('mode-header')){
                element.innerText = 'Variable checker'
            }
            element.dataset.mode = 'checker'
        });
    }
});



// Change the border of the input based on its state
userInput.addEventListener('input', e => {
    e.target.value === '' ? e.target.style.borderBottom = '10px solid yellow' : e.target.style.borderBottom = '10px solid green';
});

rightController.addEventListener('click', () => settingsModal.showModal())
closeModalBtns.forEach(element => element.addEventListener('click', () => element.close()))

// change game options that are specific to lives
gameOptionsSelect.addEventListener('change', () => {
    allSpecific.forEach(element => {
        element.dataset.game_mode = gameOptionsSelect.value;
    })
})


// update game values when they change
allModalInputs.forEach(element => {
    element.addEventListener('change', () => {
        switch (element.name) {
            case 'time':
                time = parseInt(element.value);
            case 'lives':
                lives = parseInt(element.value);
        }
    })
})



// Setup the game
leftController.addEventListener('click', setupGame)

function setupGame(){
    userInput.disabled = true;
    userInput.value = ''
    userInput.placeholder = ''

    leftController.innerText = 'Valid'
    rightController.innerText = 'Invalid'

    leftController.style.flexGrow = 1
}