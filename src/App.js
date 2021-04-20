// components
// import Landing from './components/sections/Landing';
// import Navbar from './components/common/Nav';
// import Footer from './components/common/Footer';
// import InteriorDesign from './components/services/InteriorDesign';
// import ExteriorDesign from './components/services/ExteriorDesign';
// import RealEstate from './components/services/RealEstate';
// import EventPlanning from './components/services/EventPlanning';
// import BureauDeChange from './components/services/BureauDeChange';
// import Consultants from './components/services/Consultants';
// import Donate from './components/sections/Donate'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CSS imports
// import './components/assets/css/bootstrap.min.css';
// import "./components/assets/css/owl.carousel.min.css"
// import "./components/assets/css/slicknav.css"
// import "./components/assets/css/flaticon.css"
// import "./components/assets/css/animate.min.css"
// import "./components/assets/css/magnific-popup.css"
// import "./components/assets/css/fontawesome-all.min.css"
// import "./components/assets/css/themify-icons.css"
// import "./components/assets/css/slick.css"
// import "./components/assets/css/nice-select.css"
// import "./components/assets/css/style.css"
import './style.css';
import Hotel from './pages/Hotel/Hotel';

function App() {
	return (
		<BrowserRouter>
			{/* <Navbar /> */}
			<Switch>
				<Route exact path='/' component={Hotel} />
				{/* <Route exact path='/services/interior-design' component={InteriorDesign} />
				<Route exact path='/services/exterior-design' component={ExteriorDesign} />
				<Route exact path='/services/real-estate' component={RealEstate} />
				<Route exact path='/services/event-planning' component={EventPlanning} />
				<Route exact path='/services/wephcofx' component={BureauDeChange} />
				<Route exact path='/services/consultants' component={Consultants} />
				<Route exact path='/contact' component={Consultants} />
				<Route exact path='/foundation-home' component={Donate} />
				<Route exact path='/hotel-booking' component={Hotel} /> */}
			</Switch>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
