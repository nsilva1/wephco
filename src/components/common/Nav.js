import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar bg='light' variant='light' sticky='top' expand='lg'>
			<Navbar.Brand>
				<h1 className='display-5'>WEPH.CO</h1>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='simple-navbar-nav' />
			<Navbar.Collapse id='simple-navbar-nav'>
				<Nav className='ml-auto'>
					<Link
						className='mr-5'
						to='/services/interior-design'
						style={{ decoration: 'none', color: 'black' }}
					>
						Interior Design
					</Link>
					<Link
						className='mr-5'
						to='/services/exterior-design'
						style={{ decoration: 'none', color: 'black' }}
					>
						Exterior & Archi. Design
					</Link>
					<Link
						className='ml-5'
						to='/services/real-estate'
						style={{ decoration: 'none', color: 'black' }}
					>
						Real Estate
					</Link>
					<Link
						className='ml-5'
						to='/services/event-planning'
						style={{ decoration: 'none', color: 'black' }}
					>
						Event Planning
					</Link>
					<Link
						className='ml-5'
						to='/services/bureau-de-change'
						style={{ decoration: 'none', color: 'black' }}
					>
						WephcoFX
					</Link>
					<Link
						className='ml-5'
						to='/services/consultants'
						style={{ decoration: 'none', color: 'black' }}
					>
						Consultancy
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
