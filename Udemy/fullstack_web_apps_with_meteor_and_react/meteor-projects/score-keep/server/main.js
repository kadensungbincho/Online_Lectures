import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  Players.insert({
    name: 'Sungbin',
    score: 33
  });
  console.log(Players.find().fetch());
});