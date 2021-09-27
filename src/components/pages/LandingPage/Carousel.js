import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


const SlideShow = () => {
  return (
    <Container>
      <Carousel variant='dark' indicators={false}>
      <Carousel.Item>
        <img 
          className='d-block w-100'
          src={require('../../../assets/images/interior1.jpeg').default}
          alt='Design Project 1'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../../assets/images/interior2.jpeg').default}
          alt='Design Project 2'
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default SlideShow;
