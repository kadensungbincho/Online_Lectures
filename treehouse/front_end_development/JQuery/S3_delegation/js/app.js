/*
// When the button is pressed
$('.spoiler button').click(function() {
  
  // Show the spoiler text
  $('.spoiler span').show();
  // Hide the 'reveal spoiler' button
  $('.spoiler button').hide();

});
*/

$('.spoiler').on('click', 'button', function(event) {  // event delegation
  console.log(event.target);
  // Show the spoiler text
  $(this).prev().show(); // this == event.target
  // Hide the 'reveal spoiler' button
  $(event.target).hide();
});


// Create the "Reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page 
$('.spoiler').append($button);

// Hide the spoiler text
$('.spoiler span').hide();




