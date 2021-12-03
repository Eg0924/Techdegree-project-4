/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase{
    
    constructor(phrase){
         this.phrase = phrase.toLowerCase();
    }
    
    

    
    addPhraseToDisplay(){


    const displayDiv = document.querySelector('#phrase ul');
    //console.log(displayDiv);
    const splitString = this.phrase.split(''); 
    splitString.forEach(element => {
       const liElem = document.createElement('li');
       
       if(element !== " "){
          liElem.setAttribute('class', "hide letter " + element);
          liElem.textContent = element;
       }else{
          liElem.setAttribute('class','space'); 
          liElem.textContent = " ";
       }
       
        displayDiv.append(liElem);
            
    });
    }

    checkLetter(){

    }

    showMatchedLetter(){

    }
}

