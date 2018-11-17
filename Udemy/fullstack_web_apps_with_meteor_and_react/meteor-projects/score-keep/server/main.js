import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  class Person {
    constructor (name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting () {
      return `Hi! I am ${this.name}.`;
    } 
    getPersonDescription () {
      return `${this.name} is ${this.age} year(s) old.`
    }
  }

  class Employee extends Person {
    constructor (name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting () {
      if (this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}.`
      } else {
        return super.getGreeting();
      }
    }
    hasJob () {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor (name, age, preferredLanguage = '') {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting () {
      if (this.preferredLanguage) {
        return `Hi! I am ${this.name}. I am  a ${this.preferredLanguage} developer.`
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Employee('Kaden', 10, 'db admin');
  console.log(me.getPersonDescription());
  console.log(me.getGreeting());

  let person = new Employee('Andrew');
  console.log(person.getGreeting());
  console.log(person.hasJob());

  let kaden = new Programmer('Kaden', 10, 'Python');
  console.log(kaden.getGreeting());
});
