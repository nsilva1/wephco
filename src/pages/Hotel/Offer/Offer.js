import React from 'react';
import './offer.css';

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer-content">
          <div className="discount">
            40% off
          </div>
          <h5 className="hotel-name" style={{color:'black'}}>AES Luxury Apartments</h5>
          <div className="hotel-rating">
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
          </div>
          <div className="row">
            <div className="col" style={{color:'black'}}><h5>HOMEY</h5></div>
            <div className="col" style={{color:'black'}}><h5>DELICIOUS</h5></div>
            <div className="col" style={{color:'black'}}><h5>AFFORDABLE</h5></div>
          </div>
          {/* <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p> */}
          <button href="#" className="btn btn-gradient">Redeem offer</button>
        </div>
      </div>
    </section>
  )
}

export default Offer;