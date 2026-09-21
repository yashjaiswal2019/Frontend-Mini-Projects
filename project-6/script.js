// changing heading turn according to the turn of player
let turnX = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// box 
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let playerTitle = document.querySelector(".player-turn span");
let winnerAnnounce = document.querySelector(".winner-announce");

function resetAll() {
    turnX = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.backgroundColor = "var(--BOX-BGCOLOR)";
        box.disabled = false;
    });
    playerTitle.innerText = "X";
    winnerAnnounce.style.display = "none";
    newGameBtn.style.display = "none";
    resetBtn.style.display = "block";
}

function newGame() {
    resetAll;
    alert("New Game Has Stared");
}

newGameBtn.addEventListener("click", () => {
    resetBtn.style.display = "none";
    resetAll();
});

resetBtn.addEventListener("click", () => {
    resetAll();
    alert("Game has been Reset");

});

// disable all box fn
let disableAll = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}


// check Winner fn 
let winner;
function checkWinner() {
    let foundWinner = false;
    // we can check from the winning pattern
    winPatterns.forEach((pattern) => {
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
            if (pos0Val === pos1Val && pos1Val === pos2Val){
                foundWinner = true;
                winner = pos0Val;
            }
        }
    })
    return foundWinner;
}

// check Tie fn 
function checkTie() {
    let isTie = true;
    let size = boxes.length;
    for (let i = 0 ; i < size ; i++) {
        if (boxes[i].innerText == "") {
            isTie = false;
            break;
        }
    }
    return isTie;
}


// Main fn that have Logic of Game
const clicked = (box) => {
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerText = "X";
            box.style.backgroundColor = "var(--BOX-X-BGCOLOR)";
            playerTitle.innerText = "O";

            turnX = false;
        } else {
            box.innerText = "O";
            box.style.backgroundColor = "var(--BOX-O-BGCOLOR)";
            playerTitle.innerText = "X";
            turnX = true;
        }
        box.disabled = true;
        if (checkWinner()) {
            winnerAnnounce.style.display = "block";
            winnerAnnounce.innerText = `${winner} has Won Please start New Game`;
            disableAll();
            newGameBtn.style.display = "block";
            resetBtn.style.display = "none";

            
        } else if (checkTie()) {
            winnerAnnounce.style.display = "block";
            winnerAnnounce.innerText = "There Has Been a Tie Please start New Game";
            disableAll();
        }
    });
}

boxes.forEach(clicked);
