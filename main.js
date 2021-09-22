///////////////
// VARIABLES //
///////////////

const maxRounds = 10;
const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;


///////////////
// FUNCTIONS //
///////////////

function getNbRounds() { 
    // This function prompts the user to define the number of rounds to be played, and returns it
    // If the user inputs an excessive amount of rounds, the function overrides it with maxRounds
    // It also verify the consistency of the user's input and prompts again if needed
    let nbRounds = parseInt(prompt("How many rounds do we play?"));
    while (!Number.isInteger(nbRounds) || nbRounds < 1) {
        nbRounds = parseInt(prompt("I need you to choose a positiv integer ...!"));
    }
    if (nbRounds > maxRounds) {
        console.log(`I don't have time for ${nbRounds} rounds...`);
        nbRounds = maxRounds;
    }
    console.log(`\n We will play ${nbRounds} rounds !`);
    return nbRounds;
}

function getPlayerChoice() {
    // This function prompts the player for a choice
    // It capitalizes the input and verifies it exists within the array of valid choices, then returns it or prompts the user again
    let choice = prompt("Enter your choice (rock, paper, or scissors)");
    choice = choice.toUpperCase();
    while (choices.indexOf(choice) == -1) { 
        console.log("Sorry but you did not input a possible choice ...");
        choice = prompt("You have to choose between rock paper and scissors...");
        choice = choice.toUpperCase();
    }
    console.log("\n You have chosen " + choice); 
    return choice;
}

function getComputerChoice() {
    // This function generates a random number between 0 and 1 then makes it an integer between 0 and 2
    // Then it selects the appropriate string choice within the array of valid choices and returns it as the computer's random choice
    const randomInt = Math.floor(Math.random() * 3);
    let choice = choices[randomInt];
    choice = choice.toUpperCase();
    console.log("... and the computer has chosen " + choice);
    return choice;
}

function round() {
    // This function runs a round and returns the winner as a string
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const equalityMsg = "Nobody wins ... !";
    function generateWinMsg() {
        // This sub-function generates the winning string and updates the winner's score, then returns the message
        let playerWinsMsg = `YOU WIN! (${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()})`;
        playerScore += 1;
        return playerWinsMsg;
    }
    function generateLooseMsg() {
        // This sub-function generates the loosing string and updates the winner's score, then returns the message
        let playerLoosesMsg = `YOU LOOSE! (${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()})`;
        computerScore += 1;
        return playerLoosesMsg;
    }

    if (playerChoice === "ROCK") {
        if (computerChoice === "SCISSORS") return generateWinMsg();
        else if (computerChoice === "PAPER") return generateLooseMsg();
        else return equalityMsg;
    }
    else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") return generateWinMsg();
        else if (computerChoice === "SCISSORS") return generateLooseMsg();
        else return equalityMsg;
    }
    else if (playerChoice === "SCISSORS") {
        if (computerChoice === "PAPER") return generateWinMsg();
        else if (computerChoice === "ROCK") return generateLooseMsg();
        else return equalityMsg;
    }
}

////////////////////
// MAIN EXECUTION //
////////////////////

console.log("Hello Player, I am ready to play Rock-Paper-Scissors with you !");
const nbRounds = getNbRounds();         // prompts user for the number of rounds for the game

for (let i= 1; i<= nbRounds; i++) {     // loops over the number of rounds
    let result = round();               // runs a round and returns a string annoucing the winner of the round
    console.log(result);
    console.log(`Your score: ${playerScore} - Computer score: ${computerScore}`);
}

console.log("--- THE GAME HAS ENDED ---")
console.log(`Your final score: ${playerScore} - Computer's final score: ${computerScore}`);
console.log(playerScore > computerScore ? "YOU HAVE WON THE GAME :D" : 
            computerScore > playerScore ? "YOU HAVE LOST THE GAME :S" : 
            "NOBODY HAS WON - FAIR GAME :-)");










