// INIT

const maxRounds = 10; // set the max limit of rounds
const choices = ["ROCK", "PAPER", "SCISSORS"]; // array of valid choices
let playerScore = 0;
let computerScore = 0;



// FUNCTIONS

function getNbRounds() {        // prompts the player to set number of rounds
    let nbRounds = parseInt(prompt("How many rounds do we play?")); // input number of rounds
    while (!Number.isInteger(nbRounds) || nbRounds < 1) { // check if input is valid
        nbRounds = parseInt(prompt("I need you to choose a positiv integer ...!")); // prompt again if not
    }
    if (nbRounds > maxRounds) { // limiting the number of rounds
        console.log(`I don't have time for ${nbRounds} rounds...`);
        nbRounds = maxRounds;
    }
    console.log(`\n We will play ${nbRounds} rounds !`);
    return nbRounds;
}
function getPlayerChoice() {    // prompts the player and return his choice
    let choice = prompt("Enter your choice (rock, paper, or scissors)"); // asking for the input
    choice = choice.toUpperCase(); // capitalizing the input
    while (choices.indexOf(choice) == -1) { // while choice is not within the array of valid choices
        console.log("Sorry but you did not input a possible choice ...");
        choice = prompt("You have to choose between rock paper and scissors..."); // asking for an input again
        choice = choice.toUpperCase(); // capitalizing the new input
    }
    console.log("\n You have chosen " + choice); 
    return choice;
}
function getComputerChoice() {  // generates and returns a random choice
    const randomInt = Math.floor(Math.random() * 3);
    let choice = choices[randomInt];
    choice = choice.toUpperCase();
    console.log("... and the computer has chosen " + choice);
    return choice;
}
function round() {              // runs a round of the game and returns the result as a string
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    function playerWins() {
        let playerWinsMsg = `YOU WIN! (${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()})`;
        playerScore += 1;
        return playerWinsMsg;
    }
    function playerLooses() {
        let playerLoosesMsg = `YOU LOOSE! (${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()})`;
        computerScore += 1;
        return playerLoosesMsg;
    }
    const equalityMsg = "Nobody wins ... !";

    if (playerChoice === "ROCK") {
        if (computerChoice === "SCISSORS") return playerWins();
        else if (computerChoice === "PAPER") return playerLooses();
        else return equalityMsg;
    }
    else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") return playerWins();
        else if (computerChoice === "SCISSORS") return playerLooses();
        else return equalityMsg;
    }
    else if (playerChoice === "SCISSORS") {
        if (computerChoice === "PAPER") return playerWins();
        else if (computerChoice === "ROCK") return playerLooses();
        else return equalityMsg;
    }
}


// MAIN EXECUTION

console.log("Hello Player, I am ready to play Rock-Paper-Scissors with you !");
const nbRounds = getNbRounds();         // prompts the player to set the number of rounds for the game

for (let i= 1; i<= nbRounds; i++) {     // loops over the number of rounds
    let result = round();               // runs a round of the game and returns the result as a string
    console.log(result);
    console.log(`Your score: ${playerScore} - Computer score: ${computerScore}`);
}

console.log("--- THE GAME HAS ENDED ---")
console.log(`Your final score: ${playerScore} - Computer's final score: ${computerScore}`);
console.log(playerScore > computerScore ? "YOU HAVE WON THE GAME :D" : 
            computerScore > playerScore ? "YOU HAVE LOST THE GAME :S" : 
            "NOBODY HAS WON - FAIR GAME :-)");










