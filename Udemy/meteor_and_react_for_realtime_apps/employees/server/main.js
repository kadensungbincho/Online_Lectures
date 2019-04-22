import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    
  }
});