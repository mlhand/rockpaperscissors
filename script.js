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
const roc = document.querySelector('.rock');
const pape = document.querySelector('.paper');
const sciss = document.querySelector('.scissors');
const btn = document.getElementById('btn');
const center = document.querySelector('.center');
const container = document.createElement('container');
center.appendChild(container);
let counter1 = document.createElement('div');
counter1.style = 'color:white';
counter1.classList.add('counter1');
let counter2 = document.createElement('div');
counter2.classList.add('counter2');
counter2.style = 'color:white';
container.appendChild(counter2);
container.appendChild(counter1);
counter1.textContent = 'Player wins: ' + playerWins;
counter2.textContent = 'Computer wins: ' + compWins;


function keepScore() {

    counter1.textContent = 'Player wins: ' + playerWins;

    counter2.textContent = 'Computer wins: ' + compWins;

}

roc.addEventListener('click',() => {
    playerSelection = 'rock';
    compMove = '';
    computerPlay();
    winner = singleRound(playerSelection,compMove)
    console.log(winner);
    if (winner == 'player') {
        playerWins = playerWins + 1;
        if (playerWins === 5) {
            alert('Player wins the game');
            playerWins = 0;
            compWins = 0;
            
        }}
    else if (winner == 'computer')
        {compWins = compWins + 1;
        if (compWins === 5) {
            alert('Computer wins the game');
            playerWins = 0;
            compWins = 0;

        }}
    console.log(playerWins);
    keepScore();
    // if (playerWins = 5) {
    //     alert('player wins');
    //     playerWins = 0;
    //     compWins = 0;}
    //     else if (compWins = 5){
    //     alert('computer wins')
    //     playerWins = 0;
    //     compWins = 0;}
});
pape.addEventListener('click',() => {
    playerSelection = 'paper';
    compMove = '';
    computerPlay();
    winner = singleRound(playerSelection,compMove)
    console.log(winner);
    if (winner == 'player') {
        playerWins = playerWins + 1;
        if (playerWins === 5) {
            alert('Player wins the game');
            playerWins = 0;
            compWins = 0;
            
        }}
    else if (winner == 'computer')
        {compWins = compWins + 1;
        if (compWins === 5) {
            alert('Computer wins the game');
            playerWins = 0;
            compWins = 0;

        }}
    console.log(playerWins);
    keepScore();
});
sciss.addEventListener('click',() => {
    playerSelection = 'scissors';
    compMove = '';
    computerPlay();
    winner = singleRound(playerSelection,compMove)
    console.log(winner);
    if (winner == 'player') {
        playerWins = playerWins + 1;
        if (playerWins === 5) {
            alert('Player wins the game');
            playerWins = 0;
            compWins = 0;
            
        }}
    else if (winner == 'computer')
        {compWins = compWins + 1;
        if (compWins === 5) {
            alert('Computer wins the game');
            playerWins = 0;
            compWins = 0;

        }}
    console.log(playerWins);
    keepScore();
});


// pape.addEventListener('click',() => {
//     //alert('hello world paper');
//     playerSelection = 'paper';
//     compMove = '';
//     computerPlay();
//     winner = singleRound(playerSelection,compMove)
//     console.log(winner);
//     if (winner == 'player') {
//         playerWins = playerWins + 1;}
//     else if (winner == 'computer')
//         {compWins = compWins + 1;}
//     console.log(playerWins);
// });
// sciss.addEventListener('click',() => {
//     //alert('hello world scissors');
//     playerSelection = 'scissors';
//     compMove = '';
//     computerPlay();
//     winner = singleRound(playerSelection,compMove)
//     console.log(winner);
//     if (winner == 'player') {
//         playerWins = playerWins + 1;}
//     else if (winner == 'computer')
//         {compWins = compWins + 1;}
//     console.log(playerWins);
// });

// if (playerWins = 5) {
//     alert('player wins')
//     playerWins = 0;
//     compWins = 0;}
//     else if (compWins = 5){
//     alert('computer wins')
//     playerWins = 0;
//     compWins = 0;}

//btn.onclick = () => alert('hello world');

//function updateScore(playerWins,compWins,i) {





//}


//game();