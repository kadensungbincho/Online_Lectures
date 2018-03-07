function Movie(title, year, duration) {
  var song = this;
  Media.call(song, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype); // copies the references to the 
                                      // Media's prototype and properties and methods 

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  } 
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
  htmlString += ') ';
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>'; 
  return htmlString;
};
