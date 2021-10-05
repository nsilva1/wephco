import React from 'react'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import works1 from '../../../assets/images/works1.jpeg'
import works2 from '../../../assets/images/works2.jpeg'
import works3 from '../../../assets/images/works3.jpeg'
import works4 from '../../../assets/images/works4.jpeg'
import works5 from '../../../assets/images/works5.jpeg'
import works6 from '../../../assets/images/works6.jpeg'
import works7 from '../../../assets/images/works7.jpeg'
import works8 from '../../../assets/images/works8.jpeg'
import works9 from '../../../assets/images/works9.jpeg'
import works10 from '../../../assets/images/works10.jpeg'
import works11 from '../../../assets/images/works11.jpeg'
import works12 from '../../../assets/images/works12.jpeg'

const Works = () => {
  return (
    <div className='p-5'>
      <Container>
        <div className="mt-5 text-center">
          <h6 className="my-5 text-danger">PROJECTS</h6>
          <h5 className='mb-5'>RECENTLY COMPLETED WORK</h5>
        </div>
        <Carousel>

          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 1' src={works1}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 2' src={works2}/>
                </Card>
              </Col>
              
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 4' src={works4}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 5' src={works5}/>
                </Card>
              </Col>
              
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 7' src={works7}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 8' src={works8}/>
                </Card>
              </Col>
              
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 10' src={works10}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 11' src={works11}/>
                </Card>
              </Col>
              
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
            <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 3' src={works3}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 6' src={works6}/>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
            <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 9' src={works9}/>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card>
                  <Card.Img variant='top' className='d-block w-100' height={300} alt='Project 12' src={works12}/>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </Container>
    </div>
  )
}

export default Works;
