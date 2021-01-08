import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const EventPlanning = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h1 className="display-4 mb-2">Event Planning</h1>
                    </Col>
                    <Col sm={12} md={6}>
                        <Contact message='I am interesrted in your Event Planning services.' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EventPlanning;
