var quizList = [
  [ "When is the year of 6.25 war?", "1950" ],
  [ "How many item clusters in the natioal flag of Korea?", "5" ],
  [ "How many languages that Kaden can use?", "2" ],
  [ "On what age one can buy alcohol or cigar?", "20" ]
]
var tempAnswer;
var answerList = [];

for ( var i = 0; quizList.length > i; i += 1 ) {
  tempAnswer = prompt(quizList[i][0]);
  answerList.push(tempAnswer);
}

for ( var i = 0; answerList.length > i; i += 1 ) {
  if ( answerList[i] === quizList[i][1] ) {
    document.write( "<p>Right : " + quizList[i][0] + "</p>" );
  } else {
    document.write( "<p>Wrong : " + quizList[i][0] + "</p>" );
  }
}

