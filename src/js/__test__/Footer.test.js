import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Footer from '../pages/Footer';

describe('Footer', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <Footer/>).toJSON();


      expect(tree).toMatchSnapshot();




    });

});
