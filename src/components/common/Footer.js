import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

const Footer = () => {
    const [phone] = useState('447440685293');
    const [message] = useState('Test%20message%20from%20website');
    const url = `https://wa.me/${phone}/?text=${message}`;

    const [email, setEmail] = useState('')
    const BASE_URL = 'https://wephco-api.herokuapp.com'

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const submit = async () => {
        if(email === ''){
            alert('Email field is empty');
            return;
        }
        const payload = {
            email: email,
            message:'I would like to know more about your services'
        }

        const response = await axios.post(`${BASE_URL}/mail/send-mail`, payload)
        if(response.status === 200){
            alert('Thank you!')
        }
    }

    return (
        <div className=' pt-5 ' >
            <Container fluid>
                <Row>
                    <Col sm={12} md={4}>
                        <h4 className='mb-3'>About Us</h4>
                        <p className="lead">

                        </p>
                    </Col>
                    <Col sm={12} md={4}>
                    <h4 className='mb-3'>Features</h4>
                    <ul style={{ listStyleType:'none' }} >
                        <li className='mb-3' >
                            <Link style={{ textDecoration:'none' }} to='/about' >About</Link>
                        </li>
                        <li className='mb-3' >
                            <Link style={{ textDecoration:'none' }} to='/services' >Services</Link>
                        </li>
                        <li className='mb-3' >
                            <Link style={{ textDecoration:'none' }} to='/contact' >Contact Us</Link>
                        </li>
                    </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h4 className='mb-3'>Get In Touch</h4>
                        <Form inline>
                            <Form.Control type='email' placeholder='Email' value={email} onChange={onEmailChange} />
                            <Button onClick={submit} variant='outline-success'>Get A Free Quote</Button>
                        </Form>
                        {/* Address */}
                        <div className="mt-3">
                            <Row>
                                <Col sm={3}> <FontAwesomeIcon icon={faMapPin} /> </Col>
                                <Col sm={9}>
                                    <p>No B10, Valley Mall Plaza, Wuse 2, Abuja</p>
                                </Col>
                            </Row>
                        </div>
                        {/* Email */}
                        <div className="mt-3">
                            <Row>
                                <Col sm={3}> <Envelope /> </Col>
                                <Col sm={9}> <p>info@wephco.com</p> </Col>
                            </Row>
                        </div>
                        {/* Phone */}
                        <div className="mt-3">
                            <Row>
                                <Col sm={3}> <FontAwesomeIcon icon={faPhone} /> </Col>
                                <Col sm={9}> +234 905 374 3584 </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5">
                        {/* Social Media */}
                            <h3 className='text-center'>Follow Us</h3>
                            <Row>
                                <Col>
                                    <a href={url}>
                                    <FontAwesomeIcon icon={faWhatsapp} size={110} />
                                    </a>
                                </Col>
                                <Col>
                                <a href="https://www.facebook.com/weph.co/">
                                <FontAwesomeIcon icon={faFacebook} size={130} />
                                </a>
                                </Col>
                                <Col>
                                <a href="https://www.instagram.com/offcialweph.co/">
                                <FontAwesomeIcon icon={faInstagram} size={120} />
                                </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
               
                <div className="mt-5 pb-5 text-center">
                    Designed by <a href="https://www.tomanetech.com.ng">Tomane Technology Limited</a>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
