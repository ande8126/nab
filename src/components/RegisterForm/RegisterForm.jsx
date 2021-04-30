import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Box,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  registrationRoot: {
    //paddingLeft: '30px',
  },
  formPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerLogo: {
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  },
  dividerCaption: {
    marginBottom: '70px',
  },
  textField: {
    paddingBottom: '10px',
  }

}))

function RegisterForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        firstname: firstName,
        lastname: lastName,
        password: password,
      },
    });
  }; // end registerUser

  ////- YOU HAVE TO COMPLETELY REWORK/STYLE THIS -////
  // way to get rid of Nav with conditional render?
  return (
    <Box className={classes.registrationRoot}>
          <Typography
          className={classes.dividerCaption}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Registration
        </Typography>
        <form className={classes.formPanel} onSubmit={registerUser}>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
        )}
          <Grid container justify="center">
            <Grid item xs={12}>
              <TextField
                label="Username"
                type="text"
                className={classes.textField}
                variant="outlined"
                color="secondary"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First name"
                type="text"
                className={classes.textField}
                variant="outlined"
                color="secondary"
                value={firstName}
                required
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last name"
                type="text"
                className={classes.textField}
                variant="outlined"
                color="secondary"
                value={lastName}
                required
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                className={classes.textField}
                variant="outlined"
                color="secondary"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={6} justify="center">
              <Button variant="contained" color="primary" type="submit" name="submit">Join</Button>
            </Grid>
          </Grid>
        </form>
    </Box>
  );
}

export default RegisterForm;
