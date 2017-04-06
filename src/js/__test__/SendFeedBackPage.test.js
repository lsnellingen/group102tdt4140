import React from 'react';
import ReactDOM from 'react-dom';
import SendFeedbackPage from '../pages/SendFeedbackPage';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';

describe('SendFeedbackPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <SendFeedbackPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });

    test('Handle pFeedback form change',()=>{
      var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
      const node = view.refs.pFeedback;
      node.value = "Testing the pFeedback Textarea 123";
      ReactTestUtils.Simulate.change(node);
      /*var result = view.addition(2,3);
      console.log(view.state.pFeedback)*/
      expect(view.state.pFeedback).toBe(node.value);

    });
    test('Handle nFeedback form change',()=>{
      var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
      const node = view.refs.nFeedback;
      node.value = "Testing the nFeedback Textarea 123";
      ReactTestUtils.Simulate.change(node);
      /*var result = view.addition(2,3);
      console.log(view.state.pFeedback)*/
      expect(view.state.nFeedback).toBe(node.value);
    });
  /*  test('Handle selectedOption form change',()=>{
      var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
      const node = view.refs.radio1;

      ReactTestUtils.Simulate.change(view.handleOptionChange(1,'selectedOption'));
      //var result = view.addition(2,3);
      console.log(view.state.selectedOption)
      /*expect(view.state.nFeedback).toBe(node.value);
    });*/

    test('getting courses',() => {
      var user = {email: "joachiee@stud.ntnu.no"}
      const context = {user};
      const wrapper = shallow(<SendFeedbackPage/>, {context});
      wrapper.setContext(context);
      wrapper.instance().componentDidMount();
      console.log(wrapper.instance().state.date);
    });
});
