//cached elements
let cards  = document.querySelectorAll('.memory-card');

//functions 
function flipCard() {
    this.classList.toggle('flip');

}



//event listeners

cards.forEach(function(card){
    card.addEventListener('click',flipCard) 
})