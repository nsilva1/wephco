import { BrowserRouter, Switch, Route } from 'react-router-dom'

// component imports
import Navigation from './components/common/Navigation';
import Home from './components/pages/LandingPage/Home';
import Footer from './components/common/Footer';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
