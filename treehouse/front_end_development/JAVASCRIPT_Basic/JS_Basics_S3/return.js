function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
      return false;
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert('Please provide your email address');
}
