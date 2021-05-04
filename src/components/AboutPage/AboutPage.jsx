import React, { useState, useEffect } from 'react';
import './AboutPage.css'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Grid,
  Paper, 
  Typography 
} from '@material-ui/core';
//styling
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    
  },
  aboutHeader: {
    fontSize: '14px',
    padding: '12px 30px',
  },
  nav: {
    padding: '0 0',
    ...theme.mixins.toolbar
},
  navBarSpacer: theme.mixins.toolbar,
  nameContainer: {
    padding: '5px 20px',
    margin: '10px 20px',
    backgroundColor: '#dcd4e9',
    borderBottom: 'solid 4px #cbc3e3'
  },
  name: {
    fontSize: '20px',
    padding: '10px 5px',
  },
  profile: {
    padding: '20px',
    margin: '10px 20px',
    display: 'flex',
    flexDirection: 'column',

  },
  profileData: {
    fontSize: '12px',
    color: 'gray',
    paddingBottom: '5px'
  },
  tech: {
    padding: '20px',
    margin: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
}))

// <3 Prime instructors for this, but it's no longer true, now this component cares way too much: 
//...'or even care what the redux state is'


function AboutPage() {
  //for styling
  const classes = useStyles();
  //for user data
  const user = useSelector( ( store ) => store.user );
  //for request data
  const requests = useSelector( (store) => {
    return store.requests } );

  //for readable date
  const [ date, setDate ] = useState( '' );
  const makeDate = ( requestDate ) =>{
    console.log( 'the date:', requestDate );
    let tempDate = '';
    for ( let i=0; i<requestDate.length; i++ ){
        if ( requestDate[i] === 'T' ){
            setDate( tempDate );
            break;
        } else {
            tempDate += requestDate[i];
        }  
    }
  }//end makeDate
  //run makeDate && conditionally render request count on load
  useEffect( ()=>{
    if ( requests[0] === undefined ){
      setDate( 'No active requests' )
    }
    else {
      makeDate( requests[requests.length-1].date )
    }
  }, [] )
  return (
    <Box className={classes.container}>
      <Nav className={classes.nav}/>
      <div className={classes.navBarSpacer} /> 
      <Typography variant="h2" className={classes.aboutHeader} color="textSecondary">
        ABOUT
      </Typography>
      <Divider />
      <Paper className={classes.nameContainer}>
      <Typography variant="h3" align="center" className={classes.name}>
        {user.firstname} {user.lastname}
      </Typography>
      </Paper>
      <Paper className={classes.profile}>
      <Typography variant="body1" className={classes.profileData}>
        Username: <span>{user.username}</span>
      </Typography>
      <Typography variant="body1" className={classes.profileData}>
        Active requests: <span>{requests.length}</span>
      </Typography>
      <Typography variant="body1" className={classes.profileData}>
        Date of last request: <span>{date}</span>
      </Typography>
      </Paper>
      <Paper className={classes.tech}>
      <Typography variant="body1" align="center" className={classes.profileData}>
        Tech used:
      </Typography>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg"/>
          </Grid>
          <Grid item xs={3}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg"/>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </Box>
  );
}

export default AboutPage;
