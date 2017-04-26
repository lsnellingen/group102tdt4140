import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../pages/Sidebar';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('Sidebar', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = shallow(
        <Sidebar/>);


      expect(tree).toMatchSnapshot();




    });
});
