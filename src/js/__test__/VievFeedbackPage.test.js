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
      const context={user:{email:'hans@ntnu.no',customData:{courses:"TDT4120 - Algoritmer og datastrukturer"}}};
      const tree = shallow(
        <ViewFeedbackPage/>, {context});


      expect(tree).toMatchSnapshot();




    });
    test('render with one feedback', () => {
      /*user:{email:"larsnee@gmail.com"}*/
      const context={user:{email:'hans@ntnu.no',customData:{courses:"TDT4120 - Algoritmer og datastrukturer"}}};
      var view = ReactTestUtils.renderIntoDocument(<ViewFeedbackPage/>, {context});

    });
});
