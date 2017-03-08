import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return (
        <ul className="sidebar-nav">
        	<li className="sidebar-brand">
                <a href="#">
                    Start Bootstrap
                </a>
            </li>
            <li>
                <a href="#">Joachim</a>
            </li>
            <li>
                <a href="#">Hans</a>
            </li>
            
            <li>
                <a href="#">Lars</a>
            </li>

        </ul>
    );
  }
}