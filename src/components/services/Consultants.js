import React from 'react';
import { Container } from 'react-bootstrap';

const Consultants = () => {

	return (
		<div>
			<div>
					<img src={require('../images/contact.jpg').default} className='consultant-hero-image' alt="Contact Us"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>Contact Us</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<div className="d-flex justify-content-center">
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiSpGAVMAnBTLuhnCos1FnlaZLyiHfBxhfRAtn4tDaMJh2lg/viewform?embedded=true" width="700" title='Contact' height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
				</div>
			</Container>
		</div>
		</div>
	);
};

export default Consultants;


// Dropdown first to pick service type then google form pops up to fill in details.