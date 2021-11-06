import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { AppProvider } from './context/AppState'
import PrivateRoute from './components/common/AuthenticatedRoute';

// component imports
import Home from './components/pages/FX/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import TransactionDetails from './components/pages/FX/TransactionDetails';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <AppProvider>
      <ToastProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/transaction-details' component={TransactionDetails} />
        </Switch>
      </BrowserRouter>
      </ToastProvider>
    </AppProvider>
  );
}

export default App;
