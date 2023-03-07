'use strict';

let number = Math.trunc(Math.random() * 20) + 1

let score = 20;
let highScore = 0

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //When there is no input
    if (!guess) {
        displayMessage('⛔️ No Number!')
    
    //When player wins
    } else if (guess === number) {
        displayMessage('🎉 Correct Number')

        document.querySelector('.number').textContent = number

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'


        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    //When guess is wrong
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Too High':'Too Low')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You Lost')
            document.querySelector('.score').textContent = 0
        }

    }
})


//Addding new game functionality on again click
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessage('Start guessing...')

    document.querySelector('.number').style.width = '15rem'

    number = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

})