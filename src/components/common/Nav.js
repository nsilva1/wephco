import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
    {/* <!-- Header Start --> */}
    <div className="header-area header-transparent">
        <div className="main-header header-sticky">
            <div className="container-fluid">
                <div className="menu-wrapper d-flex align-items-center justify-content-between">
                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <Link to='/' style={{textDecoration:'none'}}>
													<img height='100px' width='100px' src={require('../images/wephco-2.png').default} alt='Logo' />
												</Link>
                    </div>
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                            <ul id="navigation">
                                <li>
																	<Link to='/services/interior-design' style={{textDecoration:'none', color:'white'}}>
																		Interior Design
																	</Link>
																</li>
                                <li>
																<Link to='/services/exterior-design' style={{textDecoration:'none', color:'white'}}>
																		Exterior & Archi. Design
																	</Link>
																</li>
                                <li>
																<Link to='/services/event-planning' style={{textDecoration:'none', color:'white'}}>
																		Event Planning
																	</Link>
																</li>
                                                                <li>
																<Link to='/hotel-booking' style={{textDecoration:'none', color:'white'}}>
																		Hotel Bookings
																	</Link>
																</li>
                                <li>
																<Link to='/services/real-estate' style={{textDecoration:'none', color:'white'}}>
																		Real Estate
																	</Link>
																</li>
                                <li>
																<Link to='/services/wephcofx' style={{textDecoration:'none', color:'white'}}>
																		WephCoFX
																	</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>          
                    {/* <!-- Header-btn --> */}
                    <div className="header-btns d-none d-lg-block f-right">
                        <Link to='/contact' className="btn header-btn">Contact Us</Link>
                    </div>
                    {/* <!-- Mobile Menu --> */}
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}
</header>

		
	);
};

export default Navigation;
