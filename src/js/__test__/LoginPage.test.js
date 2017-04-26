import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../pages/LoginPage';
import renderer from 'react-test-renderer';
import { LoginForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';
import router from 'react-router';

describe('LoginPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      var tree= shallow(<LoginPage/>);

    /*  const tree = renderer.create(
        <LoginPage/>).toJSON();*/


      expect(tree).toMatchSnapshot();




    });
});
