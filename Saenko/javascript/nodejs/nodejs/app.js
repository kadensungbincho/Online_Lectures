const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.locals.pretty = true;

// set template engine
app.set('view engine', 'jade');
app.set('views', './views');

// static file handling
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/topic', function(req, res){
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br> 
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
});

app.get('/template', function(req, res) {
    res.render('index', {_title:'Jade', time:Date()});
});

app.get('/form', function(req, res) {
    res.render('form');
});
app.get('/form_receiver', function(req, res) {
    res.send('Hello GET');
});
app.post('/form_receiver', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+', '+description);
})

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
