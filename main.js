// INIT

const maxRounds = 10; // set the max limit of rounds
const choices = ["ROCK", "PAPER", "SCISSORS"]; // array of valid choices

let remainingRounds = 1; // number of rounds to play the whole game, 1 by default
let playerScore = 0; // initial score of the human player
let computerScore = 0; // initial score of the computer



// FUNCTIONS

function welcome() { // show welcoming messages
    console.log("Hello Player, I am the computer HAL-2021. \nI am ready to play Rock-Paper-Scissors with you !");
    console.log("To start the game, answer me directly in the prompt !");
}

function getRounds() { // prompt the user to define a number of rounds to play the whole game
    let rounds = parseInt(prompt("How many rounds do we play?")); // input number of rounds
    while (!Number.isInteger(rounds) || rounds < 1) { // check if input is valid
        rounds = parseInt(prompt("I need you to choose a positiv integer ...!")); // prompt again if not
    }
    if (rounds > maxRounds) { // limit the number of rounds
        console.log(`I don't have time for ${rounds} rounds...`);
        rounds = maxRounds; // set number of rounds to a max limit
    }
    console.log(`\n We will play ${rounds} rounds !`);
    return rounds;
}


function getPlayerAnswer() { 
    let answer = prompt("Enter your choice (rock, paper, or scissors)"); // asking for the input
    answer = answer.toUpperCase(); // capitalizing the input
    while (choices.indexOf(answer) == -1) { // while answer is not within the array of valid choices
        console.log("Sorry but you did not input a possible choice ...");
        answer = prompt("Enter your choice (rock, paper, or scissors)"); // asking for an input again
        answer = answer.toUpperCase(); // capitalizing the new input
    }
    console.log("\n You have chosen " + answer); 
    return answer;
}

function getComputerAnswer() {
    const randomInt = Math.floor(Math.random() * 3);
    let computerAnswer = choices[randomInt];
    computerAnswer = computerAnswer.toUpperCase();
    console.log("... and the computer has chosen " + computerAnswer);
    return computerAnswer;
}

function getRoundWinner(playerAnswer, computerAnswer) {
    if (playerAnswer == "ROCK") {
        if (computerAnswer == "PAPER") return "Computer";
        else if (computerAnswer == "SCISSORS") return "Player";
        else return "Nobody";
    }
    if (playerAnswer == "PAPER") {
        if (computerAnswer == "SCISSORS") return "Computer";
        else if (computerAnswer == "ROCK") return "Player";
        else return "Nobody";
    }
    if (playerAnswer == "SCISSORS") {
        if (computerAnswer == "ROCK") return "Computer";
        else if (computerAnswer == "PAPER") return "Player";
        else return "Nobody";
    }
}


// EXECUTION
welcome();
remainingRounds = getRounds();
let playerAnswer = getPlayerAnswer();
let computerAnswer = getComputerAnswer();
let roundWinner = undefined;
roundWinner = getRoundWinner(playerAnswer, computerAnswer);
console.log(roundWinner + " wins!")