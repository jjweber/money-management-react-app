import React, { Component } from 'react';
//import styles from './header.css';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>



        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="logo">
                Money Management App
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Expenses">Expenses</Link></li>
                <li><Link to="/Cash Flow">Cash Flow</Link></li>
              </ul>
            </div>
          </div>
        </nav>



      </header>
    );
  }
}

export default Header;
