// Libs
import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

import renderer from 'react-test-renderer';
import Header from '../pages/Header';

/* describe('Header', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = renderer.create(
        <Header/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
});
*/