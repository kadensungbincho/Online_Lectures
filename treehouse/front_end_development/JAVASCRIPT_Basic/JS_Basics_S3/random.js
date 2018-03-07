function getRandomNumber( upper ) {  
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
/*
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(10000) );
*/

function getArea(width, length, unit) {
  var area = width * length
  return area + " " + unit;
}
// console.log( getArea(10, 20, 'sq ft') );

function getRandomNumber2( bottom, upper ) {
  if ( isNaN( bottom ) || isNaN( upper ) ) {
    throw new Error('Please insert Number arguments');
  }
  if (bottom > upper ) {
    return false;
  } else {
    var randomNumber = Math.floor( Math.random() * (upper-bottom+1) ) + bottom;
    return randomNumber;
  }
}
console.log( getRandomNumber2( 8, 12 ) );
console.log( getRandomNumber2( 8, 12 ) );
console.log( getRandomNumber2( 8, 12 ) );
