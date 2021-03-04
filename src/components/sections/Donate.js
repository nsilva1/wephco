import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Donate = () => {
  return (
    <div>
      <h3 className="display-4 mt-3">
        WephCo Foundation
      </h3>
      <div className="mt-3">
        <Row>
          <Col md={6}>
            <img src={require('../images/foundation_1.png').default} alt='Back To School' width='100%' />
          </Col>
          <Col md={6}>
            <div>
              <h3>Join WephCo Foundation in its goal to make every child educated.</h3>
              <p className="lead">
                We have identified that education is one of the major problems in our continent and our country specifically. We have taken it upon ourselves to do something about it. This is our country and it is up to us to make it what we want it to be. 
              </p>
              <p className="lead">
                With this in mind, we have partnered with various institutions across the country who are stepping up to join us in this righteous journey.
              </p>
              <p className="lead">
                If you are willing to join us, you can donate what you can below.
              </p>
              <button className='btn btn-danger'>
                Donate!
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Donate;
