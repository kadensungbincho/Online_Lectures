var express = require('express');
var app = express();
var p1 = require('./routes/p1')(app);
app.use('/p1', p1);
var p2 = require('./routes/p2');
app.use('/p2', p2);

app.listen(3003, function(){
    console.log('connected');
});
