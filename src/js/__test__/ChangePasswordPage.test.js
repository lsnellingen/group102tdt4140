import React from 'react';
import ReactDOM from 'react-dom';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('ChangePasswordPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <ChangePasswordPage location={{query: {sptoken:"ksdsl"}}}/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
