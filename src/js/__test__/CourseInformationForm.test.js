import React from 'react';
import ReactDOM from 'react-dom';
import CourseInformationForm from '../pages/CourseInformationForm';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';
describe('CourseInformationForm', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm
  const testValues = {
    name: 'Hans',
    description: 'Heisann hoppsan',
    course: 'TDT4145 - Algoritmer',
    handleSubmit: jest.fn(),
    };

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <CourseInformationForm/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
    test('render with one feedback', () => {

      var view = ReactTestUtils.renderIntoDocument(<CourseInformationForm {...testValues}/>)

      const node = view.refs.subject_selector;
      node.value = "TDT4120 - Algoritmer og datastrukturer";

      ReactTestUtils.Simulate.change(node);
      ReactTestUtils.Simulate.submit(node);
      expect(view.state.showMessage).toBe(true);


      const name = view.refs.name;
      name.value = "Hans";
      ReactTestUtils.Simulate.change(name);
      expect(view.state.name).toBe("Hans");
      ReactTestUtils.Simulate.submit(name);
      expect(view.state.showMessage).toBe(true);

      const description = view.refs.description;
      description.value = "This is a test";
      ReactTestUtils.Simulate.change(description);
      expect(view.state.description).toBe("This is a test");
      ReactTestUtils.Simulate.submit(description);
      expect(view.state.showMessage).toBe(true);





      /*var result = view.addition(2,3);
      console.log(view.state.pFeedback)*/

    });


});
