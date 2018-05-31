var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var bodyParser = require('body-parser');
var bkfd2Password = require('pbkdf2-password');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var hasher = bkfd2Password();

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: '1234r239jfofewfwef2fa3',
    resave: false,
    saveUninitialized: false,
    store: new FileStore()
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/count', function(req, res){
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send('count : '+req.session.count);
});
app.get('/auth/logout', function(req, res){
    delete req.session.displayName;
    res.redirect('/welcome');
});
app.get('/welcome', function(req, res){
    if(req.session.displayName){
        res.send(`
            <h1>Hello, ${req.session.displayName}</h1>
            <a href="/auth/logout">logout</a>
        `);
    } else {
        res.send(`
        <h1>Welcome</h1>
        <ul>
            <li><a href="/auth/login">Login</a></li>
            <li><a href="/auth/register>Register</a></li>
        </ul>
        `)
    }
});
passport.serializeUser(function(user, done) {
    console.log('serialrizeUser', user);
    done(null, user.username);
});
passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    for(var i=0; i<users.length; i++) {
        var user = users[i];
        if(user.username === id){
            done(null, user);
        }
    }
});
var users = [
    {
        username:'kadencho',
        password:'111',
        displayName:'kadensungbincho'
    }
];
passport.use(new LocalStrategy(
    function(username, password, done){
        var uname = username;
        var pwd = req.body.password;
        for(var i=0; i<users.length; i++){
            var user = users[i];
            if(uname === user.username) {
                return hasher({password:pwd, salt:user.salt}, function(err, 
                pass, salt, hash){
                    if(hash === user.password){
                        console.log('LocalStrategy', user);
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                });
            }
        }
        done(null, false);
    }
));
app.post('/auth/login', 
    passport.authenticate(
        'local', 
        { 
            successRedirect: '/welcome',
            failureRedirect: '/auth/login',
            failureFlash: false 
        }
    )
);
app.listen(3003, function(){
    console.log('Connected 3003 port!!!');
});