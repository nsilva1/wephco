import React from 'react';
import ImageText from './ImageText';
import Tenet from './Tenet';
import Quote from './Quote';
import Consultant from './Consultant';
import Partners from './Partners';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div>
				
			<ImageText />
			<div className='text-center' style={{backgroundColor:'red', height:'20px'}}>
				<Link to='/foundation-home' style={{textDecoration:'none'}}>
					Join our Foundation in its bid to help its surrounding community.
				</Link>
			</div>
			<Tenet />
			<Quote />
			<Consultant />
			{/* Partners */}
			{/* grey images for dark backgrounnd. */}
			<Partners />
		</div>
	);
};

export default Landing;
