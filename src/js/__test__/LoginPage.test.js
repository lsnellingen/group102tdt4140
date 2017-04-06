import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../pages/LoginPage';
import renderer from 'react-test-renderer';
import { LoginForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('LoginPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <LoginPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
