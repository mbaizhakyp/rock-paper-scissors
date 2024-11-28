let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Enter your choice").toLowerCase(); // get humann choice
} 
function getComputerChoice () {
     return Math.floor(Math.random() * 3) + 1;;
}                                                       // get computer choice

function playRound (compCase, nameCase) {
    console.log(compCase);
    if (nameCase === "rock") {
        console.log("Human: rock");
        switch (compCase) {
            case 1:
                console.log("Draw. Rock draws with Rock.");
                break;
            case 2:
                console.log("Lose. Rock loses to Paper.");
                computerScore++;
                break;
            case 3:
                console.log("Win. Rock wins Scissors.");
                humanScore++;
                break;
        }
    }
    else if(nameCase === "paper") {
        console.log("Human: paper");
        switch (compCase) {
            case 2:
                console.log("Draw. Paper draws with Paper.");
                break;
            case 3:
                console.log("Lose. Paper loses to Scissors.");
                computerScore++;
                break;
            case 1:
                console.log("Win. Paper wins Rock.");
                humanScore++;
        }
    }
    else if(nameCase === "scissors") {
        console.log("Human: scissors");
        switch (compCase) {
            case 3:
                console.log("Draw. Scissors draws with Scissors.");
                break;
            case 1:
                console.log("Lose. Scissors loses to Rock.");
                computerScore++;
                break;
            case 2:
                console.log("Win. Scissors wins Paper.");
                humanScore++;
                break;
        }
    }
}

function playGame (){
    for (let i = 0; i < 5; i++) {
        
        let nameCase = getHumanChoice();
        let compCase = getComputerChoice();
        playRound(compCase, nameCase);
    }

}


playGame();
if(humanScore > computerScore) {
    console.log("Human is the winner");
}
else if(computerScore > humanScore) {
    console.log("Computer is the winner")
}
else {
    console.log("Draw");
}
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);
