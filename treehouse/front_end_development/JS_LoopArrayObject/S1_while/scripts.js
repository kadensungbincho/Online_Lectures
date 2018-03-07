function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var counter = 0;
while ( counter < 100 ) {
  var ranNum = randomNumber(6);
  document.write(ranNum + ' ');
  counter += 1;
}
