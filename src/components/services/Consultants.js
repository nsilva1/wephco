import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const Consultants = () => {

	const [service, setService] = useState('Interior')

	const selectChange = () => (event) => {
		setService(event.target.value)
	}

	return (
		<div className=''>
				<div>
					<img src={require('../images/consultant-big.jpg').default} className='consultant-hero-image' alt="Consultants"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Consultant</h1>
					</div>
				</div>
			<div className="mt-5">
				<Container>
					<Row>
						<Col>
						<label htmlFor='service'>Pick a Service</label>
				<select id='service' className='form-control' onChange={selectChange}>
					<option value="Interior Design">Interior</option>
					<option value="Exterior Design">Exterior</option>
					<option value="Real Estate">Real Estate</option>
					<option value="Event Planning">Event Planning</option>
					<option value="WephCoFX">WephCoFX</option>
				</select>
						</Col>
						<Col>
						<Contact message='I am interesrted in your Consultant services.' />
						</Col>
					</Row>
				</Container>
				
			</div>
		</div>
	);
};

export default Consultants;
