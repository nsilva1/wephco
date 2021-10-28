import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppProvider } from './context/AppState'

// component imports
import Navigation from './components/common/Navigation';
import Home from './components/pages/LandingPage/Home';
import RealEstate from './components/pages/RealEstate/RealEstate';
import Footer from './components/common/Footer';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/real-estate' component={RealEstate} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
