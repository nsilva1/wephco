import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {
    

    return (
        
            <Navbar bg='light' variant='light' sticky='top' justify-content-between >
            
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" >
            <Nav className='ml-auto' >
                <Link className='mr-5' to='/' style={{decoration:'none', color:'black'}} >
                    Home
                </Link>
                <Link className='mr-5' to='/about' style={{decoration:'none', color:'black'}} >
                    About
                </Link>
                
            </Nav>
            <Navbar.Brand>
                <h1 className='lead' >WEPH.CO</h1>
            </Navbar.Brand>
            <Nav className='mr-auto' >
            <Link className='ml-5' to='/services' style={{decoration:'none', color:'black'}} >
                    Services
                </Link>
                <Link className='ml-5' to='/contact' style={{decoration:'none', color:'black'}} >
                    Contact
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default Navigation;