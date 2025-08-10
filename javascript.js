function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 1/3) {
        return 'rock'
    } else if (computerChoice < 2/3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

/* Optimized version using array
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
*/

// Create function getHumanChoice
// Create str variable humanChoice
// Prompt user for their choice
// Store user's choice in variable humanChoice
// Return user's choice

function getHumanChoice() {
    let humanChoice = prompt('rock, paper or scissors?');
    return humanChoice;
}
