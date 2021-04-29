import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import {
  Button,
  Box,
  Divider,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  headerLogo: {
    width: '75%',
    maxWidth: '400px',
    paddingTop: '100px',
    paddingLeft: '30px',
    paddingBottom: '140px',
  }
}))

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { AutorenewTwoTone } from '@material-ui/icons';

function LandingPage() {
  const [heading, setHeading] = useState( 'https://i.imgur.com/1FFPq48.png' );
  const history = useHistory();
  const classes = useStyles();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box className="landingRoot">
      <img className={classes.headerLogo} src={heading} alt="logo" />
          <center>
            <Button variant="contained" color="secondary" onClick={() => { history.push( '/registration' ) } }>Get started</Button>
            <Typography variant="body2" color="textSecondary" onClick={() => { history.push( '/login' ) } }>
              Existing member/login
            </Typography>
          </center>
    </Box>
  );
}

export default LandingPage;
