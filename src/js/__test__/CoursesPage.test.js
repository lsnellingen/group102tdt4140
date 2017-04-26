import React from 'react';
import ReactDOM from 'react-dom';
import CoursesPage from '../pages/CoursesPage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('CoursesPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <CoursesPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
