// components
import Landing from './components/sections/Landing';
import Navbar from './components/common/Nav';
import Footer from './components/common/Footer';
import InteriorDesign from './components/services/InteriorDesign';
import ExteriorDesign from './components/services/ExteriorDesign';
import RealEstate from './components/services/RealEstate';
import EventPlanning from './components/services/EventPlanning';
import BureauDeChange from './components/services/BureauDeChange';
import Consultants from './components/services/Consultants';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/services/interior-design' component={InteriorDesign} />
				<Route exact path='/services/exterior-design' component={ExteriorDesign} />
				<Route exact path='/services/real-estate' component={RealEstate} />
				<Route exact path='/services/event-planning' component={EventPlanning} />
				<Route exact path='/services/bureau-de-change' component={BureauDeChange} />
				<Route exact path='/services/consultants' component={Consultants} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
