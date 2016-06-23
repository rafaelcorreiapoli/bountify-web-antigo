import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = (props) => {
  return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={'/restaurantes'}>
            <NavItem eventKey={1} href="#">Restaurantes</NavItem>
          </LinkContainer>
          <LinkContainer to={'/usuarios'}>
            <NavItem eventKey={2} href="#">Usuários</NavItem>
          </LinkContainer>
          <LinkContainer to={'/vouchers'}>
            <NavItem eventKey={2} href="#">Vouchers</NavItem>
          </LinkContainer>
          <LinkContainer to={'/promocoes'}>
            <NavItem eventKey={2} href="#">Promoções</NavItem>
          </LinkContainer>
          <LinkContainer to={'/questionarios'}>
            <NavItem eventKey={2} href="#">Questionários</NavItem>
          </LinkContainer>
          <LinkContainer to={'/cupons'}>
            <NavItem eventKey={2} href="#">Cupons</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
  )
}

export default NavBar
