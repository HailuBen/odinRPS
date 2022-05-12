console.log("SlimeMachine\nFirst to five wins. \nBEGIN!");
//Problem: Create a Rock Paper Scisssors game where you play against a CPU
//Divide: 1
//Simple if statement + an array. Capitalize function for visual clarity.
//Divide: 2 
//Change user and comp into a prompt for user input, and a random string generator respectively. 
//Divide: 2.5
//Make sure the equal signs are === because you are comparing the randComp to user.toLowerCase(). (Make sure all the syntax is gucci)
//Divide: 3
//(After testing previous) Implement max score (5) and number of rounds   
//Divide: 4
//Place inside functions
let rounds = 1;
let userScore = 0;
let cpuScore = 0;
let userClicked;

const OPTIONS = ['rock','paper','scissors'];    // 0 1 2 (3)
// const comp = 'rock';

console.log(" ")

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRounds(){
    let randComp = OPTIONS[Math.floor(Math.random()*OPTIONS.length)];
    console.log('CPU: '+capitalizeFirst(randComp));
    // let user = rock || paper|| scissors;

    }

document.querySelector('button').addEventListener("click", function() {
    clicked = true
    });

if (clicked = true) {
    clickedRock = document.getElementById("buttonR").addEventListener('click', playRounds);
    clickedPaper = document.getElementById("buttonP").addEventListener('click', playRounds);
    clickedScissors = document.getElementById("buttonS").addEventListener('click', playRounds);
    game();
}



//Issue: 1 
//Code works with any of the options RPS, but when the user input is capitalized, it outputs "Please enter valid response"
//Issue: 1 = Fixed
function game(){

        console.log("Round: "+(rounds)+"\nYour Score: "+userScore+"\nComputer Score: "+cpuScore);

    // do {
    //     console.log("Round: "+(rounds)+"\nYour Score: "+userScore+"\nComputer Score: "+cpuScore);
    //     playRounds();    
    // } while (userScore<5 && (cpuScore<5));      //working as intended.
    // console.log("RESULTS:\n\nROUNDS: "+(rounds-1)+"\n-FINAL SCORE- \nUSER: "+userScore+"\nCPU: "+cpuScore); //result
    
}


//Issue: 2 
//Logical issue: Doesn't really make sense to subtract scores when a player loses a round. Points should stay the same. 
//Will get rid of the --'s .
//Issue: 2 = Fixed

//Issue: 3
//Was having trouble with ending the game when either CPU or USER got to 5 points.
//changed to do while loop, used && and encapsulated (cpuScore<5) in brackets to fix.
//Issue: 3 = Fixed




