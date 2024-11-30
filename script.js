function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound (compCase, nameCase, compChoice, result) {
    switch (compCase) {
        case 1:
            compChoice.textContent = "Rock";
            break;
        case 2:
                compChoice.textContent = "Paper";
                break;
        case 3:
            compChoice.textContent = "Scissors";
            break;
            
    }

    if (nameCase === "rock") {
        console.log("Human: rock");
        switch (compCase) {
            case 1:
                result.textContent = "Draw. Rock draws with Rock.";
                break;
            case 2:
                result.textContent = "Lose. Rock loses to Paper.";
                computerScore++;
                break;
            case 3:
                result.textContent = "Win. Rock wins Scissors.";
                humanScore++;
                break;
        }
    }
    else if(nameCase === "paper") {
        console.log("Human: paper");
        switch (compCase) {
            case 2:
                result.textContent = "Draw. Paper draws with Paper.";
                break;
            case 3:
                result.textContent = "Lose. Paper loses to Scissors.";
                computerScore++;
                break;
            case 1:
                result.textContent = "Win. Paper wins Rock.";
                humanScore++;
        }
    }
    else if(nameCase === "scissors") {
        console.log("Human: scissors");
        switch (compCase) {
            case 3:
                result.textContent = "Draw. Scissors draws with Scissors.";
                break;
            case 1:
                result.textContent = "Lose. Scissors loses to Rock.";
                computerScore++;
                break;
            case 2:
                result.textContent = "Win. Scissors wins Paper.";
                humanScore++;
                break;
        }
    }
    scoreMan.textContent = humanScore;
    scoreComp.textContent = computerScore;
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore)
}
let humanScore = 0;
let computerScore = 0;
let i = 0;
let gameover = false;

function playGame (){
    let scoreMan = document.querySelector("#scoreMan");
    let scoreComp = document.querySelector("#scoreComp")
    
    let playerChoice = document.querySelector('.ch');
    if(gameover) return;
    playerChoice.addEventListener('click', (event) => {
        i++;
        let choice = event.target;
        let first = choice.innerHTML;
        let compChoice = document.querySelector('#opp');
        let result = document.querySelector("#result")
        
        
        playRound(getComputerChoice(), first.toLowerCase(), compChoice, result)
        if(i === 5) {
            scoreUpdate(humanScore, computerScore);
            playerChoice.disabled = true;
            gameover = true;

        }
    })
}

const start = document.querySelector('#Start');
start.addEventListener('click', function() {
    playGame(humanScore, computerScore);
})

function scoreUpdate(humanScore, computerScore) {
    let whoWon = document.querySelector("#whoWon");
        if(humanScore > computerScore) {
            whoWon.textContent = "Human is the winner";
        }
        else if(computerScore > humanScore) {
            whoWon.textContent = "Computer is the winner";
        }
        else {
            whoWon.textContent = "Draw";
        }
}



