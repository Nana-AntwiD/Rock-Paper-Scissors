function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    const userInput = prompt("Enter your choice(rock, paper, or scissors):").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
    }else{
        alert("Invalid choice! Please enter rock, paper, or scissors,");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let result = "";

    if(humanChoice === computerChoice){
        result = "IT'S A TIE!";
    } else{
        switch(humanChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }

    }

    if(result.includes("WIN")){
        humanScore++;
    } else if (result.includes("LOSE")){
        computerScore++;
    }

    console.log(result);
}

function playGame() {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Game Over!");
    console.log("Your Score:" + humanScore);
    console.log("Computer's Score:" + computerScore);
    if (humanScore > computerScore){
        console.log("Congratulations! You win!");
    } else if (humanScore < computerScore){
        console.log("Sorry! Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();