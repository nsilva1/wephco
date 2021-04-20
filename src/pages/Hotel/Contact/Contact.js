import React from 'react';
import './contact.css';

// import Traveler from '../../assets/images/traveler.png';

const Contact = () => { 
  return (
    <section className="contact">
      <div className="container">
        <h5 className="section-head">
          <span className="heading" style={{color:'black'}}>Contact</span>
          <span className="sub-heading">Get in touch with us</span>
        </h5>
        <div className="contact-content">
          <div className="traveler-wrap">
            <img alt="traveler" src={require('../../../assets/images/traveler.png').default} />
          </div>
          {/* Contact Form */}

          <div class="container">
  <form>

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <button type='button' className='btn btn-white' >SEND MESSAGE</button>

  </form>
</div>

        </div>
      </div>
    </section> 
  )
}

export default Contact;