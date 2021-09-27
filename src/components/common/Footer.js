import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='bg-light'>
      <Container>
        <Row>
          <Col>
            <div className="mt-5">
              <img src={logo} alt='Logo' />
            </div>
            <div className="mt-2">
              <p className="lead">
                We are responsible, accountable, respectful, effective, efficient. We encourage innovation to meet challenges. We foster an environment of collaboration.
              </p>
            </div>
          </Col>
          <Col>
            <h4 className="mt-5">
              Services
            </h4>
            <ul>
              <li className='mt-5'>Real Estate</li>
              <li className='mt-5'>Logistics</li>
              <li className='mt-5'>WephCoFx</li>
            </ul>
          </Col>
          <Col>
            <h4 className="mt-5">
              Follow Us
            </h4>
            <Row>
              <Col>
              <a href="https://www.facebook.com/weph.co/">
              <i className='bi bi-facebook' />
              </a>
              </Col>
              <Col>
              <a href="https://www.instagram.com/wephco/">
              <i className='bi bi-instagram' />
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
