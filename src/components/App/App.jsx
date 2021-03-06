import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
//import InfoPage from '../InfoPage/InfoPage'; - dont need yet for Nab, but saving
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home'
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CreateRequest from '../CreateRequest/CreateRequest';
import ConfirmRequest from '../ConfirmRequest/ConfirmRequest';
import Header from '../Header/Header';

//styling
import './App.css';//default
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
//useStyles to make display flex with nav bar
const useStyles = makeStyles( (theme)=>({
  container: {
    //display: 'flex'
  },
  nav: {
    padding: '0 0',
    ...theme.mixins.toolbar
  },
  navBarSpacer: theme.mixins.toolbar
}))

function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  //styling classNames
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/landing" />

          {/* Visiting localhost:3000/about will show the about page. */}
          
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          {/* Nab will show Home upon login. User screen saved to serve as profile */}
          <ProtectedRoute
            exact
            path="/home"
          >
            <Home />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows CreateRequest else shows LoginPage
            exact
            path="/create"
          >
            <CreateRequest />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows ConfirmRequest else shows LoginPage
            exact
            path="/confirm"
          >
            <ConfirmRequest />
          </ProtectedRoute>
          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/home"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/home"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/home"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/home"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/home"
            // - else shows LandingPage at "/landing"
            exact
            path="/landing"
            authRedirect="/home"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
