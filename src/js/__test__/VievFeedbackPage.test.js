import React from 'react';
import ReactDOM from 'react-dom';
import ViewFeedbackPage from '../pages/ViewFeedbackPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('ViewFeedbackPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <ViewFeedbackPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
