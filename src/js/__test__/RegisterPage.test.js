import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from '../pages/RegisterPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('RegisterPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <RegisterPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
