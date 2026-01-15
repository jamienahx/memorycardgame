//cached elements
let cards  = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let hasFlippedCard= false;

//functions 
function flipCard() {
    this.classList.add('flip');

    //toggle just adds if it is absent and removes if it is present: click --> add, click again --> remove
    //add means add the class and it stays added until it is removed: click --> add, click again --> nothing happens

    if (!hasFlippedCard) {
        //!hasflipped card means it is no longer false -> the state of the card having been clicked
        hasFlippedCard = true; 
        firstCard = this;
    } else {
        //set it back to false, ready for the next "first click"
        hasFlippedCard = false;
        secondCard = this;
    }


    

}



//event listeners

cards.forEach(function(card){
    card.addEventListener('click',flipCard) 
})