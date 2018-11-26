class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
  }


// creating the phrases
  createPhrases() {
    const phrases = [
      new Phrase('A penny for your thoughts'),
      new Phrase('Damn that was hard'),
      new Phrase('You would make a good Dalek'),
      new Phrase('Run for your life'),
      new Phrase('Keep calm and carry on'),
      new Phrase('My cat is happy I am home'),
      new Phrase('No you hang up'),
      new Phrase('I was told there would be cake')
    ];
    return phrases;
  }


  //selecting the phrase and creating an array with every single character as an object
  getRandomPhrase() {
    const ranNum = parseInt(Math.random()*this.phrases.length);
    return phrase = game.phrases[ranNum];
  }



  // reactions called when a letter is clicked according if there is a match or no
  handleInteraction(buttonClicked) {
    // checks to see if the button clicked by the player matches a letter in the phrase
    if(phrase.checkLetter(buttonClicked) === true) {
      // the letter clicked match at least one of the hidden letters: the letter is reveal, the button's colour changes, and the game is checking for a win
      phrase.showMatchedLetter(buttonClicked);
      buttonClicked.classList.add('chosen');
      this.checkForWin();

    } else {
      // the letter clicked doesn't match: the button's colour changes, one heart is removed from the board
      buttonClicked.classList.add('wrong');
      this.removeLife();
    }

  }


  // starting the game: picking a phrase and displaying it
  startGame() {
    game.getRandomPhrase().addPhraseToDisplay();
  }


  // checking for win
  checkForWin() {
    if (document.querySelectorAll('#phrase ul .letter').length === document.querySelectorAll('#phrase ul .show').length) {
      this.gameOver('win');
    }
  }


  //removing a heart and checking for lose
  removeLife() {

    // removing hearts
    const heartsContainer = document.querySelector('#scoreboard ol');
    const hearts = document.querySelector('#scoreboard ol li');
    heartsContainer.removeChild(hearts);

    // counting the missed
    this.missed += 1;

    // check to see if the player loses the game
    if (this.missed === 5) {
      this.gameOver('lose');
    }


  }


  // end of game
  gameOver(result) {

    // displaying the win/lose message
    if (result === 'win') {
      document.querySelector('#game-over-message').innerText = 'Congratulations!';
      document.querySelector('#overlay').classList.add('win');
    } else {
      document.querySelector('#game-over-message').innerText = 'You lose!';
      document.querySelector('#overlay').classList.add('lose');
    }

    // displaying back the overlay
    document.querySelector('#overlay').style.visibility = 'visible';
    document.querySelector('#overlay').style.opacity = 1;


    // changing the Start Button text to "Try Again!"
    document.querySelector('#btn__reset').innerText = 'Try Again!';

  }


}
