import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor'; 
import { mount } from 'enzyme';

import NoteListHeader from './NoteListHeader';

if (Meteor.isClient) {
  describe('NoteListHeader', function () {
    let meteorCall;

    beforeEach(function () {
      meteorCall = expect.createSpy();
    });

    it('should call meteorCall on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall}/>);

      wrapper.find('button').simulate('click');
      
      expect(spy).toHaveBeenCalledWith('notes.insert');
    });
  });
}