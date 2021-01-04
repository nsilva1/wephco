// components
import Landing from './components/sections/Landing';
// import Tenets from './components/sections/Tenets';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
