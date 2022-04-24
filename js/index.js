console.log("The mask");

// function computerPlay(max) {
//     return Math.floor(Math.random() * max);
// }
// console.log(computerPlay(3))


//both of these will print a random number from 1 - 3
//i will assign a string (rock paper or scissors) to each num


function compPlay(max) {
    let randomNumber = Math.floor(Math.random()*max);
    console.log(randomNumber); 

    if (randomNumber == 0) {
        console.log("Rock");
    }
    else if (randomNumber == 1){
        console.log("Paper");
    }
    else if (randomNumber == 2) {
        console.log("Scissors");
    }
}

compPlay(3)