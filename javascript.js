function getComputerChoice() {
    let answer = Math.random();

    if (answer < 1/3) {
        return 'rock'
    } else if (answer < 2/3) {
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