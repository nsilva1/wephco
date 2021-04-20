import React from 'react';

import InputGroup from './common/InputGroup/InputGroup';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Hotels from './Hotels/Hotels';
import Offer from './Offer/Offer';
import Rooms from './Rooms/Rooms';

const Hotel = () => {
  return (
    <>
      <Header />
      <Banner />
      <InputGroup />
      <Hotels />
      <Offer />
      <Rooms />
      <Contact />
      <Footer />   
    </>
  )
}

export default Hotel;
