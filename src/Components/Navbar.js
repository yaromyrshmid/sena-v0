import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Image, Container } from 'react-bootstrap';
import logo from '../images/logo.svg'
import './Navbar.css';

export class Navigation extends Component {

  render () {
    const tools = this.props.tools.map((tool, index) => {
      return (
        <NavDropdown.Item href="#" key={tool.id} onClick={() => this.props.click_tool(index)}> 
          {tool.name}
        </NavDropdown.Item>
      )
    });


    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#">
          <Image src={logo} />
          Self-Employed Network Application
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <NavDropdown title="Інструменти" id="collasible-nav-dropdown" >
        {tools}
        </NavDropdown>
        <Nav.Link href="#profile">Профіль</Nav.Link>
        <Nav.Link href="#settings">Налаштування</Nav.Link>
        <Nav.Link href="#logout">Вихід</Nav.Link>
        </Nav>        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}