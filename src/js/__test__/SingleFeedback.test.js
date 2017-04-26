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
      const users = {email: "joachiee@ntnu.no"};
      const context = {user:{name: "joachim", email:"joachiee@ntnu.no"}};

      const upvoter = {email: "hans@ntnu.no"};
      const tree = shallow(
        <SingleFeedback feedback={{response:"Heisann hoppsan", likes: 4, date: "Fri Apr 07 2017 12:40:30 GMT+0200 (Vest-Europa (sommertid))",upvoters: "hans@ntnu.no"}}/>,{ context });

      console.log(tree.props)
      expect(tree).toMatchSnapshot();




    });
    test('render with one feedback', () => {
      /*user:{email:"larsnee@gmail.com"}*/
      const context={user:{email:'hans@ntnu.no'}};
      var view = shallow(<SingleFeedback feedback={{response:"Heisann hoppsan", likes: 4, date: "Fri Apr 07 2017 12:40:30 GMT+0200 (Vest-Europa (sommertid))",upvoters: "hans@ntnu.no"}} />, {context});
      
    });
});
