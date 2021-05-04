import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Box,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  headerLogo: {
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  }
}))


function LoginPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box className="registrationRoot">
      <img className={classes.headerLogo} src="https://i.imgur.com/1FFPq48.png" alt="logo" />
      <Divider />
      <center>
      <LoginForm />
        <Button onClick={() => { history.push( '/registration' ) } }>
          Register
        </Button>
      </center>
    </Box>
  );
}

export default LoginPage;
