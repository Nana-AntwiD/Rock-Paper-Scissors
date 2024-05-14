let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    let result = "";

    if(playerSelection === computerSelection){
        result = "IT'S A TIE!";
    }else{
        switch(playerSelection){
            case "rock":
                result = (computerSelection === "scissors") ? "YOU WIN" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "YOU WIN" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    if(result.includes("WIN")){
        humanScore++;
    }else if (result.includes("LOSE")){
        computerScore++;
    }
    document.getElementById("result").innerText = result;
    document.getElementById("score").innerText = `Your Score: ${humanScore} | Computer's Score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            document.getElementById("result").innerText = "Congratulations! You win!";
        } else if (humanScore < computerScore){
            document.getElementById("result").innerText = "Sorry! Computer wins!";
        } else {
            document.getElementById("result").innerText = "It's a tie!";
        }
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }  
}
document.getElementById("rock").addEventListener("click", function(){
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function(){
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function(){
    playRound("scissors");
});