import React from 'react';
import ReactDOM from 'react-dom';
import SendFeedbackPage from '../pages/AddingQuestionForm';
import renderer from 'react-test-renderer';

import {shallow} from 'enzyme';

describe('AddingQuestionForm', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <AddingQuestionForm/>).toJSON();


      expect(tree).toMatchSnapshot();




    });
    //TDT4120 - Algoritmer og datastrukturer
  /*  test('Handle subject select form change',()=>{
       var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
       view.state.myCourses = ["TDT4120 - Algoritmer og datastrukturer", "TDT4222 - Sjokolade"]

       const subjectSelector = view.refs.subject_selector;
       const TDT4120= view.refs.noe;

       ReactTestUtils.Simulate.change(TDT4120,view.handleOptionChange.bind(view,'theme'));
       expect(view.state.myCourses).toBe("Lecture");

     });*/




    test('Handle type select form change',()=>{
       var view = ReactTestUtils.renderIntoDocument(<SendFeedbackPage/>)
       const typeText = view.refs.type_text;
       const typeMC = view.refs.type_mc;
       const typeYN = view.refs.type_yn;
       const typeRating = view.refs.type_rating;


       ReactTestUtils.Simulate.change(typeText,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Text");

       ReactTestUtils.Simulate.change(themeCurriculum,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Multiple Choice");

       ReactTestUtils.Simulate.change(themeAssignments,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Yes or No");

       ReactTestUtils.Simulate.change(themeOther,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Rating");
     });


});
