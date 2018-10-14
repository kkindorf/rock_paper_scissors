$(function() {

    function playRound(playerSelection, compSelection) {
        let playerSelectionLower = playerSelection.toLowerCase();
        if(playerSelection == "rock") {
            if(compSelection == "paper") {
                return "You lose paper beats rock";
            }
            //comp has scissors
            return "You win rock beats scissors";
        }
        else if(playerSelection == "paper") {
            if(compSelection == "scissors") {
                return "You lose scissors beats paper";
            }
            // comp has rock
            return "You win paper beats rock";
        }
        else if(playerSelection == "scissors") {
            if(compSelection == "rock") {
                return "You lose rock beats scissors";
            } 
            return "You win scissors beats paper";
        }
    }

    function game() {
        let roundNum = 0;
        let playerSelection = "";
        let roundOutCome = "";
        let playerScore = 0;
        let compScore = 0;
        while (roundNum < 5) {
            playerSelection = prompt("what's your choice", "rock");
            roundOutCome = playRound(playerSelection, computerPlay(playerSelection));
            console.log(roundOutCome)
            let checkPlayerWinRegex = RegExp('You win');
            if(checkPlayerWinRegex.test(roundOutCome)) {
                playerScore++;
            }
            else {
                compScore++;
            }
            roundNum++;
        }
        if(roundNum == 5) {
            if(playerScore > compScore) {
                console.log("the game is over\nYou win")
            }
            console.log("the game is over\nComputer wins");
        }
    }

    function computerPlay(playerChoice) {
        let gameChoices = ["rock", "paper", "scissors"];
        let filteredGameChoices = gameChoices.filter((choice) => {
            if(choice !== playerChoice) {
                return choice;
            }
        })
        let compChoice = filteredGameChoices[Math.floor(Math.random() * filteredGameChoices.length)];
        return compChoice;
    }
})