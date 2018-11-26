
/*================================
Set focus on the first text field
==================================*/

// focus on the first field of the form wwhen the page first load
$('#name').focus();


/*================================
”Job Role” section
==================================*/

// hiding the text field for the Other Job Role
$('#other-title').hide();

// showing the text field for the Other Job Role if "Other" is selected from the "Job Role" drop down menu
$('#title').on('change', function () {
  if($('#title').val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});


/*================================
”T-Shirt Info” section
==================================*/

// stocking all the color options in an array
const $colorOptions = $('#color option');

//extra credits: hiding the label and the drop down menu if no t-shirt design has been selected yet
$('#colors-js-puns').hide();

// displaying only the color option that match the selected design
// when the design change
$('#design').on('change', function () {
  // removing all the color options
  $('#color option').remove();
  // if the first t-shirt is selected
  if($('#design').val() === "js puns") {
    // revealing the color selection
    $('#colors-js-puns').show();
    // picking the corresponding color options from the array they are stocked in and appending them to the color selection
    $($colorOptions).each(function() {
      const optionToTest = $(this).text();
      if (optionToTest.includes('JS Puns shirt only')) {
        $('#color').append("<option>" + optionToTest + "</option>");
      }
    });
  // if the second t-shirt is selected
  } else if ($('#design').val() === "heart js") {
    // revealing the color selection for the extra credits
    $('#colors-js-puns').show();
    // picking the corresponding color options from the array they are stocked in and appending them to the color selection
    $($colorOptions).each(function() {
      const optionToTest = $(this).text();
      if (optionToTest.includes('JS shirt only')) {
        $('#color').append("<option>" + optionToTest + "</option>");
      }
    });
  // if no t-shirt is selected
  } else {
    // hidding the color selection for the extra credits
    $('#colors-js-puns').hide();
  }
});


/*===============================
”Register for Activities” section
================================*/

//disabling events that are at the same time when one is checked
//when one the checkbox activity checkbox is clicked
$('.activities').on('click', function () {
//if JavaScript Frameworks Workshop is checked
  if ($('input[name="js-frameworks"]').is(':checked')) {
    //Express Workshop is disabled
    $('input[name="express"]').attr("disabled", true);
    $('input[name="express"]').parent().css("color", "lightgrey");
  } else {
    //if the JavaScript Frameworks Workshop is unchecked, then Express Workshop is clickable
    $('input[name="express"]').attr("disabled", false);
    $('input[name="express"]').parent().css("color", "");
  }
//if JavaScript Frameworks Workshop is checked
  if ($('input[name="express"]').is(':checked')) {
    //JavaScript Frameworks Workshop is disabled
    $('input[name="js-frameworks"]').attr("disabled", true);
    $('input[name="js-frameworks"]').parent().css("color", "lightgrey");
  } else {
    //if the Express Workshop is unchecked, then JavaScript Frameworks Workshop is clickable
    $('input[name="js-frameworks"]').attr("disabled", false);
    $('input[name="js-frameworks"]').parent().css("color", "");
  }
//if JavaScript Libraries Workshop is checked
  if ($('input[name="js-libs"]').is(':checked')) {
    //Node.js is disabled
    $('input[name="node"]').attr("disabled", true);
    $('input[name="node"]').parent().css("color", "lightgrey");
  } else {
    //if the JavaScript Libraries Workshop is unchecked, then Node.js Workshop is clickable
    $('input[name="node"]').attr("disabled", false);
    $('input[name="node"]').parent().css("color", "");
  }
//if Node.js Workshop is checked
  if ($('input[name="node"]').is(':checked')) {
    //JavaScript Libraries Workshop is disbaled
    $('input[name="js-libs"]').attr("disabled", true);
    $('input[name="js-libs"]').parent().css("color", "lightgrey");
  } else {
    //if the Node.js Workshop is unchecked, then JavaScript Libraries Workshop is clickable
    $('input[name="js-libs"]').attr("disabled", false);
    $('input[name="js-libs"]').parent().css("color", "");
  }
});

//creation of a total cost for the activities and hidding it
let $totalCost = 0;
$('.activities').append('<div class="total_cost">Total: $' + $totalCost + '</div>');
$('.total_cost').hide();


//the cost of the activity is added to the total cost when it's checked and substrated when it's unchecked
$('.activities input').on('click', function () {
  if($(this).is(':checked')) {
    const $toAddCost = parseInt($(this).parent().text().slice(-3));
    $totalCost += $toAddCost;
  } else if ($(this).not(':checked')) {
    const $toAddCost = parseInt($(this).parent().text().slice(-3));
    $totalCost -= $toAddCost;
  }
  $('.total_cost').replaceWith('<div class="total_cost">Total: $' + $totalCost + '</div>');
  //total cost is hidden if equal to 0
  if ($totalCost === 0) {
    $('.total_cost').hide();
  }
});


/*====================
"Payment Info" section
=====================*/

// showing the credit card section and hidding bitcoin and paypal sections for the first launch
$('#credit-card').show();
$('#credit-card').next().hide();
$('#credit-card').next().next().hide();

// disabling the "Select Payment Method" from the list
$('#payment option').eq(0).attr('disabled', true);

//The "Credit Card" payment option is now selected by default
$('#payment').prop('selectedIndex', 1);

//When the payment option change, the corresponding section is displayed accordingly
$('#payment').on('change', function() {
  if($('#payment').val() === 'credit card') {
    $('#credit-card').show();
    $('#credit-card').next().hide();
    $('#credit-card').next().next().hide();
  } else if($('#payment').val() === 'paypal') {
    $('#credit-card').hide();
    $('#credit-card').next().show();
    $('#credit-card').next().next().hide();
  } else if($('#payment').val() === 'bitcoin') {
    $('#credit-card').hide();
    $('#credit-card').next().hide();
    $('#credit-card').next().next().show();
  }
});


/*====================================================================
form validation & Form validation messages & Conditional Error Message
====================================================================*/

//function aiming to clean all the error messages
function cleanErrorMsg() {
  $('.error').remove();
}

//in case of error in the field checked: function to prevent the button to refresh the page and new style for the field
function errorFound(element) {
  event.preventDefault();
  element.addClass('error-field');
}

//in case of error removed in the field checked: function to display the normal style of the field
function errorCorrected(element) {
  element.removeClass('error-field');
}

//name field: function adding an error message if empty
function errorName() {
  if ($('#name').val() === '') {
    errorFound($('#name'));
    $('#name').after('<p class="error">Please add your name!</p>');
  } else {
    errorCorrected($('#name'));
  }
}

//email field: function adding an error message depending of the error
function errorEmail () {
  //regex to check the address email, source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const userEmail = $('#mail').val();
  //error 1: the field is empty
  if (userEmail === '') {
    errorFound($('#mail'));
    $('#mail').after('<p class="error">Please type in your email address!</p>');
  } else if (regex.test(userEmail)) {
    errorCorrected($('#mail'));
  } else {
  //error 2: the email address is not valid
    errorFound($('#mail'));
    $('#mail').after('<p class="error">Email address not valid!</p>');
  }
}

//activity section: function adding an error message if no checked activity
function errorActivities() {
  if ($totalCost === 0) {
    event.preventDefault();
    $('.activities legend').after('<p class="error">Select at least one activity!</p>');
  }
}

//credit card number field: function adding an error message depending of the error
function errorCCNumber() {
  //only if the credit card is selected as the payment option
  if ($('#payment').val() === 'credit card' || $('#payment').val() === 'select_method') {
    //regex to check that the credit card number contains 13 to 16 digits
    const regex = /^\d{13,16}$/;
    //error 1: the field is empty
    if ($('#cc-num').val() === '') {
      errorFound($('#cc-num'));
      $('#cc-num').after('<p class="error">Please type in your credit card number!</p>');
    } else if (regex.test($('#cc-num').val())) {
      errorCorrected($('#cc-num'));
    } else {
    //error 2: the credit card number is not valid
      errorFound($('#cc-num'));
      $('#cc-num').after('<p class="error">Credit card number should contains 13 to 16 digits!</p>');
    }
  }
}

//zip code field: function adding an error message depending of the error
function errorCCZipCode() {
  //only if the credit card is selected as the payment option
  if ($('#payment').val() === 'credit card' || $('#payment').val() === 'select_method') {
    //regex to check that the zip code contains 5 digits
    const regex2 = /^\d{5}$/;
    //error 1: the field is empty
    if ($('#zip').val() === '') {
      errorFound($('#zip'));
      $('#zip').after('<p class="error">Please type in your Zip Code!</p>');
    } else if (regex2.test($('#zip').val())) {
      errorCorrected($('#zip'));
    } else {
    //error 2: the zip code is not valid
      errorFound($('#zip'));
      $('#zip').after('<p class="error">Zip Code should contains 5 digits!</p>');
    }
  }
}

//cvv field: function adding an error message depending of the error
function errorCCCVV() {
  //only if the credit card is selected as the payment option
  if ($('#payment').val() === 'credit card' || $('#payment').val() === 'select_method') {
    //regex to check that the cvv contains 3 digits
    const regex3 = /^\d{3}$/;
    //error 1: the field is empty
    if ($('#cvv').val() === '') {
      errorFound($('#cvv'));
      $('#cvv').after('<p class="error">Please type your CVV!</p>');
    } else if (regex3.test($('#cvv').val())) {
      errorCorrected($('#cvv'));
    } else {
      //error 2: the zip code is not valid
      errorFound($('#cvv'));
      $('#cvv').after('<p class="error">CVV should contains 3 digits!</p>');
    }
  }
}

//When the button is clicked, all the previous error messages are removed and all the field are verified
//Error messages displays accordingly and the button is stopped from its normal behavior if at least one error is found
$('button').on('click', function (event) {
  cleanErrorMsg();
  errorName();
  errorEmail ();
  errorActivities();
  errorCCNumber();
  errorCCZipCode();
  errorCCCVV();
});


/*======================
Real-time Error Messages
======================*/

//checking the name field while the user is typing
$('#name').on('keyup', function() {
  //removing the previous error message of the field
  $('#mail').next().remove('.error');
  //looking for errors only if there is at least one character
  if ($('#name').val() === '') {
  } else {
    errorName();
  }
});

//checking the email address field while the user is typing
$('#mail').on('keyup', function() {
  //removing the previous error message of the field
  $('#mail').next().remove('.error');
  //looking for errors
  errorEmail();
});

//checking the activities section while the user is clicking
$('.activities').on('click', function() {
  //removing the previous error message of the field
  $('.activities legend').next().remove('.error');
  errorCorrected($('.activities'));
});

//checking the credit card number field while the user is typing
$('#cc-num').on('keyup', function() {
  //removing the previous error message of the field
  $('#cc-num').next().remove('.error');
  //looking for errors
  errorCCNumber();
});

//checking the zip code field while the user is typing
$('#zip').on('keyup', function() {
  //removing the previous error message of the field
  $('#zip').next().remove('.error');
  //looking for errors
  errorCCZipCode();
});

//checking the cvv field while the user is typing
$('#cvv').on('keyup', function() {
  //removing the previous error message of the field
  $('#cvv').next().remove('.error');
  //looking for errors
  errorCCCVV();
});
