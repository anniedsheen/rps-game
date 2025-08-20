function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 1/3) {
        return 'rock';
    } else if (computerChoice < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    let humanInput = prompt('rock, paper or scissors?');
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log ("It's a draw!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log ("You lose! Paper beats rock.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log ("You win! Scissors beats paper.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log ("You win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log ("You lose! Scissors beats paper.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log ("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log ("You lose! Rock beats scissors.");
            computerScore++;
        } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
