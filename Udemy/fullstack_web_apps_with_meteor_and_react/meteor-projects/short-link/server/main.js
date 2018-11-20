import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import  '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    console.log('This is from my custom middleware!');
    console.log(req.url, req.method, req.headers, req.query);
    // Set HTTP status code 
    // res.statusCode = 404;
    // Set HTTP Headers
    // res.setHeader('my-custom-header', 'Kaden Cho');
    // Set HTTP body
    // res.write('<h1>This is my middleware</h1>');
    // End HTTP request
    // res.end();

    next();
  });
});
