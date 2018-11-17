import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {

  // function square (x) {
  //   return x * x;
  // };

  // let square = (x) => {
  //   return x * x;
  // };
  // console.log(square(10));

  // let user = {
  //   name: 'Kaden',
  //   sayHi () {
  //     setTimeout(() => {
  //       console.log(this.name);
  //     }, 1000);
  //   }
  // };
  // user.sayHi(1, 2);

  let numbers = [9, 123, 12, 33];
  let newNumbers = numbers.map((number) => number * number);
  console.log(newNumbers);
});
