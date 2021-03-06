import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Footer = () => {
	const [phone] = useState('447440685293');
	const [message] = useState('Hello,%20I%20want%20to%20enquire%20about%20your%20services');
	const url = `https://wa.me/${phone}/?text=${message}`;

	var lat = 9.074465094149614
	var lng = 7.47555219979353
	
	const openMap = () => {
		window.open("https://maps.google.com?q="+lat+","+lng )
	}

	// const [email, setEmail] = useState('');
	// const BASE_URL = 'https://wephco-api.herokuapp.com';

	// const onEmailChange = (event) => {
	// 	setEmail(event.target.value);
	// };

	// const submit = async () => {
	// 	if (email === '') {
	// 		alert('Email field is empty');
	// 		return;
	// 	}
	// 	const payload = {
	// 		email: email,
	// 		message: 'I would like to know more about your services',
	// 	};

	// 	const response = await axios.post(`${BASE_URL}/mail/send-mail`, payload);
	// 		alert('Thank you for reaching out to us. We will get back to you shortly.');
	// };

	return (
		<div className=' pt-5 '>
			<Container>
				<Row>
					<Col sm={12} md={4}>
						<h3 className='mb-3' style={{ color: 'black' }}>About Us</h3>
						<p className='lead'>
							Weph.co is dedicated to delivering effective, efficient, respectful public service.
							with integrity and accountability using both proven and innovative methodology.
							Weph.co is poised to make the world a place of choice to live, work, play and grow in
							style and perfection always.
						</p>
					</Col>
					<Col sm={12} md={4}>
						<h3 className='mb-3' style={{ color: 'black' }}>Services</h3>
						<ul style={{ listStyleType: 'none' }}>
							<li className='mb-3'>
								<Link
									style={{ textDecoration: 'none', color: 'black' }}
									to='/services/interior-design'
								>
									Interior Design
								</Link>
							</li>
							<li className='mb-3'>
								<Link
									style={{ textDecoration: 'none', color: 'black' }}
									to='/services/exterior-design'
								>
									Exterior Design
								</Link>
							</li>
							<li className='mb-3'>
								<Link style={{ textDecoration: 'none', color: 'black' }} to='/services/real-estate'>
									Real Estate
								</Link>
							</li>
							<li className='mb-3'>
								<Link
									style={{ textDecoration: 'none', color: 'black' }}
									to='/services/event-planning'
								>
									Event Planning
								</Link>
							</li>
							<li className='mb-3'>
								<Link
									style={{ textDecoration: 'none', color: 'black' }}
									to='/services/bureau-de-change'
								>
									WephcoFX
								</Link>
							</li>
							<li className='mb-3'>
								<Link style={{ textDecoration: 'none', color: 'black' }} to='/services/consultants'>
									Consultancy
								</Link>
							</li>
						</ul>
					</Col>
					<Col sm={12} md={4}>
						<h3 className='mb-3' style={{ color: 'black' }}>Get In Touch</h3>
						
						<Link to='/contact' className="btn btn-black f-right">Contact Us</Link>
						
						{/* Address */}
						<div className='mt-3'>
							<Row>
								<Col sm={3}>
									{' '}
									<i onClick={openMap} className='bi bi-geo-alt' style={{fontSize:'2rem'}} ></i>{' '}
								</Col>
								<Col sm={9}>
									<p>No B10, Valley Mall Plaza, Wuse 2, Abuja</p>
								</Col>
							</Row>
						</div>
						{/* Email */}
						<div className='mt-3'>
							<Row>
								<Col sm={3}>
									{' '}
									<i class='bi bi-envelope-fill' style={{fontSize:'2rem'}}></i>{' '}
								</Col>
								<Col sm={9}>
									{' '}
									<p>info@wephco.com</p>{' '}
								</Col>
							</Row>
						</div>
						{/* Phone */}
						<div className='mt-3'>
							<Row>
								<Col sm={3}>
									{' '}
									<i class='bi bi-telephone' style={{fontSize:'2rem'}}></i>{' '}
								</Col>
								<Col sm={9}> +234 905 374 3584 </Col>
							</Row>
						</div>
						<div className='mt-5 mb-5'>
							{/* Social Media */}
							<h3 className='text-center'>Follow Us</h3>
							<Row>
								<Col>
									<a href={url}>
										<i class='bi bi-whatsapp' style={{ color: '#128C7E', fontSize:'2rem' }}></i>
									</a>
								</Col>
								<Col>
									<a href='https://www.facebook.com/weph.co/'>
										<i class='bi bi-facebook' style={{ color: '#4267B2', fontSize:'2rem' }}></i>
									</a>
								</Col>
								<Col>
									<a href='https://www.instagram.com/offcialweph.co/'>
										<i class='bi bi-instagram' style={{ color: '#8a3ab9', fontSize:'2rem' }}></i>
									</a>
								</Col>
								<Col>
									<a href='https://twitter.com/wephco'>
										<i class='bi bi-twitter' style={{ color: '#00acee', fontSize:'2rem' }}></i>
									</a>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				<div className='mt-5 pb-5 text-center'>
					Designed by <a href='https://www.tomanetech.com.ng' style={{color:'black'}} >Tomane Technology Limited</a>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
