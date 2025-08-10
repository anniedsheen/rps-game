function getComputerChoice() {
    let answer = Math.random();

    if (answer >= .66) {
        return 'rock'
    } if (answer >= .33) {
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