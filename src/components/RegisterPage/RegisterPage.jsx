import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import {
  Button,
  Box,
  Divider,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styling
const  useStyles = makeStyles( ( theme )=>({
  headerLogo: {
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  }
}))

function RegisterPage() {
  //needed for history
  const history = useHistory();
  //needed for styling
  const classes = useStyles();

  return (
    <Box className={classes.registerRoot}>
      <img className={classes.headerLogo} src="https://i.imgur.com/1FFPq48.png" alt="logo" />
      <Divider />
          <center>
          <RegisterForm />
          <br />
          <Typography variant="body2" color="textSecondary">
            Already a member?
          </Typography>
          <Button onClick={() => { history.push( '/login' ) } }>
            Login
          </Button>
          </center>
    </Box>
  );
}

export default RegisterPage;
