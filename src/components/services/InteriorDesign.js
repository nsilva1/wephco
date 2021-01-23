import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const InteriorDesign = () => {
	return (
		<div>
			<div>
					<img src={require('../images/interior-big.jpg').default} className='consultant-hero-image' alt="Interior Design"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Interior Design</h1>
					</div>
				</div>
				<div className="mt-5">
				<Container>
				<Row>
					<Col sm={12} md={6}>
						<h1 className='display-4 mb-2'> Interior Design </h1>
						<p className='lead mt-2'>Our Interior Design services include:</p>
						<ul>
							<li>Conceptual Designs</li>
							<li>Specifications for New Construction(Kitchen and Bath Remodels)</li>
							<li>Custom Cabinetry Specifications</li>
							<li>Custom and Fine Furniture</li>
						</ul>
						<p className='lead mt-2'>Get in touch with us for more details.</p>
					</Col>
					<Col sm={12} md={6}>
						<Contact message='I am interested in your Interior Design Services' />
					</Col>
				</Row>
			</Container>
				</div>
			
		</div>
	);
};

export default InteriorDesign;
