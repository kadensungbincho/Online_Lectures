import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import { Login } from './Login';

// https://stackoverflow.com/questions/50025717/jest-enzyme-invariant-violation-you-should-not-use-route-or-withrouter-ou

if (Meteor.isClient) {
  describe('Login', function () {
    it('should show error messages', function () {
      const error = 'This is not working';
      const options = new ReactRouterEnzymeContext();
      const wrapper = mount(
          <Login loginWithPassword={() => {}}/>,
          options.get()
      );

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);
    });

    it('should call loginWithPassword with the form data', function () {
      const email = 'kaden@test.com';
      const password = 'password123';
      const spy = expect.createSpy();
      const options = new ReactRouterEnzymeContext();
      const wrapper =  mount(
          <Login loginWithPassword={spy}/>,
          options.get()
      );

      wrapper.ref('email').value = email;
      wrapper.ref('password').value = password;
      wrapper.find('form').simulate('submit');

      expect(spy.calls[0].arguments[0]).toEqual( email );
      expect(spy.calls[0].arguments[1]).toEqual( password );  
    });

    it('should set loginWithPassword callback errors', function () {
      const spy = expect.createSpy();
      const options = new ReactRouterEnzymeContext();
      const wrapper =  mount(
          <Login loginWithPassword={spy}/>,
          options.get()
      );

      wrapper.find('form').simulate('submit');

      spy.calls[0].arguments[2]({});
      expect(wrapper.state('error').length).toNotBe(0);

      spy.calls[0].arguments[2]();
      expect(wrapper.state('error').length).toBe(0);
    });
  });
}
