import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from '../pages/MasterPage';
import renderer from 'react-test-renderer';
import { LoginLink } from 'react-stormpath';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import axios from 'axios';
import {shallow} from 'enzyme';


import Sidebar from '../pages/Sidebar';
import Header from '../pages/Header';
import ReactTestUtils from 'react-addons-test-utils' // ES6


/*describe('testing login submitting', () =>{
  const master = React.createElement(MasterPage);
  const wrapper = shallow(master);
  expect(wrapper.find(<DocumentTitle title='eduBot - Feedback for students and lecturers'/>)).toBe(wrapper.find(<div className="MasterPage"/>));
});*/
describe('MasterPage', () => {
  var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm

    test('renders without crashing', () => {
      const shallowRenderer = ReactTestUtils.createRenderer();
      shallowRenderer.render(
        <MasterPage/>);
      const result = shallowRenderer.getRenderOutput();
      expect(result.type).toBe('div');
      expect(result.props.children).toEqual(
        <DocumentTitle title='eduBot - Feedback for students and lecturers'>
          <div className="MasterPage">
            <div className="row">
              <Header />
              <div className='col-xs-2 marginTop50'>
                <Sidebar />
              </div>
              <div className = 'col-xs-10 marginTop50'>

              </div>
            </div>
          </div>
        </DocumentTitle>
      )

    });
});
