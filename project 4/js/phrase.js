class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  // display every letter of the selected phrase in boxes
  addPhraseToDisplay() {

    // creating an empty array which will contains the splited phrase
    const phraseSplited = [];
    
    // spliting the phrase : each character/space is pushed in the array with the HTML for the li and the according to the css classes
    this.phrase.split('').map(letter => {
      const regex = /^\w$/;
      if (regex.test(letter)) {
        phraseSplited.push(`<li class="hide letter ${letter}">${letter}</li>`);
      } else {
        phraseSplited.push(`<li class="hide space"> </li>`);
      }

    });

    // displaying each character in the ul
    phraseSplited.forEach(character => document.querySelector('#phrase ul').insertAdjacentHTML('beforeend', character));
  }


  // checking if the selected phrase includes the letter played
  checkLetter(buttonClicked) {
    if (this.phrase.toLowerCase().includes(buttonClicked.innerText)) {
      return true;
    } else {
      return false;
    }
  }

  // the letter is revealed
  showMatchedLetter(buttonClicked) {
    document.querySelectorAll('#phrase ul li').forEach(block => {
      if (block.innerText.toLowerCase() === buttonClicked.innerText) {
        block.classList.remove('hide');
        block.classList.add('show');
      }
    });
  }


}
