import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  const petSchema = new SimpleSchema({
    name: {
      type: String,
      min: 1,
      max: 200
    },
    age: {
      type: Number,
      min: 0,
      optional: true
    },
    contactNumber: {
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Phone
    }
  });

  petSchema.validate({
    name: 'kaden',
    age: 21,
    contactNumber: '1234' // google's
  });
});
