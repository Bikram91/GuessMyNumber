'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1

let score = 20;
let highScore = 0


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!';
    
    //When player wins
    } else if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Number'

        document.querySelector('.number').textContent = number

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'


        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

            



    //When guess is too high
    } else if (guess > number){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High'
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost'
            document.querySelector('.score').textContent = 0
        }

    //When guess is too low 
    } else {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low'
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost'
            document.querySelector('.score').textContent = 0
        }
    }
})


//Addding new game functionality

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...'

    document.querySelector('.number').style.width = '15rem'

    number = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

})