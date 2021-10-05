import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactUsModal = ({open, close}) => {

  const [localState, setLocalState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (input) => (event) => {
    setLocalState({
      ...localState,
      [input]: event.target.value
    })
  }

  return (
    <Modal size='lg' show={open} onHide={close}>
      <Modal.Header>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-wephco-blue'>
        <Row >
          <Col md={6}>
            <Row>
              <Col md={2}>
                <i className="bi bi-geo-alt-fill"></i>
              </Col>
              <Col md={10}>
                <h5>Our Location</h5>
                <p>
                  No B10, Valley Mall Plaza, Wuse 2, Abuja.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-whatsapp"></i>
              </Col>
              <Col md={10}>
                <h5>Let's Talk</h5>
                <p>+1 214 650 3751</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-envelope"></i>
              </Col>
              <Col md={10}>
                <h5>Email Us</h5>
                <p>info@wephco.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className=''>
            <form name='contact' netlify>

              <Row>
                <Form.Group as={Col}>
                  <Form.Label className='text-white'>Name</Form.Label>
                  <Form.Control name='Name' required type='text' value={localState.name} onChange={handleChange('name')} />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control name='Email' required type='email' value={localState.email} onChange={handleChange('email')} />
                </Form.Group>
              </Row>

              <Row>
              <Form.Group as={Col}>
                  <Form.Label className='text-white'>Phone</Form.Label>
                  <Form.Control name='Phone' required type='text' value={localState.phone} onChange={handleChange('phone')} />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label className='text-white'>Subject</Form.Label>
                  <Form.Control name='Subject' required type='text' value={localState.subject} onChange={handleChange('subject')} />
                </Form.Group>
              </Row>

              <Form.Group as={Col}>
                  <Form.Label className='text-white'>Message</Form.Label>
                  <Form.Control name='Message' required as='textarea' type='text' value={localState.message} onChange={handleChange('message')} />
                </Form.Group>

              <Button variant='light' className='mt-3'>
                Send Message
              </Button>

            </form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ContactUsModal;
