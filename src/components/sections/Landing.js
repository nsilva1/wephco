import React from 'react'
import Navbar from '../common/Nav'
import ImageText from './ImageText'
import About from './About'

const Landing = () => {
    return (
        <>
            <div className='landing-image'>
                <Navbar />
                <div className='image-text' >
                    <ImageText />
                </div>
            </div>
            <About />
        </>
    );
}

export default Landing;