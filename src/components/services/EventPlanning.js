import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const EventPlanning = () => {
	return (
		<div>
			<div>
					<img src={require('../images/event-planning-big.jpg').default} className='consultant-hero-image' alt="Event Management"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Event Planning</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<Row>
				<Col md={6}>
						<img src={require('../images/event.jpg').default} width='100%' alt='Event'/>
					</Col>
					<Col sm={12} md={6}>
						<h1 className='display-4 mb-2'>Event Planning</h1>
						<p className="lead">
							Whether your event is for 50,000 or 10 people, we will give you a day to remember.
						</p>
						<p className="lead">
							Our Services Include:
						</p>
						<ul>
							<li>Weddings</li>
							<li>Birthdays</li>
							<li>Seminars</li>
							<li>Dinner Parties</li>
							<li>Romantic Evenings</li>
							<li>Social Events</li>
							<li>Private & Corporate Events</li>
							<li>Brand Exposure</li>
						</ul>
						<p className="lead">
							Get in touch with us.
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

export default EventPlanning;
