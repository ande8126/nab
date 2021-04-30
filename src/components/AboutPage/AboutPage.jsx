import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
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
    margin: '2px 20px',
    backgroundColor: '#dcd4e9',
    borderBottom: 'solid 4px #cbc3e3'
  },
  name: {
    fontSize: '20px',
    padding: '10px 5px',
  },
  profile: {
    padding: '20px',
    margin: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  profileData: {
    fontSize: '12px',
    color: 'gray',
    paddingBottom: '5px'
  }
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
  //run makeDate on load
  useEffect( ()=>{
    makeDate( requests[requests.length-1].date )
  }, [] )
  return (
    <Box className={classes.container}>
      <Nav className={classes.nav}/>
      <div className={classes.navBarSpacer} /> 
      <Typography variant="h2" className={classes.aboutHeader} color="textSecondary">
        ABOUT
      </Typography>
      <Paper className={classes.nameContainer}>
      <Typography variant="h3" align="center" className={classes.name}>
        {user.firstname} {user.lastname}
      </Typography>
      </Paper>
      <Paper className={classes.profile}>
      <Typography variant="p" className={classes.profileData}>
        Username: <span>{user.username}</span>
      </Typography>
      <Typography variant="p" className={classes.profileData}>
        Requests made: <span>{requests.length}</span>
      </Typography>
      <Typography variant="p" className={classes.profileData}>
        Date of last request: <span>{date}</span>
      </Typography>
      </Paper>
    </Box>
  );
}

export default AboutPage;
