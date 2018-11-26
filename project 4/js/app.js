const game = new Game();

// the randomly selected phrase
let phrase;

// keeping the HTML of the five hearts for future use
const heartsInHtml = document.querySelector('#scoreboard ol').innerHTML;


// hidding the overlay
function removeOverlay() {
  document.querySelector('#overlay').style.visibility = 'hidden';
}


// actions required for the game to start (or to start again)
function resetDisplay() {

  // reset everything: buttons are enabled and the colors removed, the selected phrase is removed, the hearts are back, the missed counter is back to 0)
  document.querySelectorAll('.key').forEach(button => button.classList.remove('chosen', 'wrong'));
  document.querySelectorAll('.key').forEach(button => button.disabled = false);
  document.querySelector('#phrase ul').innerHTML = '';
  document.querySelector('#scoreboard ol').innerHTML = heartsInHtml;
  document.querySelector('#overlay').classList.remove('win', 'lose');
  game.missed = 0;

  // opacity transition and hides the start screen overlay
  document.querySelector('#overlay').style.opacity = 0;
  setTimeout(removeOverlay, 3000);
}


// mark the button which has been played
function markButton(buttonClicked) {
  // the letter played is disabled, no matter if there is a match
  buttonClicked.setAttribute('disabled', '');

  // checking if the selected phrase contains the letter clicked
  game.handleInteraction(buttonClicked);
}


// event listener: starting the game
document.querySelector('#btn__reset').addEventListener('click', function () {
  resetDisplay();
  game.startGame();
});


// event listener: the player clicks on a letter of the onscreen keyboard
document.querySelectorAll('.key').forEach(key => key.addEventListener('click', function (event) {
  markButton(this);
}));


// exceeds expectations: Let players use the computer keyboard to enter guesses.
document.addEventListener('keypress', (event) => {
  document.querySelectorAll('.key').forEach(button => {
      if (button.innerHTML === event.key) {
        markButton(button);
      }
  });
});
