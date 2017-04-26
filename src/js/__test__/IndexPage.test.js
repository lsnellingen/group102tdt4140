// Libs
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import axios from 'axios';

// Components
import Logo from '../svg/Logo';
import FeedbackIcon from 'react-icons/lib/fa/comments';
import LabelIcon from 'react-icons/lib/md/label';

import IndexPage from '../pages/IndexPage';
import {shallow} from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import renderer from 'react-test-renderer';

let Example;
let onActionMock = jest.fn();
describe('IndexPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

  beforeEach(function() {
  onActionMock.mockClear();
  });
    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = shallow(
        <IndexPage/>);


      expect(tree).toMatchSnapshot();




    });
    test('login-button links to appropriate page',() => {


      const test = ReactTestUtils.renderIntoDocument(<IndexPage/>);
      const loginButton = test.refs.login_button;
      //ReactTestUtils.Simulate.click(loginButton);

      /*ReactTestUtils.Simulate.click(<id{login-button"}/>);*/
    });
});
