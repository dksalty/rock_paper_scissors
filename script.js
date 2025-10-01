const words = ['Rock','Paper','Scissors'];
function playRound(humanChoice, computerChoice) {
console.log('Round ' + round + ' of 5!');
 function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
 function getHumanChoice() {
   let userInput = prompt('Round ' + round + " of 5! " + "Rock, Paper or Scissors?");
   if (userInput.toLowerCase() === 'rock') {
   return 'Rock';
}
else if (userInput.toLowerCase() === 'paper') {
   return 'Paper'; 
}
else if (userInput.toLowerCase() === 'scissors') {
   return 'Scissors';
}
else return "Invalid Input";
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log('You chose:', humanSelection);
console.log('Computer chose:', computerSelection);
 
if ( computerSelection === humanSelection ) {
console.log ("Computer chose same! Tie!");}

else if (computerSelection === 'Rock' && humanSelection === 'Paper') {
   console.log('Paper beats rock! You win!'), humanScore++;
 }
else if (computerSelection === 'Paper' && humanSelection === 'Rock') {
   console.log('Paper beats rock! Computer wins!'), computerScore++;
 }   
else if (computerSelection === 'Paper' && humanSelection === 'Scissors') {
   console.log('Scissors beats paper! You win!'), humanScore++;
 }  
else if (computerSelection === 'Scissors' && humanSelection === 'Paper') {
   console.log('Scissors beats paper! Computer wins!'), computerScore++;
 }  
else if (computerSelection === 'Scissors' && humanSelection === 'Rock') {
   console.log('Rock beats Scissors! You win!'), humanScore++;
 } 
 else if (computerSelection === 'Rock' && humanSelection === 'Scissors') {
   console.log('Rock beats Scissors! Computer win!'), computerScore++;
 } 
 else {
   console.log('Invalid input');
}

round++;
}
var humanScore = 0;
var computerScore = 0;
var round = 1;
function playGame() {
 
   for (let i = 0; i < 5; i++) {
  playRound();
}
console.log('Your score:', humanScore, 'Computer score:', computerScore)
if (humanScore > computerScore) {
   console.log('You win!');
}
   else if (humanScore === computerScore) {
   console.log('Tie!');
   }
   else console.log('Computer wins!');
}
playGame();

