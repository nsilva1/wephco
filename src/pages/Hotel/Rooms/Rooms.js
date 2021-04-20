import React from 'react';
import './rooms.css';

const Room01 = require('../../../assets/images/room_1.jpg').default 
const Room02 = require('../../../assets/images/room_2.jpg').default 
const Room03 = require('../../../assets/images/room_3.jpg').default 
const Room04 = require('../../../assets/images/room_4.jpg').default 
const Room05 = require('../../../assets/images/room_5.jpg').default 
const Room06 = require('../../../assets/images/room_6.jpg').default 
const Room07 = require('../../../assets/images/room_7.jpg').default 
const Room08 = require('../../../assets/images/room_8.jpg').default 
const Room09 = require('../../../assets/images/room_9.jpg').default 
const Room10 = require('../../../assets/images/room_10.jpg').default 


const Rooms = () => {
  return (
    <section className="rooms">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Luxurious</span>
          <span className="sub-heading">Affordable rooms</span>
        </h5>
        <div className="grid rooms-grid">
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room01 } alt="image01" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$200 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room02 } alt="image02" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$450 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room03 } alt="image03" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$250 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room04 } alt="image04" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$600 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room05 } alt="image05" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$300 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room06 } alt="image06" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room07 } alt="image07" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room08 } alt="image08" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room09 } alt="image09" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room10 } alt="image10" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms;