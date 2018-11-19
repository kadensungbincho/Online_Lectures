import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import  '../imports/api/links';

Meteor.startup(() => {
  // Meteor.call('greetUser', (err, res) => {
  //   console.log('Greet User Arguments', err, res);
  // });
  Meteor.call('addNumbers', 1, 2, (err, res) => {
    console.log('addNumbers Arguments', err, res);
  });
});
