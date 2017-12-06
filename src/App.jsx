import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/">Bloging-MS</NavLink>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}><NavLink className="nav navbar-nav" to="blogs">Blogs</NavLink></NavItem>
                <NavItem eventKey={2}><NavLink className="nav navbar-nav" to="help">Help</NavLink></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default App;
