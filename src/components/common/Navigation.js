import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Navigation = () => {

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt='WephCo Logo'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='me-auto'>
            
          </Nav>
          <Link className='btn btn-primary' to='/login'>Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
