function Dice(sides) {
  this.sides = sides;
  this.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) +1;
    return randomNumber;
  }
}

/*
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
*/
