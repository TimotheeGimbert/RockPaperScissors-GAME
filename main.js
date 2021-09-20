// INITIALIZATION

const choices = ["ROCK", "PAPER", "SCISSORS"];
let resultPlayer = 0;
let resultProgram = 0;
let numberOfRounds = 0;


// FUNCTIONS

function getRounds() {      // prompt the user to define the number of rounds and check for consistency
    numberOfRounds = parseInt(prompt("How many rounds do we play?"));
    while (!Number.isInteger(numberOfRounds) || numberOfRounds < 1) {
        numberOfRounds = parseInt(prompt("I need you to choose a positiv integer ...!"));
    }
    if (numberOfRounds > 5) {
        console.log(`I don't have time for ${numberOfRounds} rounds, we will just play 5 rounds !`);
        numberOfRounds = 5;
    }
    else console.log(`\n OK PERFECT we will play ${numberOfRounds} rounds !`);
}

function getPlayerChoice() {        // get choice from player
    function getChoice() {          // prompt the player to enter choice
        const choice = prompt("Enter your choice (rock, paper, or scissors)");
        const playerChoice = choice.toUpperCase();          // capitalize the choice to match the array of choices
        return playerChoice;
    }
    function verify(choice) {             // verify that the player choice is authorized
        while (choices.indexOf(choice) == -1) {       // check if choice is in the array of choices
            console.log(choice);
            console.log("Your choice is not a possible answer...");
            getChoice();
        }
    }
    let playerChoice = getChoice();
    verify(playerChoice);
    return playerChoice;
}

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 2);
    const randomChoice = choices[randomInt];
    const computerChoice = randomChoice.toUpperCase();
    return computerChoice;
}


// EXECUTION

console.log("Hello professor Shandra, here is HAL ! \nI am ready to play Rock-Paper-Scissors with you !");
console.log("To start the game, answer me in the prompt");
//getRounds();            // user is asked for the number of rounds
numberOfRounds = 3;
let playerChoice = getPlayerChoice();      // user is asked for a choice
console.log("\n OK PERFECT you have chosen " + playerChoice);
let computerChoice = getComputerChoice();
console.log("\n In the same time, I have chosen " + computerChoice);