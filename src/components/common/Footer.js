import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='bg-wephco-blue'>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="mt-5">
              <img src={logo} alt='Logo' />
            </div>
            <div className="mt-2">
              <p className="lead">
                We are responsible, accountable, respectful, effective, efficient. We encourage innovation to meet challenges. We foster an environment of collaboration.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-5">
              Services
            </h4>
            <h5 className='mt-3'>Real Estate</h5>
            <h5 className='mt-3'>Logistics</h5>
            <a target='_blank' rel='noreferrer' style={{textDecoration:'none', color:'white'}} href="https://fx.wephco.com">
            <h5 className='mt-3'>WehpCoFx</h5>
            </a>
            
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-5">
              Follow Us
            </h4>
            <Row>
              <Col>
              <a href="https://www.facebook.com/weph.co/">
              <i className='bi bi-facebook text-white' />
              </a>
              </Col>
              <Col>
              <a href="https://www.instagram.com/wephco/">
              <i className='bi bi-instagram text-white' />
              </a>
              </Col>
              <Col>
              {/* <i className='bi bi-youtube' /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
