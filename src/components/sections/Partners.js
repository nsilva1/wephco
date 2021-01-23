import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

const Partners = () => {
	return (
		<div className='bg-about pt-5'>
			<Container>
				<div className='text-center display-4 mb-3'>Our Partners</div>
				{/* Carousel */}
				<Carousel>
					<Carousel.Item interval={1500}>
						<Row>
							<Col sm={12} md={6}>
								<img
									src={require('../images/wh.jpeg').default}
									alt='WellaHealth'
									className='w-100'
								/>
							</Col>
							<Col sm={12} md={6}>
								<img
									src={require('../images/kahala.jpeg').default}
									alt='Kalaha'
									className='w-100'
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
