import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const RealEstate = () => {
	return (
		<div>
			<div>
					<img src={require('../images/real-estate-big.jpg').default} className='consultant-hero-image' alt="Real Estate"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Real Estate</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<Row>
				<Col md={6}>
						<img src={require('../images/estate.jpg').default} width='100%' alt='Real Estate'/>
					</Col>
					<Col sm={12} md={6}>
						<h1 className='display-4 mb-2'>Real Estate</h1>
						<p className='lead'>
							Owning a home is a keystone of wealth... both financial affluence and emotional
							security
						</p>
						<p className='lead'>
							Real estate cannot be loast or stolen, nor can it be carried away. Purchased with
							common sense, paid for in full, and managed with reasonable care, it is the safest
							investment in the world.
						</p>
						<p className='lead'>
							Let us help you achieve that stability and security. Get in touch with us for more
							details
						</p>
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

export default RealEstate;
