import React from 'react';
import ReactDOM from 'react-dom';
import AddingQuestionForm from '../pages/AddingQuestionForm';

import * as ShallowTestUtils from 'react-shallow-testutils';
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




    test('Handle question form change',()=>{
      var view = ReactTestUtils.renderIntoDocument(<AddingQuestionForm/>)
      const node = view.refs.input_question;
      node.value = "Testing the question Textarea 123";
      ReactTestUtils.Simulate.change(node);
      expect(view.state.question).toBe(node.value);

      /*const renderers = ReactTestUtils.createRenderer();
       var view = renderers.render(<AddingQuestionForm/>)

       var questionNode = ShallowTestUtils.findWithRef(view, 'input_question');
       questionNode.props.value = "heisann";
       expect(questionNode.props.value).toBe("hei");*/

       /*const typeText = view.refs.type_text;
       const typeMC = view.refs.type_mc;
       const typeYN = view.refs.type_yn;
       const typeRating = view.refs.type_rating;

       typeText.value="Heisann";
       typeMC.value = "Multiple Choice";
       typeYN.value = "Yes";
       typeRating.value = "Rating";


       ReactTestUtils.Simulate.change(typeText,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Text");

       ReactTestUtils.Simulate.change(themeCurriculum,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Multiple Choice");

       ReactTestUtils.Simulate.change(themeAssignments,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Yes or No");

       ReactTestUtils.Simulate.change(themeOther,view.handleOptionChange.bind(view));
       expect(view.state.type).toBe("Rating");*/
     });
     test('handle type form change and submitting',() =>{
       function addQuestion(newQuestion){

       };
       var view = ReactTestUtils.renderIntoDocument(<AddingQuestionForm addQuestion={addQuestion}/>)
       const node = view.refs.subject_selector;
       const submitButton = view.refs.submit_button;

       /*var AddingQuestionFormComponent= React.createClass({
         componentDidMount: function() {
           this.props.addQuestion();
          },
          render: function() { return <div />; }
       });

)*/
       node.value = view.refs.type_text.value;
       ReactTestUtils.Simulate.change(node);
       expect(view.state.type).toBe("Text");
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(true);

       node.value = view.refs.type_mc.value;
       ReactTestUtils.Simulate.change(node);
       expect(view.state.type).toBe("Multiple choice");
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(true);

       const aButton = view.refs.alternative_button;
       const alternative = view.refs.alternatives;
       alternative.value="I am testing";
       ReactTestUtils.Simulate.change(alternative);
       expect(view.state.currentAlternative).toBe("I am testing");
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(true);

       node.value = view.refs.type_yn.value;
       ReactTestUtils.Simulate.change(node);
       expect(view.state.type).toBe("Yes or No");
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(true);

       node.value = view.refs.type_rating.value;
       ReactTestUtils.Simulate.change(node);
       expect(view.state.type).toBe("Rating");
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(true);

       node.value = "Illegal type";
       ReactTestUtils.Simulate.change(node);
       expect(view.state.type).not.toBe("Illegal type");

       const nodeQ = view.refs.input_question;
       nodeQ.value = "Testing question adding";
       ReactTestUtils.Simulate.change(nodeQ);
       node.value = view.refs.type_text.value;
       ReactTestUtils.Simulate.change(node);
       ReactTestUtils.Simulate.submit(node);
       expect(view.state.showWarning).toBe(false);

     });


});
