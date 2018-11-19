import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  greetUser(name) {
    console.log('greetUser is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }
    return `Hello ${name}!`;
  },
  addNumbers(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
      throw new Meteor.Error('invalid-arguments', 'Should be number');
    }
    return a + b;
  }
});
