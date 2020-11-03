/*
GAME FUNCTION : 
- player must guess a number btwn a min and max 
- player gets a certain num of guesses
- nofify player of guesses remaining
- notifiy the player of the correct answer if he/she loses 
- let player choose to play again 

*/

// Game values 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message')


// Play again event listener to game wrapper
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
}); 

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max; 

// Listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value); // convert guessInput value string into a int
  
    // Validate 
    // console.log(guess);

    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }

    // Check if won 
    if (guess === winningNum){
        // Game over - Won
        gameOver(true,`${winningNum} is correct! YOU WIN!`);
        
    } else {
        // Wrong nnumber scenario 
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game Over - Lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`);

        } else {
            // Game continues - answer wrong

            // clear input
            guessInput.value = "";

            // Change border color 
            guessInput.style.borderColor = 'red'
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');

        }

    }

});

// Game Over

function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input 
    guessInput.disabled = true;
    // Change border color 
    guessInput.style.borderColor = color;

    // // Set text color
    // message.style.color = color;

    // Set message
    setMessage(msg, color)

    // Play again 
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

};

// Generate a winning number randomly
function getRandomNum(min,max){
    return Math.floor(Math.random()* (max-min + 1) + min);

}


// Set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}



