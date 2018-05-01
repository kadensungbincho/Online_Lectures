const express = require('express');
const app = express();
app.locals.pretty = true;

// set template engine
app.set('view engine', 'jade');
app.set('views', './views');

// static file handling
app.use(express.static('public'));
app.get('/topic', function(req, res){
    res.send(req.query.id+','+ req.query.name);
});

app.get('/template', function(req, res) {
    res.render('index', {_title:'Jade', time:Date()});
});

app.get('/', (req, res) => res.send('Hello Kaden Sungbin Cho!!'));
// app.get('/route', (req, res) => res.send('Hello Router, <img src="/route.png">'));

app.get('/dynamic', function(req, res) {
    var lis = '';
    var time = Date();

    for (var i=0; i<5; i++) {
        lis = lis + '<li>coding</li>';
    }
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello Static!!
            ${lis}
            ${time}
        </body>
    </html>
    `
    res.send(output);
});
app.get('/login', (req, res) => res.send('<h1>Log in please</h1>'));
app.get('/game', (req, res) => res.send('<h2>Gaming!!</h2>'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
