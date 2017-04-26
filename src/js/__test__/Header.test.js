// Libs
import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

import renderer from 'react-test-renderer';
import Header from '../pages/Header';
import {shallow} from 'enzyme';

 describe('Header', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = shallow(
        <Header/>);


      expect(tree).toMatchSnapshot();




    });
});
