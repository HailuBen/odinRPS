// console.log("SlimeMachine\nBest of 5. \nBEGIN!");
//Problem: Create a Rock Paper Scisssors game where you play against a CPU
//Divide: 1
//Simple if statement + an array. Capitalize function for visual clarity.
//Divide: 2 
//Change user and comp into a prompt for user input, and a random string generator respectively. 
//Divide: 2.5
//Make sure the equal signs are === because you are comparing the randomNumComputer to user.toLowerCase(). (Make sure all the syntax is gucci)
//Divide: 3
//(After testing previous) Implement max score (5) and number of rounds   
//Divide: 4
//Place inside functions
function setUpEvents(){
        
    // const comp = 'Rock';
    // let userSelection;
    // let consoleLoseMsg;
    // let consoleWinMsg;
    // let tieChecker = false;
    let rounds = 1;
    let userScore = 0;
    let cpuScore = 0;
    let randomNumComputer;
    let userChoice;
    let computerChoice;

    const computerChoiceDisplay = document.getElementById('computer-choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const resultDisplay = document.getElementById('result');
    const possibleChoices = document.querySelectorAll('button');
    const endGameDisplay = document.getElementById('end-game');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const roundDisplay = document.getElementById('round');
    const playAgainDisplay = document.getElementById('play-again');

    const choices = ['Rock', 'Paper', 'Scissors'];
      
    function generateComputerChoice() {
        randomNumComputer = choices[Math.floor(Math.random()*choices.length)];
        console.log('CPU: '+randomNumComputer);
        computerChoice = randomNumComputer;
        computerChoiceDisplay.innerHTML=computerChoice;    // here
    }

    function getResult () {     //new hotness
        switch(userChoice + computerChoice) {
            case 'ScissorsPaper': 
                rounds++;
                userScore++;
                resultDisplay.innerHTML = "<br>You win. Scissors beats Paper.";
                break
            case 'RockScissors':            
                resultDisplay.innerHTML = "<br>You win. Rock beats Scissors";
                rounds++;
                userScore++;
                break
            case 'PaperRock':
                resultDisplay.innerHTML = "<br>You win. Paper beats Rock.";
                rounds++;
                userScore++;
                break
            case 'PaperScissors':
                resultDisplay.innerHTML = "<br>You Lose. Scissors beats Paper.";
                rounds++;
                cpuScore++;
                break
            case 'ScissorsRock':                
                resultDisplay.innerHTML = "<br>You Lose. Rock beats Scissors";
                rounds++;
                cpuScore++;
                break
            case 'RockPaper':                
                resultDisplay.innerHTML = "<br>You Lose. Paper beats Rock.";
                rounds++;
                cpuScore++;
                break
            case 'PaperPaper':
            case 'ScissorsScissors':
            case 'RockRock':                
                resultDisplay.innerHTML = "<br>Tie.";
                rounds++;
                break
        }
    }

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        if (rounds>=6) {
            return  //this causes the buttons to do nothing except enlarge on hover
        }
        else {
            userChoice = e.target.id;
            userChoiceDisplay.innerHTML = userChoice;    // here
            // roundDisplay;
            generateComputerChoice();
            roundsCheck();
        }
    }))

    function roundsCheck () {
        if (rounds<6) {
            roundDisplay.innerHTML = rounds;
            getResult();
            userScoreDisplay.innerHTML = userScore;
            computerScoreDisplay.innerHTML = cpuScore;
        }
        if (rounds===6) {
        endGame();
        }
    }  

    function endGame() {
        endGameDisplay.style.textAlign='center';
        if (userScore > cpuScore) {
            endGameDisplay.style.border='2px solid black';
            endGameDisplay.innerHTML+="<br>Congrats You beat the Computer!"
        }
        else if (userScore < cpuScore) {
            endGameDisplay.style.border='2px solid black';
            endGameDisplay.innerHTML+="<br>Oof, nice try but you lost!"
        }
        else if (userScore === cpuScore) {
            endGameDisplay.style.border='2px solid black';
            endGameDisplay.innerHTML+="<br>Wow a draw! You gotta do a rematch!"
        }
        endGameDisplay.innerHTML+="<br><br> -FINAL SCORE- <br>USER: "+userScore+" || CPU: "
        +cpuScore;
        endGameDisplay.style.display='block';
        //- playagain -
        playAgainDisplay.style.display='block';
    }

    //  - OLD CODE -
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }
    // function playRounds(){   //old and busted joint
    //     // randomNumComputer=Rock;
    //     consoleWinMsg = 'You win. '+capitalizeFirst(userSelection)+' beats '+capitalizeFirst(randomNumComputer);
    //     consoleLoseMsg = 'You lose. '+capitalizeFirst(randomNumComputer)+' beats '+capitalizeFirst(userSelection);

    //     function youWin(){
    //         document.querySelector('.round-text').innerHTML="<br>~ Your Score: "+userScore+" || Computer Score: "+cpuScore+" ~";
    //         document.querySelector('.result-text').innerHTML+="<br><br><br>Round: "+(rounds-1)+
    //         "<br>CPU: "+capitalizeFirst(randomNumComputer)+" || USER: "+capitalizeFirst(userSelection)+
    //         '<br>You win. '+capitalizeFirst(userSelection)+' beats '+capitalizeFirst(randomNumComputer);    
    //     }
    //     function youLose(){
    //         document.querySelector('.round-text').innerHTML="<br>~ Your Score: "+userScore+" || Computer Score: "+cpuScore+" ~";
    //         document.querySelector('.result-text').innerHTML+="<br><br><br>Round: "+(rounds-1)+
    //         "<br>CPU: "+capitalizeFirst(randomNumComputer)+" || USER: "+capitalizeFirst(userSelection)+
    //         '<br>You lose. '+capitalizeFirst(randomNumComputer)+' beats '+capitalizeFirst(userSelection);
    //     }

    //     if (randomNumComputer===userSelection) {
    //         console.log("\nTie.");
    //         //tie text
    //         rounds++; 
    //         document.querySelector('.result-text').innerHTML+="<br><br><br>Round: "+(rounds-1)+
    //         "<br>CPU: "+capitalizeFirst(randomNumComputer)+" || USER: "+capitalizeFirst(userSelection)+
    //         "<br>Tie.";
    //     }
    //     else if(userSelection===Rock && randomNumComputer===Paper) {
    //         // console.log("You lose.\nPaper beats Rock.");
    //         console.log(consoleLoseMsg);
    //         //lose text
    //         rounds++; 
    //         cpuScore++;
    //         youLose();
    //     }
    //     else if(userSelection===Rock && randomNumComputer===Scissors) {
    //         // console.log("You Win. \nRock beats Scissors");
    //         console.log(consoleWinMsg);
    //         //win text
    //         rounds++;           
    //         userScore++;
    //         youWin(); 
    //     }
    //     else if(userSelection===Paper && randomNumComputer===Rock) {
    //         // console.log("You Win. \nPaper beats Rock");
    //         console.log(consoleWinMsg);
    //         //win text
    //         rounds++;            
    //         userScore++;
    //         youWin();
    //     }
    //     else if(userSelection===Paper && randomNumComputer===Scissors) {
    //         // console.log("You lose.\nScissors beats Paper.");
    //         console.log(consoleLoseMsg);
    //         //lose text
    //         rounds++;
    //         cpuScore++;
    //         youLose();
    //     }
    //     else if(userSelection===Scissors && randomNumComputer===Rock){
    //         // console.log("You lose.\nRock beats Scissors.");
    //         console.log(consoleLoseMsg);
    //         //lose text
    //         rounds++;
    //         cpuScore++;  
    //         youLose();
    //     }
    //     else if(userSelection===Scissors && randomNumComputer===Paper){
    //         // console.log("You Win. \nScissors beats Paper");
    //         console.log(consoleWinMsg);
    //         //win text
    //         rounds++;          
    //         userScore++;
    //         youWin();
    //     }
    // }

    // function game(){
    //     if (userScore !== cpuScore) {
    //         console.log("\n\n-FINAL SCORE- \nUSER: "+userScore+"\nCPU: "+cpuScore);
    //         document.querySelector('.final-text').innerHTML+="<br> -FINAL SCORE- <br>USER: "+userScore+" || CPU: "+cpuScore+
    //         "<br><br><br>Thanks 4 playin!! ";

    //         //final text 
    //     }
    //     else if (userScore === cpuScore){
    //         document.querySelector('.final-text').innerHTML+="<br>TIEBREAKER! "
    //     }
    //     // do {
    //     //     console.log("Round: "+(rounds)+"\nYour Score: "+userScore+"\nComputer Score: "+cpuScore);
    //     //     playRounds();    
    //     // } while (userScore<5 && (cpuScore<5));      //working as intended.
    //     // console.log("RESULTS:\n\nROUNDS: "+(rounds-1)+"\n-FINAL SCORE- \nUSER: "+userScore+"\nCPU: "+cpuScore); //result 
    // }
    
    // function roundCheck(){
    //     if (rounds<6){
    //         playRounds();
    //         console.log("Round: "+(rounds-1)+"\nYour Score: "+userScore+"\nComputer Score: "+cpuScore);
    //         //score text
    //     }
    //     if (rounds>=6){
    //         game();
    //     }
    // }
    //Issue: 1 
    //Code works with any of the options RPS, but when the user input is capitalized, it outputs "Please enter valid response"
    //Issue: 1 = Fixed

    //Issue: 2 
    //Logical issue: Doesn't really make sense to subtract scores when a player loses a round. Points should stay the same. 
    //Will get rid of the --'s .
    //Issue: 2 = Fixed

    //Issue: 3
    //Was having trouble with ending the game when either CPU or USER got to 5 points.
    //changed to do while loop, used && and encapsulated (cpuScore<5) in brackets to fix.
    //Issue: 3 = Fixed

}
window.onload = function(){
    setUpEvents();
};






