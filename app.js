//cached elements
let cards  = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let hasFlippedCard= false;
let lockBoard =false;

//functions 
function flipCard() {
    this.classList.add('flip');

    //toggle just adds if it is absent and removes if it is present: click --> add, click again --> remove
    //add means add the class and it stays added until it is removed: click --> add, click again --> nothing happens

    if (!hasFlippedCard) {
        if(lockBoard) return ;
        if(this===firstCard) return; //if the user clicks the first card again, return. note that on the true first iteration, this is undefined at this stage as firstCard= this comes later. 
        //!hasflipped card means it is no longer false -> the state of the card having been clicked
        hasFlippedCard = true; 
        firstCard = this;
        return;
    }
        //set it back to false, ready for the next "first click"
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch()
}

function checkForMatch(){
    if(firstCard.dataset.framework===secondCard.dataset.framework) {
        disableCards();
    } else {
       unFlipCards();

    }
}

function unFlipCards(){
    lockBoard=true;
     setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard=false;
        resetBoard();
    },1500);
    
}

function disableCards(){
            //disable click
        //remove event listener
        firstCard.removeEventListener('click',flipCard)
        secondCard.removeEventListener('click',flipCard)

        resetBoard();
    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}



//event listeners

cards.forEach(function(card){
    card.addEventListener('click',flipCard)
})