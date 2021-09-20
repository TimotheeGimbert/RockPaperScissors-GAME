// INITIALIZATION

const choices = ["ROCK", "PAPER", "SCISSORS"];
let resultPlayer = 0;
let resultProgram = 0;
let numberOfRounds = 0;


// FUNCTIONS

function start() {          // this is the main function that loads the whole game
    getRounds();            // user is asked for the number of rounds
    getPlayerChoice();      // user is asked for a choice
}

function getRounds() {      // prompt the user to define the number of rounds and check for consistency
    numberOfRounds = parseInt(prompt("How many rounds do we play?"));
    while (!Number.isInteger(numberOfRounds) || numberOfRounds < 1) {
        numberOfRounds = parseInt(prompt("I need you to choose a positiv integer ...!"));
    }
    if (numberOfRounds > 5) {
        console.log(`I don't have time for ${numberOfRounds} rounds, we will just play 5 rounds !`);
        numberOfRounds = 5;
    }
    else console.log(`OK PERFECT we will play ${numberOfRounds} rounds !`);
}

function getPlayerChoice() {                                                    // get choice from player
    let playerChoice = undefined;

    function getChoice() {                                                      // prompt the player to enter choice
        playerChoice = prompt("Enter your choice (rock, paper, or scissors)");
        playerChoice = playerChoice.toUpperCase();                              // capitalize the choice to match the array of choices
    }

    function verify() {                                                         // verify that the player choice is authorized
        
        while (choices.indexOf(playerChoice) == -1) {                                 // check if choice is in the array of choices
            console.log(playerChoice);
            console.log("Your choice is not a possible answer...");
            getChoice();
        }
    }

    getChoice();
    console.log(playerChoice);
    verify();
    console.log("You have chosen " + playerChoice);
}



// EXECUTION

console.log("Hello professor Shandra, here is HAL ! \nI am ready to play Rock-Paper-Scissors with you !");
console.log("To start the game, please enter this expression:  start()");
start();