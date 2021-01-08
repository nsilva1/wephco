import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const ExteriorDesign = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4 mb-2"> Exterior Design </h1>
                        <p className="lead mt-2">
                            Our Exterior Design services include:
                        </p>
                        <ul>
                            <li>Custom Home Architectural Specifications</li>
                            <li>Selection of Surface Materials & Finishes</li>
                            <li>Furnishing Layout Plans, CAD Drawings</li>
                            <li>Custom & Unique Window Treatments</li>
                            <li>Selection of Fine Art & Accessories</li>
                            <li>Custom Framing for Fine Art</li>
                        </ul>
                        <p className="lead mt-2">
                            Get in touch with us for more details.
                        </p>
                    </Col>
                    <Col>
                        <Contact message='I am interested in your Exterior Design Services' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExteriorDesign;
