import { BrowserRouter, Switch, Route } from 'react-router-dom'

// component imports
// import Navigation from './components/common/Navigation';
import Home from './components/pages/FX/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
// import Footer from './components/common/Footer';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
