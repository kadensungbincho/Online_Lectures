var fs = require('fs');
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);
