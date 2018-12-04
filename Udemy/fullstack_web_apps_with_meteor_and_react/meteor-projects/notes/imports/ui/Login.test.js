import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import expect from 'expect';
import { mount } from 'enzyme';

import { Login } from './Login';

// https://stackoverflow.com/questions/50025717/jest-enzyme-invariant-violation-you-should-not-use-route-or-withrouter-ou

if (Meteor.isClient) {
  describe('Login', function () {
    it('should show error messages', function () {
      const error = 'This is not working';
      const wrapper = mount(
        <Router>
          <Login loginWithPassword={() => {}}/>
        </Router>
      );

      wrapper.setState({ error });
      console.log(wrapper);
      expect(wrapper.find('p').text()).toBe(error);
    });

  });
}
