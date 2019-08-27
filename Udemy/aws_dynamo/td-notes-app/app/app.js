const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const appRoutes = require('./routes/app-routes');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // var err = new Error('Not Found');
    // err.status = 404;
    // next(err);
    res.render('index');
});

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        status: err.status
    });
});

module.exports = app;
