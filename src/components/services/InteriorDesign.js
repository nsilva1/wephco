import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../common/Contact';

const InteriorDesign = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4 mb-2"> Interior Design </h1>
                        <p className="lead mt-2">
                            Our Interior Design services include:
                        </p>
                        <ul>
                            <li>
                                Conceptual Designs
                            </li>
                            <li>
                                Specifications for New Construction(Kitchen and Bath Remodels)
                            </li>
                            <li>
                                Custom Cabinetry Specifications
                            </li>
                            <li>
                                Custom and Fine Furniture
                            </li>
                        </ul>
                        <p className="lead mt-2">
                            Get in touch with us for more details.
                        </p>
                    </Col>
                    <Col>
                        <Contact message='I am interested in your Interior Design Services' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InteriorDesign;
