import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from '../pages/MasterPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('MasterPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = shallow(
        <MasterPage/>);


      expect(tree).toMatchSnapshot();




    });
});
