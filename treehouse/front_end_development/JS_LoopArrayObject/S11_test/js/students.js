var html = "";
var search = "";
var students = [ 
  { 
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

function print(message) {
  var outputDiv = document.getElementById('output'); // a node
  outputDiv.innerHTML = message;
}

/*
for ( var i = 0; i < students.length; i += 1 ) {
  student = students[i]
  html += "<div>";
  html += "<p><strong>Student: " + student.name + "</strong></p>";
  html += "<p>Track: " + student.track + "</p>";
  html += "<p>Points: " + student.points + "</p>";
  html += "<p>Achievements: " + student.achievements + "</p>";
  html += "</div>";
}
*/

while ( true ) {
  search = prompt("Please insert name or 'quit' to quit");
  if ( search === 'quit' ) {
    break;
  } else {
    for ( var i = 0; i < students.length; i += 1 ) {
      student = students[i];
      if ( student.name === search ) {
        html += "<h1>Found : " + student.name + "</h1>";
      } 
    }
  }
}

print(html);

print(html);
