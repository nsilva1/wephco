import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const PricingPlan = () => {
  return (
    <>
      <Container>
        <h3 className="text-center" style={{marginTop:'100px'}}>MEMBERSHIP PLANS</h3>
        <div className="row d-flex justify-content-center align-items center p-5">
          <div className="col-sm-12 col-md-4">
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>Bronze Member</Card.Title>
                <Card.Text>
                  <button className='btn btn-bronze'>Continue</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4">
          <Card className='text-center'>
              <Card.Body>
                <Card.Title>Silver Member</Card.Title>
                <Card.Text>
                <button className='btn btn-silver'>Continue</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4">
          <Card className='text-center'>
              <Card.Body>
                <Card.Title>Gold Member</Card.Title>
                <Card.Text>
                <button className='btn btn-gold'>Continue</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PricingPlan;
