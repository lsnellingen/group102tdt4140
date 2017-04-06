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
   test('Handle selectedOption form change',()=>{
      var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
      const node1 = view.refs.radio1;
      const node2 = view.refs.radio2;
      const node3 = view.refs.radio3;
      const node4 = view.refs.radio4;
      const node5 = view.refs.radio5;

      ReactTestUtils.Simulate.change(node1,view.handleOptionChange.bind(view,'selectedOption'));
      expect(view.state.selectedOption).toBe("1");

      ReactTestUtils.Simulate.change(node2,view.handleOptionChange.bind(view,'selectedOption'));
      expect(view.state.selectedOption).toBe("2");
      expect(view.state.selectedOption).not.toBe("1");

      ReactTestUtils.Simulate.change(node3,view.handleOptionChange.bind(view,'selectedOption'));
      expect(view.state.selectedOption).not.toBe("2");

      ReactTestUtils.Simulate.change(node4,view.handleOptionChange.bind(view,'selectedOption'));
      expect(view.state.selectedOption).toBe("4");

      ReactTestUtils.Simulate.change(node5,view.handleOptionChange.bind(view,'selectedOption'));
      expect(view.state.selectedOption).toBe("5");

    });

    test('Handle theme select form change',()=>{
       var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
       const themeCurriculum = view.refs.theme_curriculum;
       const themeLecture = view.refs.theme_lecture;
       const themeAssignments = view.refs.theme_assignments;
       const themeOther = view.refs.theme_other;


       ReactTestUtils.Simulate.change(themeLecture,view.handleOptionChange.bind(view,'theme'));
       expect(view.state.theme).toBe("Lecture");

       ReactTestUtils.Simulate.change(themeCurriculum,view.handleOptionChange.bind(view,'theme'));
       expect(view.state.theme).toBe("Curriculum");

       ReactTestUtils.Simulate.change(themeAssignments,view.handleOptionChange.bind(view,'theme'));
       expect(view.state.theme).toBe("Assignments");

       ReactTestUtils.Simulate.change(themeOther,view.handleOptionChange.bind(view,'theme'));
       expect(view.state.theme).toBe("Other");
     });

    test('getting courses',() => {
      var user = {email: "joachiee@stud.ntnu.no"}
      const context = {user};
      const wrapper = shallow(<SendFeedbackPage/>, {context});
      wrapper.setContext(context);
      wrapper.instance().componentDidMount();
      console.log(wrapper.instance().state.date);
    });
});
