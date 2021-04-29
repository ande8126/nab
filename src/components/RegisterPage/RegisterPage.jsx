import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
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
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  }
}))

function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box className="registrationRoot">
      <img className={classes.headerLogo} src="https://i.imgur.com/1FFPq48.png" alt="logo" />
      <Divider />
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <Button onClick={() => { history.push( '/login' ) } }>
              Login
            </Button>
          </center>
    </Box>
    // <div>
    //   <RegisterForm />

    //   <center>
    //     <Button
    //       type="button"
    //       variant="contained"
    //       color="primary"
    //       onClick={() => {
    //         history.push('/login');
    //       }}
    //     >
    //       Login
    //     </Button>
    //   </center>
    // </div>
  );
}

export default RegisterPage;
