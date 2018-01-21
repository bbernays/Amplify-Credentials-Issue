import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { NavItem,Nav, Navbar,NavDropdown,MenuItem } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";
import {Auth} from 'aws-amplify'


class App extends Component {
  constructor(props) {
    super(props);
    this.updateHighlight = this.updateHighlight.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    let highlight = window.location.pathname.split('/')[1].toLowerCase()
    this.state = {
      currentKey:highlight
    };
  }
  handleLogout(){
    Auth.signOut().then(data => console.log(data)).catch(err => console.log(err))
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  updateHighlight(key) {
    this.setState({ currentKey: key });
  }

  render() {
    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: this.userHasAuthenticated
    };
    if (this.props.authState !== 'signedIn') { return null; }

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link onClick={e => {this.updateHighlight(4)}} to="/home">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey={this.state.currentKey} pullRight>
              <NavItem key={1} onClick={this.handleLogout}>Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>)
    }
}

export default withRouter(App);
