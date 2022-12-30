const card = document.querySelectorAll('.card');

let cardFlip = false;
let board = false;
let cardOne, cardTwo;

function cardFlipping() {
  if (board) return;
  if (this === cardOne) return;

  this.classList.add('flip');

  if (!cardFlip) {
    // first click
    cardFlip = true;
    cardOne = this;

    return;
  }

  // second click
  cardTwo = this;

  matchingCard();
}

function matchingCard() {
  if (cardOne.dataset.framework === cardTwo.dataset.framework) {
    unMatchingCard();
    return;
  }

  unflipCards();
}

function unMatchingCard() {
  cardOne.removeEventListener('click', cardFlipping);
  cardTwo.removeEventListener('click', cardFlipping);

  resetting();
}

function unflipCards() {
  board = true;

  setTimeout(() => {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');

    resetting();
  }, 1500);
}

function resetting() {
  [cardFlip, board] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

(function shuffle() {
  card.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
    });
  });

}

card.forEach(card => card.addEventListener('click', cardFlipping));