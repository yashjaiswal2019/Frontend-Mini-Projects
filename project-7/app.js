let userScore = 0;
let compScore = 0;

let winnerHeading = document.querySelector(".msg-container h1");
let para = document.querySelector(".msg-container p");
let showUserScore = document.querySelector("#user-score");
let showCompScore = document.querySelector("#computer-score")

const choices = document.querySelectorAll(".choice");

let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    userScore = 0, compScore = 0;
    showUserScore.innerText = `${userScore}`;
    showCompScore.innerText = `${compScore}`;

    para.innerText = "Let's start the game";
    winnerHeading.innerText = "Please Choose Your input";
    alert("Scores has been Reset");
})

// Functions 
const genCompChoice = () => {
    // rock paper scissor
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}

const checkWinner = (userChoice, compChoice) => {
    let winner;
    if (userChoice === compChoice) {
        winner = 'tie';
    }
    else if ((userChoice === 'rock' && compChoice === 'paper') || (userChoice == 'paper' && compChoice == 'scissor') || (userChoice == 'scissor' && compChoice == 'rock')) winner = "computer";
    else winner = "user";

    return winner;
}

// main game fn
const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    const winner = checkWinner(userChoice, compChoice);

    if (winner === 'tie') {
        winnerHeading.innerText = "There has Been a Tie";
        para.innerText = "Please choose another input."
    }
    else if (winner === "user") {
        userScore++;
        showUserScore.innerText = `${userScore}`;
        winnerHeading.innerText = "You Won, let's play again";
        para.innerText = `Your ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++;
        showCompScore.innerText = `${compScore}`;
        winnerHeading.innerText = "You Lost! play again";
        para.innerText = `Your ${userChoice} was beaten by ${compChoice}.`;
    }


        
        
    

}
// event listener for each choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});