/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const game = new Game();

const button = document.getElementById('btn__reset');

button.addEventListener('click', () =>{
    game.startGame();
});
