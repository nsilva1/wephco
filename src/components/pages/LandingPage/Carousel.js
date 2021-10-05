import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import interior1 from '../../../assets/images/interior1.jpeg'
import interior2 from '../../../assets/images/interior2.jpeg'


const SlideShow = () => {
  return (
    <Container>
      <Carousel variant='dark' indicators={false}>
        {/* <fieldset>
        <legend align='left'>
          LEFT:
        </legend> */}
      <Carousel.Item>
        <img 
          className='d-block w-100'
          src={interior1}
          alt='Design Project 1'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={interior2}
          alt='Design Project 2'
        />
      </Carousel.Item>
      {/* <legend align='bottom'>
        BOTTOM:
      </legend>
      </fieldset> */}
    </Carousel>
    </Container>
  )
}

export default SlideShow;
