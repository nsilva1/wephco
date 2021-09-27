import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

const Partners = () => {
	return (
		<div className='bg-about pt-5 pb-5'>
			<Container>
				<div className='text-center display-4 mb-3'>Our Partners</div>
				{/* Carousel */}
				<Carousel>
					<Carousel.Item interval={1500}>
						<Row>
							<Col>
								<img
									src={require('../images/wh.jpeg').default}
									alt='WellaHealth'
									// className='w-100'
									height={200}
									width='100%'
								/>
							</Col>
							<Col>
								<img
									src={require('../images/gril.jpeg').default}
									alt='Kahala'
									// className='w-100'
									height={200}
									width='100%'
								/>
							</Col>
							<Col>
								<img
									src={require('../images/lds.png').default}
									alt='Gril'
									// className='w-100'
									height={200}
									width='100%'
								/>
							</Col>
							<Col>
								<img
									src={require('../images/kahala.jpeg').default}
									alt='LDS'
									// className='w-100'
									height={200}
									width='100%'
								/>
							</Col>
						</Row>
					</Carousel.Item>
					{/* <Carousel.Item interval={1500} >
                        <Row>
                            <Col>
                            <img src={require('../images/gril.jpeg').default} height={400} width={300} alt='Gril' className='w-100' />
                            </Col>
                            <Col>
                            <img src={require('../images/lds.png').default} height={400} width={300} alt='LDS Church' className='w-100' />
                            </Col>
                        </Row>
                    </Carousel.Item> */}
				</Carousel>
			</Container>
		</div>
	);
};

export default Partners;
