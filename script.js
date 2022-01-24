function computerPlay() {
    let compChoice = Math.floor(Math.random()*3) + 1;
    console.log(compChoice);
    if (compChoice === 1)
        compMove = 'rock';
    else if (compChoice === 2)
    compMove = 'paper';
    else
    compMove = 'scissors';

}
//computerPlay()
//console.log(compMove);


function singleRound(playerSelection,compMove) {
    if (playerSelection == 'rock' && compMove == 'scissors') 
        var winner = 'player';
        
    else if (playerSelection == 'rock' && compMove == 'paper')
        var winner = 'computer'
        
    else if (playerSelection == 'paper' && compMove == 'Scissors')
        var winner = 'computer'
    else if (playerSelection == 'paper' && compMove == 'rock')
        var winner = 'player'
    else if (playerSelection == 'scissors' && compMove == 'rock')
        var winner = 'computer'
    else if (playerSelection == 'scissors' && compMove == 'paper')
        var winner = 'player'
    else
        
        {
        alert('Tie Game')
        return ('Tie Game')}
       
    alert(winner + ' wins the round')
    return winner;
    return (winner + ' wins the game')

}


// playerSelection = prompt("Rock Paper Scissors");
// playerSelection = playerSelection.toLowerCase();
//playerSelection = 'Paper';

//console.log(singleRound(playerSelection,compMove))


let compWins = 0;
let playerWins = 0;

function game(){

for (let i = 0; i < 5; i++) {
    playerSelection = prompt("rock paper scissors");
    computerPlay();

    winner = singleRound(playerSelection,compMove);
    // computerPlay();
    // singleRound(playerSelection,compMove);
    //console.log(compWins)
    if (winner == 'player') {
        playerWins = playerWins + 1;}
    else if (winner = 'computer')
        {compWins = compWins + 1;}
    //console.log(playerWins);
    //updateScore(playerWins,compWins,i);
    




}
if (playerWins > compWins)
    console.log('Player wins the game');
else if (compWins > playerWins)
    console.log('Computer wins');
else
    console.log('tie game');




}


//function updateScore(playerWins,compWins,i) {





//}


game();