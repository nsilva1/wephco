import React from 'react'
import { Row, Col, Container, Card} from 'react-bootstrap'
import interior3 from '../../../assets/images/interior3.jpeg'
import realestate from '../../../assets/images/realestate.jpeg'
import logistics from '../../../assets/images/logistics-3125131_1920.jpg'
// import wephfx from '../../images/wephcofx-big.jpg'

const Services = () => {
  return (
    <div className='p-5 bg-wephco-blue'>
      <Container>
        <div className="header">
          <div className="mt-5">
            <div className="text-center">
              <h6 className="text-danger">SERVICES</h6>
              <h5>COVERED INDUSTRIES</h5>
            </div>
          </div>
        </div>
        <div className="service-cards">
          <div className="mt-5">
            <Row>
              <Col>
                <Card className='h-100'>
                  <Card.Img variant='bottom' className='d-block w-100' src={interior3} alt='Interior & Exterior' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Interior</h6>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
              <Card className='h-100'>
                  <Card.Img variant='bottom' className='d-block w-100' src={realestate} alt='Real Estate' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Housing</h6>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
              <Card className='h-100'>
                  <Card.Img variant='top' className='d-block w-100' src={logistics} alt='' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Logistics</h6>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
              <Card className='h-100'>
                  {/* <Card.Img variant='top' className='d-block w-100' src={wephfx} alt='' /> */}
                  <Card.Footer>
                    <h6 className='wephco-blue'>WephcoFx</h6>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Services;
