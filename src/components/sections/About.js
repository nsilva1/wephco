import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

const About = () => {
	return (
		<div className='bg-about d-flex'>
			<Container>
				<Row>
					<Col sm={12} md={6}>
						<Card border='light' className='mt-5' style={{ width: '20rem' }}>
							<Card.Body>
								<Container>
									<Card.Title>
										<h3>WELCOME TO WEPH.CO</h3>
									</Card.Title>
									<Card.Text>
										<p className='lead'>
											{' '}
											Over the years, in this fast changing economy, Weph.co Enterprises has evolved
											and transcend beyond all odds in the Exterior & Interior Decoration industry.
											We believe in bringing your dreams into reality.{' '}
										</p>
										<p className='lead'>
											With our creative team of seasoned professional craftsmen, working without
											supervision in thier area of speciality. Using state of the art equipment in
											deploying world-class designs.
										</p>
										<p className='lead'>
											{' '}
											<strong>Wisdom Nwachukwu</strong>{' '}
										</p>
										<p className='lead'>Founder, CEO</p>
									</Card.Text>
								</Container>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6}>
						<div className='mt-5'>
							<img
								src={require('../images/building.jpg').default}
								className='img-fluid'
								width='100%'
								height='auto'
								alt='About Weph.Co'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
