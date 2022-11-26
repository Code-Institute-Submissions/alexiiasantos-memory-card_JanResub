const cards = document.querySelectorAll('.card');

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add('flip');
  
    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }

      // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
    isMatch ? disableCards() : unflipCards();
  }
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    resetBoard();
  }

cards.forEach(card => card.addEventListener('click', flipCard));