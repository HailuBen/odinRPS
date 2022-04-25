const SELECTIONS = ["rock","paper","scissors"];


function game() {
    playRound();
}


function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}


function playerChoice () {
    //player input
    let input = prompt("Type Rock, Paper or Scissors.");
    while(input==null){
        input = prompt("Type Rock, Paper, or Scissors.");
    }
    input = input.toLowerCase();
    
    let check = validateInput(input)
    while (check == false){
        input = prompt("Type Rock, Paper, or Scissors. (spelling sensitive!)")
    }
    input = input.toLowerCase();
    check = validateInput(input);
}


function computerChoice() {
    return SELECTIONS[Math.floor(Math.random()*SELECTIONS.length)]
} 

function validateInput(SELECTIONS) {
    return SELECTIONS.includes(SELECTIONS);
}


game();







// function computerPlay2() {
//     let values = ["rock", "paper", "scissors"],
//         valuesToUse = values[Math.floor(Math.random() * values.length)];
//         // console.log("\n"+valuesToUse);
// }
// computerPlay2();