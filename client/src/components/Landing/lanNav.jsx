import React from 'react';
import './index.scss';
import logo from '../logo.png';
import { Navbar, Nav, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function lanNav () {
  return (
    <Navbar expand="md">
      <NavbarBrand href="/"><img src={logo} style={{width:180, marginTop: -7}} /></NavbarBrand>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Menu
          </DropdownToggle>
          <DropdownMenu className="dd-toggle">
            <DropdownItem className="dd-list" tag="a" href="/Login" active>Login</DropdownItem>
            <DropdownItem className="dd-list" tag="a" href="/SignUp" active>SignUp</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
}