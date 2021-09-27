import React from 'react';
import { Container } from 'react-bootstrap';

const BureauDeChange = () => {
	return (
		<div>
			<div>
					<img src={require('../images/wephcofx-big.jpg').default} className='consultant-hero-image' alt="WephCoFX"/>
					<div className="consultant-hero-text">
						<h1 className='display-2'>WephCoFX</h1>
					</div>
				</div>
		<div className='mt-5'>
			<Container>
				<div className="text-center display-4">
					Online Foreign Exchange Coming Soon.
				</div>
			</Container>
		</div>
		</div>
	);
};

export default BureauDeChange;
