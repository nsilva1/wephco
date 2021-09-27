import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import mission from '../../../assets/images/mission.svg';

const About = () => {
  return (
    <div>
    <Container>
     <Row>
        <Col md={8}>
          <h5 className="text-danger display-5">
            ABOUT WEPHCO
          </h5>
          <h4 className="lead wephco-blue">
            <strong>A LARGE EFFICIENT INTERIOR DESIGN COMPANY</strong>
          </h4>
          <p className="lead">
          Over the years, in this fast changing economy, Weph.co has evolved and transcend beyond all odds in the Exterior & Interior Decoration industry. We believe in bringing your dreams into reality.
          </p>
        </Col>
        <Col md={4}>
        <div className="text-center">
          <img src={mission} alt='Mission Statement' />
        </div> 
        </Col>
      </Row>
      <Row>
        <Col className='justify-content-center'>
          {/* <h5 className="text-danger text-center display-6">
            WHO WE ARE
          </h5> */}
          <p className="text-center lead">
          Weph.co is poised to make the world a place of choice to live, work, play and grow in style and perfection always.
          </p>
        </Col>
      </Row>
    </Container>
    {/* <div className="we-do bg-wephco-blue">
        <h5 className="text-center mt-5 text-white display-5">
          WHAT WE DO
        </h5>
        <div className="mt-5">
          <Row>
            <Col>Interior & Exterior Design</Col>
            <Col>Real Estate</Col>
            <Col>WephcoFx</Col>
            <Col>Logistics</Col>
          </Row>
        </div>
    </div> */}
    </div>
  )
}

export default About;
