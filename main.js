function setUpEvents(){

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
    
    document.getElementById('slime-text-small').innerHTML+='macchina per la melma';

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

}
window.onload = function(){
    setUpEvents();
};






