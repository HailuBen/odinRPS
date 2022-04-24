console.log("ROCK PAPER SCISSORS!");

// function computerPlay(max) {
//     return Math.floor(Math.random() * max);
// }
// console.log(computerPlay(3))


//both functions (above and below this line) will print a random number from 1 - 3
//i will assign a string (rock paper or scissors) to each num


function computerPlay(max) {
    const randomNumber = Math.floor(Math.random()*max);
    // console.log(randomNumber); 

    if (randomNumber == 0) {
        console.log("CPU: Rock");
    }
    else if (randomNumber == 1){
        console.log("CPU: Paper");
    }
    else if (randomNumber == 2) {
        console.log("CPU: Scissors");
    }
}

//testing a new way from stackoverflow

function computerPlay2() {
    let values = ["Rock", "Paper", "Scissors",],
        valuesToUse = values[Math.floor(Math.random() * values.length)];
        console.log("\n"+valuesToUse);
}
computerPlay2();







// function playRound(playerSelection, computerSelection) {
//     computerPlay(3)
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay(3);
// console.log(playRound(playerSelection, computerSelection));

// function game() {    
//     for (let i = 0; i < 5; i++) {
//         playRound()
//     }
// }

