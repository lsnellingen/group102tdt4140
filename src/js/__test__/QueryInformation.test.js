import React from 'react';
import ReactDOM from 'react-dom';
import QueryInformation from '../pages/QueryInformation';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';
import router from 'react-router';

describe('QueryInformation', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      const props = {name:"hans"};
      var tree= shallow(<QueryInformation  query={{name:"Hanse", description: "This is a test", course: "TDT4120 - Algoritmer og datastrukturer"}} numberOfQuestions={4}/>);

    /*  const tree = renderer.create(
        <LoginPage/>).toJSON();*/


      expect(tree).toMatchSnapshot();




    });
    test('render without name', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      const props = {name:"hans"};
      var tree= shallow(<QueryInformation  query={{name:"", description: "This is a test", course: "TDT4120 - Algoritmer og datastrukturer"}} numberOfQuestions={4}/>);

    /*  const tree = renderer.create(
        <LoginPage/>).toJSON();*/


      expect(tree).toMatchSnapshot();




    });
    test('renders without description', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      const props = {name:"hans"};
      var tree= shallow(<QueryInformation  query={{name:"Hanse", description: "", course: "TDT4120 - Algoritmer og datastrukturer"}} numberOfQuestions={4}/>);

    /*  const tree = renderer.create(
        <LoginPage/>).toJSON();*/


      expect(tree).toMatchSnapshot();




    });
    test('renders without course', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      const props = {name:"hans"};
      var tree= shallow(<QueryInformation  query={{name:"Hanse", description: "This is a test", course: ""}} numberOfQuestions={4}/>);

    /*  const tree = renderer.create(
        <LoginPage/>).toJSON();*/


      expect(tree).toMatchSnapshot();




    });
});
