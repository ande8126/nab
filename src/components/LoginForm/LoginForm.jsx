import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {
  Button,
  Box,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  // loginRoot: {
  //   width: '100%',
  // },
  formPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  dividerCaption: {
    marginBottom: '70px',
  },
  textField: {
    paddingBottom: '10px',
  }
}))

function LoginForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box className={classes.loginRoot}>
      <Typography
      className={classes.dividerCaption}
      color="textSecondary"
      display="block"
      variant="caption"
      >
      Login
      </Typography>  
      <form className={classes.formPanel} onSubmit={login}>
        {errors.loginMessage && (
          <h3 role="alert">
            {errors.loginMessage}
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
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              className={classes.textField}
              variant="outlined"
              color="secondary"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" name="submit">Login</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default LoginForm;
