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
            <div className='col-xs-2 marginTop50'>
              <Sidebar />
            </div>
            <div className = 'col-xs-10 marginTop50'>
              { this.props.children }
            </div>
            <Footer />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
