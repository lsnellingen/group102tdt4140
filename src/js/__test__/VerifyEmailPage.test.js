import React from 'react';
import ReactDOM from 'react-dom';
import VerifyEmailPage from '../pages/VerifyEmailPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('VerifyEmailPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <VerifyEmailPage location={{query: {sptoken:"ksdsl"}}}/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});