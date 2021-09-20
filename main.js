// INITIALIZATION

let numberOfRounds = undefined;
const choices = ["ROCK", "PAPER", "SCISSORS"];


// FUNCTIONS

function getRounds() { // prompts the user to define a number of rounds
    let rounds = parseInt(prompt("How many rounds do we play?"));
    while (!Number.isInteger(rounds) || rounds < 1) { // verifies input consistency
        rounds = parseInt(prompt("I need you to choose a positiv integer ...!"));
    }
    if (rounds > 5) { // limits to 5 rounds and returns
        console.log(`I don't have time for ${rounds} rounds, we will just play 5 rounds ...`);
        rounds = 5;
    }
    else console.log(`\n OK we will play ${rounds} rounds !`);
    return rounds;
}


function getPlayerChoice() { // get the player choice      
    let playerChoice = promptPlayer(); // prompts the player
    function promptPlayer() { // asks for the input, capitalizes it, returns it
        const input = prompt("Enter your choice (rock, paper, or scissors)"); // asking for the input
        let output = input.toUpperCase(); // capitalizing the input
        return output; // returning the capitalized input
    }
    while (choices.indexOf(playerChoice) == -1) { // checking input's consistency
        console.log("Sorry but you did not input a possible answer ..."); // 
        playerChoice = promptPlayer(); // prompting the player again
    }
    console.log("\n You have chosen " + playerChoice); 
}

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 2);
    const randomChoice = choices[randomInt];
    let computerChoice = randomChoice.toUpperCase();
    console.log("... and the computer has chosen " + computerChoice);
    return computerChoice;
}

function compareResults(playerDecision, computerDecision) {

}



// EXECUTION

console.log("Hello Player, I am the computer HAL-2021. \nI am ready to play Rock-Paper-Scissors with you !");
console.log("To start the game, answer me directly in the prompt !");

numberOfRounds = getRounds();           // user is asked for the number of rounds
let playerDecision = getPlayerChoice();       // user is asked for a choice
let computerDecision = getComputerChoice();   // computer makes a random choice

compareResults(playerDecision, computerDecision);