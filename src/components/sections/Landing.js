import React from 'react';
import ImageText from './ImageText';
import About from './About';
import Services from './Services';
import { Container } from 'react-bootstrap';

const Landing = () => {
	return (
		<div>
			<div className='landing-image'>
				<div className='image-text'>
					<ImageText />
				</div>
			</div>
			<About />
			<Services />
		</div>
	);
};

export default Landing;
