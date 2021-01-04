import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { House, ShieldFill, Bricks, Cpu } from 'react-bootstrap-icons';

const Tenets = () => {
    return (
        <div className='bg-danger' >
            <Container>
                <Row className='' >
                    <Col className='text-white mt-5 mb-5'>
                        <House size={50} />
                        <h3>Vast Experience</h3>
                    </Col>
                    <Col className='text-white mt-5 mb-5'>
                        <ShieldFill size={50} />
                        <h3>Professional Team</h3>
                    </Col>
                    <Col className='text-white mt-5 mb-5'>
                        <Bricks size={50} />
                        <h3>Sustainable & Accountable</h3>
                    </Col>
                    <Col className='text-white mt-5 mb-5'>
                        <Cpu size={50} />
                        <h3>High Finish</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenets
