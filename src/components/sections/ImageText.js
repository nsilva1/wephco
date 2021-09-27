import React from 'react';

const ImageText = () => {
	return (
	<div className="slider-area">
        <div className="slider-active dot-style">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height hero-overly d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay=".4s">Welcome to Weph.Co</span>
                                <h1 data-animation="fadeInLeft" data-delay=".6s">Customised Interior & Exterior Decor.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	);
};

export default ImageText;
