import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const ExteriorDesign = () => {
	return (
		<div>
			<div>
					<img src={require('../images/exterior-big.jpg').default} className='consultant-hero-image' alt="Exterior Design"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Exterior Design</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<Row>
				<Col md={6}>
						<img src={require('../images/outdoor-details.jpg').default} width='100%' alt='Outdoor' />
					</Col>
					<Col sm={12} md={6}>
						<h1 className='display-4 mb-2'> Exterior Design </h1>
						<p className='lead mt-2'>Our Exterior Design services include:</p>
						<ul>
							<li>Custom Home Architectural Specifications</li>
							<li>Selection of Surface Materials & Finishes</li>
							<li>Furnishing Layout Plans, CAD Drawings</li>
							<li>Custom & Unique Window Treatments</li>
							<li>Selection of Fine Art & Accessories</li>
							<li>Custom Framing for Fine Art</li>
						</ul>
						<p className='lead mt-2'>Get in touch with us for more details.</p>
						<Link to='/contact' className='btn header-btn'>
							Contact Us
						</Link>
					</Col>
					
				</Row>
			</Container>
		</div>
		</div>
	);
};

export default ExteriorDesign;
