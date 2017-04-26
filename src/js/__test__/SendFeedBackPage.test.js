import React from 'react';
import ReactDOM from 'react-dom';
import SendFeedbackPage from '../pages/SendFeedbackPage';
import renderer from 'react-test-renderer';
import axios from 'axios';

import {shallow, mount} from 'enzyme';

describe('SendFeedbackPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/
      const context = {user:{email: 'hans@ntnu.no'}};
      const tree = shallow(
        <SendFeedbackPage/>,{context});

      expect(tree).toMatchSnapshot();




    });
    //TDT4120 - Algoritmer og datastrukturer
    /*test('Handle subject select form change',()=>{
       var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
       view.state.myCourses = ["TDT4120 - Algoritmer og datastrukturer", "TDT4222 - Sjokolade"]
       console.log(view.state.myCourses);
       const subjectSelector = view.refs.subject_selector;
       const TDT4120= "TDT4120 - Algoritmer og datastrukturer";

       ReactTestUtils.Simulate.change(TDT4120,view.handleOptionChange.bind(view,'subject'));
       expect(view.state.myCourses).toBe("Lecture");

     });
     /*test('handle subject select form change',()=>{
       const context = {user:{email: "hans@ntnu.no"}};

       const wrapper = shallow(<SendFeedbackPage/>, {context});
       expect(wrapper.state.myCourses).toBe('hans@ntnu.no');

     });*/

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

      console.log(wrapper.instance().state.myCourses);
    });
    test('submitting, (If error is email undefined then the test onsubmit succesfully goes to sending the form)',() =>{
      const fakeContext = { user: { email: "hans@ntnu.no" } };
      const contextTypes = { user: React.PropTypes.object };
      const sendFeedbackComponent = wrapWithContext(fakeContext, contextTypes, <SendFeedbackPage/>);

      var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>);
      
      //view.state.myCourses = ["TDT4120 - Algoritmer og datastrukturer", "TDT4222 - Sjokolade"]
      const submitButton = view.refs.submit_button;
      const themeLecture = view.refs.theme_lecture;
      const node1 = view.refs.radio1;
      const node = view.refs.pFeedback;
      const nodeN = view.refs.nFeedback;


      ReactTestUtils.Simulate.click(submitButton);
      expect(view.state.showUnsuccsessfull).toBe(true);

      ReactTestUtils.Simulate.change(themeLecture,view.handleOptionChange.bind(view,'theme'));

      ReactTestUtils.Simulate.click(submitButton);
      expect(view.state.showUnsuccsessfull).toBe(true);

      ReactTestUtils.Simulate.change(node1,view.handleOptionChange.bind(view,'selectedOption'));
      ReactTestUtils.Simulate.click(submitButton);
      expect(view.state.showUnsuccsessfull).toBe(true);


      node.value = "Testing the pFeedback Textarea 123";
      ReactTestUtils.Simulate.change(node);
      ReactTestUtils.Simulate.click(submitButton);
      expect(view.state.showUnsuccsessfull).toBe(true);


      node.value = "Testing the nFeedback Textarea 123";
      ReactTestUtils.Simulate.change(nodeN);
      ReactTestUtils.Simulate.click(submitButton);
      expect(view.state.showUnsuccsessfull).toBe(true);

      view.state.subject = "TDT4120 - Algoritmer og datastrukturer";
      ReactTestUtils.Simulate.click(submitButton);

      expect(view.state.showUnsuccsessfull).toBe(true);

    });
});
function wrapWithContext(context, contextTypes, children) {
    const wrapperWithContext = React.createClass({
        childContextTypes: contextTypes,
        getChildContext() {
            return context;
        },
        render() {
            return children;
        },
    });
    return React.createElement(wrapperWithContext);
}
