import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='pt-5 pb-5 bg-about' >
            <Container fluid>
            <h1 className='display-5' >Our Services</h1>
                <Row className='' >
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                        <Link to='/services/interior-design' >
                        <Card bg='dark' text='white' className='text-center' style={{width:'20rem'}} >
                            <Card.Img src={require('../images/interior-design.jpg').default} alt='Interior Design' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Interior Design</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        </Link>
                    </Col>
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                        <Link to='/services/exterior-design' >
                        <Card bg='dark' className='text-center' style={{width:'20rem'}} >
                            <Card.Img className='service-img' src={require('../images/exterior-design.jpg').default} alt='Exterior Design' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Exterior & Architectural Design</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        </Link>
                    </Col>
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                    <Link to='/services/real-estate' >
                    <Card bg='dark' text='white' className='text-center' style={{width:'20rem'}}>
                        <Card.Img src={require('../images/real-estate.jpg').default} alt='Real Estate' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Real Estate</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                    </Col>
                </Row>
                {/* End of First Row */}
                {/* Beginning of Second Row */}
                <Row className='mt-3' >
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                        <Link to='/services/event-planning' >
                        <Card bg='dark' text='white' className='text-center mb-5' style={{width:'20rem'}}>
                            <Card.Img src={require('../images/event-planning.jpg').default} alt='Event Planning' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Event Planning and Management</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        </Link>
                    </Col>
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                    <Link to='/services/bureau-de-change' >
                    <Card bg='dark' text='white' className='text-center mb-5' style={{width:'20rem'}}>
                        <Card.Img src={require('../images/bureau-de-change.jpg').default} alt='Bureau de Change' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Bureau de Change</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                    </Col>
                    <Col sm={12} md={4} className='text-white mt-5 mb-5'>
                    <Link to='/services/consultants' >
                    <Card bg='dark' text='white' className='text-center mb-5' style={{width:'20rem'}}>
                        <Card.Img src={require('../images/consultant.jpg').default} alt='Consultancy' />
                            <Card.ImgOverlay>
                                <Card.Text>
                                <h4>Consultancy</h4>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                    </Col>
                </Row>
                {/* End of Second Row */}
                {/* <div className="more-services">
                    <Link to='/services'>
                        <Button variant='outline-danger' >
                        View more
                        </Button>
                    </Link>
                </div> */}
            </Container>
        </div>
    )
}

export default Services;
