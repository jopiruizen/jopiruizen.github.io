// import { render, screen } from '@testing-library/react';

import { configure, shallow } from 'enzyme';

import Note from './notes';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import store from '../../store';

describe('Note component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
            <Note />
    );
    console.log(' ', wrapper.debug());
  });

  test('Note has Add Note button', () => {
    console.log(' ', wrapper.find('#addNoteBtn').text());
    expect(wrapper.find('#addNoteBtn').text()).toBe('Add Note');
  });


});