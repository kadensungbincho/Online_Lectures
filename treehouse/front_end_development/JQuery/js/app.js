const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);


$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  // check if checkbox has been checked
  // if zero checkboxes are checked
  if ($(':checked').length === 0){
    // prevent download of document
    event.preventDefault();
    // alert the user
    alert('Please check the box to allow PDF downloads.');
  } else {
  // else allow the download
  }
});

$('#links').append($pdfCheckbox);

$('a').each(function(index, link){
  const url = $(link).attr('href');
  $(link).parent().append(`(${url})`);
});

/*
$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
*/
