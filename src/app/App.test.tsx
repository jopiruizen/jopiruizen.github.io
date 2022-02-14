// import { render, screen } from '@testing-library/react';

import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
 

describe('App is Working', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App is mounted and has children', () => {
    console.log(' ', wrapper.debug());
    console.log(' ', wrapper.children().length);
    expect( wrapper.children().length).toBe(1);
  });


});