// Libs
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink } from 'react-stormpath';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


export default class MasterPage extends React.Component {

  render() {
    return (
      <DocumentTitle title='eduBot - Feedback for students and lecturers'>
        <div className="MasterPage">
          <div className="row">
            <Header />
            <div className='col-sm-2 col-xs-12 marginTop50'>
              <Sidebar />
            </div>
            <div className = 'col-sm-10 col-xs-12 marginTop50'>
              { this.props.children }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
