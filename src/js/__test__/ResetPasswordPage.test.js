import React from 'react';
import ReactDOM from 'react-dom';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('ResetPasswordPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <ResetPasswordPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
