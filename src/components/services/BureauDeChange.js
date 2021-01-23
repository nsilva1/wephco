import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const BureauDeChange = () => {
	return (
		<div>
			<div>
					<img src={require('../images/wephcofx-big.jpg').default} className='consultant-hero-image' alt="WephCoFX"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>WephCoFX</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<Row>
					<Col sm={12} md={6}>
						<h1 className='display-4 mb-2'>Weph.Co FX</h1>
						<p className="lead">
							We offer great rates for all currencies. Exchange your money faster and cheaper than any other platform.
						</p>
						<p className="lead">
							Get in touch with us
						</p>
					</Col>
					<Col sm={12} md={6}>
						<Contact message='I am interesrted in your Bureau de Change services.' />
					</Col>
				</Row>
			</Container>
		</div>
		</div>
	);
};

export default BureauDeChange;
