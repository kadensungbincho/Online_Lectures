function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var dice6 = new Dice(6);
  var result = dice6.roll();
  printNumber(result);
};
