import { Meteor } from 'meteor/meteor';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import expect from 'expect';
import { mount } from 'enzyme';

import { Editor } from './Editor';
import { notes } from '../fixtures/fixtures';
import testHistory from '../routes/testHistory';
import Expectation from 'expect/lib/Expectation';

if (Meteor.isClient) {
  describe('Editor', function () {
    let call;
    let history;

    beforeEach(() => {
      call = expect.createSpy();
      history = {
        ...testHistory,
        push: expect.createSpy()
      };
    });

    it('should render pick note message', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call}/>
        </MemoryRouter>
      );

      expect(wrapper.find('p').text()).toBe('Pick or create a note to get started.')
    });

    it('should render not found message', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call} selectedNoteId={notes[0]._id}/>
        </MemoryRouter>
      );
      expect(wrapper.find('p').text()).toBe('Note not found.')
    });

    it('should remove note', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>
        </MemoryRouter>
      );

      wrapper.find('button').simulate('click');

      // set up asserts for call spy and for push spy
      expect(call).toHaveBeenCalledWith('notes.remove', notes[0]._id);
      expect(history.push).toHaveBeenCalledWith('/dashboard');
    });

    it('should update the note body on textarea change', function () {
      const newBody = 'This is my new body';
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>
        </MemoryRouter>
      );

      wrapper.find('textarea').simulate('change', {
        target: {
          value: newBody
        }
      });

      expect(wrapper.find('Editor').state('body')).toBe(newBody);
      expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, { body: newBody });
    });

    it('should update the note title on input change', function () {
      const newTitle = 'This is my new title';
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>
        </MemoryRouter>
      );

      wrapper.find('input').simulate('change', {
        target: {
          value: newTitle
        }
      });

      expect(wrapper.find('Editor').state('title')).toBe(newTitle);
      expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, { title: newTitle });
    });

    it('should set state for new note', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call}/>
        </MemoryRouter>
      );
      
      newProps = {
        selectedNoteId: notes[0]._id,
        note: notes[0]
      }
      wrapper.setProps({ children: <Editor {...newProps} /> });
      wrapper.update();

      expect(wrapper.find('Editor').state('title')).toBe(notes[0].title);
      expect(wrapper.find('Editor').state('body')).toBe(notes[0].body);
    }); 
    
    it('should not set of note porp not provided', function () {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Editor history={history} call={call}/>
        </MemoryRouter>
      );

      newProps = {
        selectedNoteId: notes[0]._id
      }
      wrapper.setProps({ children: <Editor {...newProps} /> });
      wrapper.update();

      expect(wrapper.find('Editor').state('title')).toBe('');
      expect(wrapper.find('Editor').state('body')).toBe('');
    });  
  });
}