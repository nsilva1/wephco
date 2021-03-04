import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const InteriorDesign = () => {
	return (
		<div>
			<div>
					<img src={require('../images/interior-big.jpg').default} className='consultant-hero-image' alt="Interior Design"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Customised Interior Decor</h1>
					</div>
				</div>
				<div className="mt-5">
				<Container>
						<Row>
							<Col>
								<img src={require('../images/indoor-details.jpg').default} alt='Interior'/>
							</Col>
							<Col>
							<h1 className='display-4 mb-2'> Interior Decor </h1>
						<p className='lead mt-2'>Our Interior Design services include:</p>
						<ul>
							<li>Conceptual Designs</li>
							<li>Specifications for New Construction(Kitchen and Bath Remodels)</li>
							<li>Custom Cabinetry Specifications</li>
							<li>Custom and Fine Furniture</li>
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

export default InteriorDesign;


<div class="">...</div>