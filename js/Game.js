/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    
    constructor(){
       this.missed = 0;
       this.phrases = [
        new Phrase("Hello World"),
        new Phrase("I love programming"),
        new Phrase("Stress is fun"),
        new Phrase("Keep Pushing"),
        new Phrase("Good Luck")];
       this.activePhrase = null; 
    }

   


    startGame(){
       document.getElementById('overlay').style.display = 'none';
       this.getRandomPhrase().addPhraseToDisplay();
    }


    getRandomPhrase(){
        const randomPhrase = new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)].phrase);
        //new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)]) ;
        return randomPhrase;
            //return a random phrase from the array of objects 
    }

    handleInteraction(){

    }
}




