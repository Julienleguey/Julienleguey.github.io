// FSJS - Random Quote Generator

// Array for the quotes
let quotes = [
{source: 'Jane Austen', quote:'It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.', citation:'Pride and Prejudice', year:'1813', tags:['classic', 'romance', 'drama']},
{source: 'Douglas Adams', quote:'The house stood on a slight rise just on the edge of the village.', citation:'The Hitchhiker\'s Guide to the Galaxy', year:'1978', tags: ['science fiction', 'humour']},
{source: 'J.K. Rowling', quote:'Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.', citation:'Harry Potter and the Philosopher Stone', year:'', tags: ['kid', 'fantasy', 'urban']},
{source: 'Neil Gaiman', quote:'The night before he went to London, Richard Mayhew was not enjoying himself.', citation:'Neverwhere', year:'1996', tags: ['fantasy', 'urban']},
{source: 'J.R.R. Tolkien', quote:'In a hole in the ground there lived a hobbit.', citation:'', year:'1937', tags: ['classic', 'fantasy', 'kid']},
{source: 'Terry Pratchett', quote:'And it came to pass that in that time the Great God Om spake unto Brutha, the Chosen One: "Psst!"', citation:'Small Gods', year:'', tags: ['fantasy', 'humour']},
{source: 'Arthur Conan Doyle', quote:'In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to go through the course prescribed for surgeons in the Army.', citation:'', year:'1887', tags: ['classic', 'crime fiction']},
{source: 'John Irving', quote:'Garp\'s mother, Jenny Field, was arrested in Boston in 1942 for wounding in a movie theater.', citation:'', year:'', tags: ['drama', 'humour']},
{source: 'Philip Pullman', quote:'Lyra and her daemon moved through the darkening Hall, taking care to keep to one side, out of the kitchen.', citation:'', year:'', tags: ['fantasy', 'kid']},
{source: 'William Goldman', quote:'The year that Buttercup was born, the most beautiful woman in the world was a French scullery maid named Annette.', citation:'', year:'1973', tags: ['fantasy', 'humour', 'romance']}
];

// Declaring variables
let message ='';
let color ='';
let intervalID = 0;



//Declaring functions

//Generating a random number, used to get a quote with getRandomQuote() and to create a new background color with getColor()
function getRandomNumber() {
  let report = Math.floor(Math.random() * quotes.length )
  return report;
}

//Selecting a quote
function getRandomQuote (array) {
  let report = [];
  let randomNumber = getRandomNumber();
  report.push(array[randomNumber].source, array[randomNumber].quote, array[randomNumber].citation, array[randomNumber].year, array[randomNumber].tags);
  return report;
}

//Displaying the quote
function printQuote(message) {
  let outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
  let report = getRandomQuote(quotes);
  let string="";
  string = '<p class="quote">' + report[1] + '</p><p class="source">' + report[0];
  if (report[2] !== '') {
    string += '<span class="citation">' + report[2] + '</span>'
  }
  if (report[3] !== '') {
    string += '<span class="year">' + report[3] + '</span>'
  }
  string += '<br><br><br><ul>'
  for (let i = 0; i < report[4].length; i++) {
    string += '<span class="tags"><li>' + report[4][i] + '</li></span>'
  }
  string += '</ul></p>';
  document.getElementById('quote-box').innerHTML = string;
  return string;
}

//Creating part of a random color
function getColor() {
  let randomColor = Math.floor(Math.random() * 256 );
  return randomColor;
}

//Changing the background color
function changeBgColor() {
  let rgbColor;
  rgbColor = 'rgb(' + getColor() + ',' + getColor() + ',' + getColor() + ')';
  document.getElementById("new-color").style.backgroundColor=rgbColor;
  return rgbColor;
}

//Creating a timer
function getTimer () {
  intervalID = window.setTimeout(rebootQuote, 20000);
}

//List of functions to run when the button is clicked or when the timer reach 0
function rebootQuote() {
  clearTimeout(intervalID);
  printQuote();
  changeBgColor();
  getTimer();
  }



//Displaying a quote and setting a timer when the page is first loaded
  printQuote(message);
  getTimer();


//Event when the button is clicked
document.getElementById('loadQuote').addEventListener("click", rebootQuote, false);
