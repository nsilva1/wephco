import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

const Contact = (props) => {
	const BASE_URL = 'https://wephco-api.herokuapp.com';
	const [state, setState] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const handleChange = (input) => (event) => {
		setState({
			[input]: event.target.value,
		});
	};

	const submit = async () => {
		if (state.name === '' || state.phone === '' || state.email === '') {
			alert('Please fill in all fields');
			return;
		}

		const payload = {
			details: state,
			message: props.message,
		};

		try {
			const response = await axios.post(`${BASE_URL}/mail/send-mail`, payload);
			if (response.status === 200) {
				alert('Message Sent!');
			}
		} catch (error) {
			alert('Message not Sent.');
		}
	};

	return (
		<div className='text-center'>
			<Container>
				<Form>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Name'
								value={state.name}
								onChange={handleChange('name')}
							/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Phone Number'
								value={state.phone}
								onChange={handleChange('phone')}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							value={state.email}
							onChange={handleChange('email')}
						/>
					</Form.Group>

					<Button variant='primary' onClick={submit}>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Contact;
