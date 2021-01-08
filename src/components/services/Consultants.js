import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const Consultants = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4 mb-2">Consultancy</h1>
                        <p className="lead">
                            
                        </p>
                    </Col>
                    <Col>
                        <Contact message='I am interesrted in your Consultant services.' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Consultants;
