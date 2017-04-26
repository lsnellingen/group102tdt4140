import React from 'react';
import ReactDOM from 'react-dom';
import SingleQueries from '../pages/SingleQueries';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow} from 'enzyme';

describe('SingleQueries', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = shallow(
        <SingleQueries queries={{answers:"Testing answers"}}/>);


      expect(tree).toMatchSnapshot();




    });
});
