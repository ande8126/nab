import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <>
          <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Registration
        </Typography>
      <form className="formPanel" onSubmit={registerUser}>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
            <TextField
              label="Username"
              type="text"
              name="username"
              variant="outlined"
              color="secondary"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
        </div>
        <div>
            <TextField
              label="First name"
              type="text"
              name="firstname"
              variant="outlined"
              color="secondary"
              value={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
        </div>
        <div>
            <TextField
              label="Last name"
              type="text"
              name="lastname"
              variant="outlined"
              color="secondary"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
        </div>
        <div>
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              color="secondary"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit" name="submit">Join</Button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
