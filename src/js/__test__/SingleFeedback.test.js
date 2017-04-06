import React from 'react';
import ReactDOM from 'react-dom';
import SingleFeedback from '../pages/SingleFeedback';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('SingleFeedback', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <SingleFeedback feedback={{course:"TDT4140", date: "22-02-17"}}/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
