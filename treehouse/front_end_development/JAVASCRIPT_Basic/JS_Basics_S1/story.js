'"<h2>There once was  a [adjective] programmer who wanted to use JavaScript to [verb] the [noun]/</h2>"

var adjective = prompt('Please type an adjective');
var sentence = "<h2>There once was a " + adjective;
var verb = prompt('Please type a verb');
var noun = prompt('Please type a noun');
alert('All done. Ready for the message?');
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence + = "the " + noun + ".</h2>"
document.write(sentence);
