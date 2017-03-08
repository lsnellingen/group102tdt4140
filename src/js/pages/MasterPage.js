import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import Sidebar from './Sidebar';
import Header from './Header';
import { LoginLink } from 'react-stormpath';

export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className="MasterPage">
          <div className="row">
            <div className='col-xs-12'>
            <Header /> </div>
            <div className= 'col-xs-2'> 
              <Sidebar />
            </div>

            <div className = 'col-xs-10'>
              { this.props.children }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}