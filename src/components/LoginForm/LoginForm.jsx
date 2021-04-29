import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
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
  loginRoot: {
    width: '100%',
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  formPanel: {
    padding: '10px',
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
    <Grid container className={classes.loginRoot} spacing={2}>
      <Grid item xs={12}>
      <Typography
      color="textSecondary"
      display="block"
      variant="caption"
      >
      Login
      </Typography>
      </Grid>
        <Grid 
        item xs={12} 
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.loginForm}
        >
        <form className={classes.formPanel} onSubmit={login}>
          {errors.loginMessage && (
            <h3 role="alert">
              {errors.loginMessage}
            </h3>
          )}
          <Grid item xs={3} />
          <Grid item xs={8}>
              <TextField
                label="Username"
                type="text"
                name="username"
                variant="outlined"
                color="secondary"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
              <TextField
                label="Password"
                type="password"
                name="password"
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
        </form>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
