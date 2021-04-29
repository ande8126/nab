import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import {
  Button,
  Box,
  Grid, 
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  landingRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
  },

  headerLogo: {
    margin: '135px 0',
    width: '75%',
    maxWidth: '400px',
    // paddingTop: '100px',
    // paddingLeft: '30px',
    // paddingBottom: '140px',
  }
}))

function LandingPage() {
  const [heading, setHeading] = useState( 'https://i.imgur.com/1FFPq48.png' );
  const history = useHistory();
  const classes = useStyles();


  return (
    <Box className={classes.landingRoot}>
      <img className={classes.headerLogo} src={heading} alt="logo" />
      <Button variant="contained" color="secondary" onClick={() => { history.push( '/registration' ) } }>Get started</Button>
      <Typography variant="body2" color="textSecondary" onClick={() => { history.push( '/login' ) } }>
        Existing member/login
      </Typography>
    </Box>
  );
}

export default LandingPage;
