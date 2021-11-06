import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../context/AppState'

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { appState } = useContext(AppContext);
  const authenticated = appState.isAuthenticated

  return (
    // Display component only when user is authenticated
    <Route {...rest} render={(props) => authenticated ? ( <Component {...props} /> ) : ( <Redirect to='/' /> ) } />
  )
}

export default AuthenticatedRoute;


