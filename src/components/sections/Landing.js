import React from 'react';
import ImageText from './ImageText';
import About from './About';
import Services from './Services';
import { Container } from 'react-bootstrap';

const Landing = () => {
	return (
		<Container fluid>
			<div className='landing-image'>
				<div className='image-text'>
					<ImageText />
				</div>
			</div>
			<About />
			<Services />
		</Container>
	);
};

export default Landing;
