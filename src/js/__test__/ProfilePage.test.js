import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from '../pages/ProfilePage';
import renderer from 'react-test-renderer';
import { RegistrationForm, LoginLink } from 'react-stormpath';
import {shallow, mount} from 'enzyme';


describe('ProfilePage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {


      const tree = shallow(
        <ProfilePage/>);
        /*var givenNameNode=tree.find("givenName").get(0);
        givenNameNode.value = "Hans";
        var submitButton=tree.find("submit_button");

      tree.simulate('change',givenNameNode);
      expect(tree.find("givenName").get(0)).toBe("Hans");*/


      expect(tree).toMatchSnapshot();




    });
    test('test input', () =>{
    //  var view = ReactTestUtils.renderIntoDocument(<ProfilePage/>)
    });
});
