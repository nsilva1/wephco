import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Modal, Form, Media } from 'react-bootstrap';
import { useFlutterwave } from 'react-flutterwave'

const FormModal = ({open, close}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 0
  });

  const config = {
    public_key: 'FLWPUBK-a9717fea979c0995ca8a6a7ed2c493ef-X',
    tx_ref: Date.now(),
    amount: state.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: state.email,
      phonenumber: state.phone,
      name: state.name,
    },
  }

  const handleFlutterwavePayment = useFlutterwave(config);

  const handleChange = (input) => (event) => {
    setState({
      ...state,
      [input]: event.target.value
    })
  }

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Donation Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' value={state.name} onChange={handleChange('name')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value={state.email} onChange={handleChange('email')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type='text' value={state.phone} onChange={handleChange('phone')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type='number' value={state.amount} onChange={handleChange('amount')} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => {
          handleFlutterwavePayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {},
          })
        }} >Pay Now</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Donate = () => {
  const [open, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  let formModal = <FormModal open={open} close={closeModal} />

  return (
    <div>
      {formModal}
      <div>
					<img src={require('../images/charity.jpeg').default} className='consultant-hero-image' alt="WephCo Foundation"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>WephCo Foundation</h1>
					</div>
				</div>
      <div className="mt-3">
        <Media>
        <img src={require('../images/humanitarian.jpeg').default} alt="Humanitarian Aid" height='100' width='100'/>
          <Media.Body>
          <p className="lead">
            Humanitarian needs in Africa continue to be on the rise because of the combined effect of conflict, food shortages, climate change, poverty, and disease outbreaks – all factors to which the coronavirus pandemic constitutes an additional challenge.         humanitarian aid in Africa focuses on providing people in need with shelter, food and nutrition assistance, access to clean water and healthcare, education for children caught in humanitarian crises, and protection for the vulnerable, such as through the provision of psychosocial support services to victims of gender-based violence. Efforts are made to use different aid instruments that promote the link between short-term humanitarian aid, which can only address the consequences of a crisis, and building synergies with development and peace actions that tackle the root causes of crises.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
          <p className="lead">
            Getting an education is not just a fundamental human right. It is pivotal to increasing employment and income opportunities. It is fundamental to breaking the cycle of poverty. Education is the key to unlocking the golden door of freedom for all in Africa.  It is the bedrock of social and economic development.  
We are working on opening doors to equal educational opportunities for children who live in poverty and also to give girls an equal opportunity at getting an education.
Our activities are effective long-term investments that will help provide quality educational opportunities for bright young minds and young adults. This enables them to rise above poverty and become better decision makers.
            </p>
            <p className="lead">
            By providing these educational opportunities we decrease the number of potential young people falling through the cracks of the system. They will be less likely to walk through destructive paths that harm communities and perpetuate poverty.
            </p>
            <p className="lead">
            The funds help cover tuition, books, school supplies, uniforms, and other school-related costs.  By providing a scholarship to an African student, we offer a promise to the student that what they do in school has meaning, and they will have the reinforcement they need. Scholarships allow for future educational planning, and continuous support.
Education is important because it is the glue that holds our society together. It is the step-up necessary to see above what is around you. Education provides guidance towards success as well as weapons against poverty. Education empowers women are able to break from oppressive gender roles and contribute more significantly to society. Education can mean the difference between a healthy long life or an unfortunately short one.
            </p>
          </Media.Body>
          <img src={require('../images/foundation_1.png').default} alt="Education" height='200' width='100'/>
        </Media>
        <Media>
        <img src={require('../images/healthcare.jpeg').default} alt="Healthcare" height='200' width='300'/>
          <Media.Body>
          <p className="lead">
            Health care in Sub-Saharan Africa remains the worst in the world, with few countries able to spend the $34 to $40 a year per person that the World Health Organization considers the minimum for basic health care. And despite widespread poverty, an astonishing 50 percent of the region’s health expenditure is financed by out-of-pocket payments from individuals.
            </p>
            <p className="lead">
            The absence of an industrial revolution on the African subcontinent has left it with socio-economic structures that are, in the main, degenerative rather than accumulative’. Inequality in Africa health care system has risen significantly in the last 30 years. The number of  African countries living below the poverty line has increased e.g Nigeria from 19 million in 1970 to 90 million in 2000. In 1970, the top 2% of the population earned the same as the bottom 17%. By 2000 the income of the top 2% was equal to the bottom 55%.
            </p>
            <p className="lead">
            Technology is transforming how health care is delivered in Africa, giving more people in remote areas there and around the world access to better care. Likewise, easier access to data helps both doctors and policymakers make better-informed decisions about how to continue to improve the system. Even with these strides, however, the continent’s health care system faces big challenges. Our report finds that the private sector already delivers about half of Africa's health products and services. It calls for a close partnership between the public and private sectors, including improvements to regulatory oversight of private health care, and outlines ways that the private sector could be better engaged to improve its sustainability.
            </p>
            <p className="lead">
            Rather than serving only the rich, in Africa today the private sector is sometimes the only option for health care in many rural areas and poor urban slums. A poor woman in the region is as likely to take her sick child to a private hospital or clinic as to a public facility. 
Our goal is to render basic health support assistance tru private healthcare services with standard healthcare services to the less vulnerable and privileged.
            </p>
          </Media.Body>
        </Media>
        {/* Next Section */}
        <div>
          <Container>
          <Row>
            <Col>
              <Card style={{width:'15rem'}}>
                <Card.Body>
                  <Card.Title>About WephCo Foundation</Card.Title>
                  <Card.Text>a non-profit organisation, making a sustainable, realistic and effective difference</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{width:'15rem'}}>
                <Card.Body>
                  <Card.Title>Our Focus</Card.Title>
                  <Card.Text>Our primary focus is on Education & Training, Healthcare and Humanatarian Aid.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{width:'15rem'}}>
                <Card.Body>
                  <Card.Title>Volunteers</Card.Title>
                  <Card.Text>Our team is superb. Join our beautiful, marvelous and multi-talented team of volunteers.</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant='link' > Join </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          </Container>
        </div>
        {/* Next Section */}
        <div>
          <div className="header text-center">
            <h1 className="display-4 mt-4">
              Our Impact
            </h1>
          </div>
          <div className="impact-display">
            <Container>
              <Row>
                <Col>
                  <p className="lead text-danger">$18 Million</p>
                  <p className="lead text-danger">Awarded in Grants</p>
                </Col>
                <Col>
                <p className="lead text-danger">10 Projects</p>
                <p className="lead text-danger">Implemented</p>
                </Col>
                <Col>
                <p className="lead text-danger">Across the African Continent</p>
                <p className="lead text-danger">Including 6 Countries</p>
                </Col>
                <Col>
                <p className="lead text-danger">Over 130</p>
                <p className="lead text-danger">Communities reached</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Donate */}
        <div className="donate">
        <section class="wantToWork-area w-padding2">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <h2>Join us in our fight for Africa</h2>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3">
                    <Button onClick={openModal} className="btn btn-black f-right">Donate</Button>
                </div>
            </div>
        </div>
    </section>
        </div>
      </div>
    </div>
  )
}

export default Donate;
