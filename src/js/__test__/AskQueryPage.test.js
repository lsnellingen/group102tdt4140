import React from 'react';
import ReactDOM from 'react-dom';
import AskQueryPage from '../pages/AskQueryPage';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import SingleQuestion from '../pages/SingleQuestion';
import CourseInformationForm from '../pages/CourseInformationForm';
import AddingQuestionForm from '../pages/AddingQuestionForm';
import QueryInformation from '../pages/QueryInformation';

describe('AskQueryPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      /*const renderer = ReactTestUtils.createRenderer();*/

      const tree = renderer.create(
        <AskQueryPage/>).toJSON();


      expect(tree).toMatchSnapshot();




    });

});
