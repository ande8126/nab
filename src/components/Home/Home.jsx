import { useState, useEffect } from 'react'
//pass in nav bar
import Nav from '../Nav/Nav';
//pass in RequestList for props
import RequestList from '../RequestList/RequestList'
import { useHistory } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    AppBar,
    Box,
    Divider,
    Fab,
    Toolbar,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
//styling
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles(theme=>({
    homeRoot: {
        padding: '0 0',
    },
    nav: {
        padding: '0 0',
        ...theme.mixins.toolbar
    },
    navBarSpacer: theme.mixins.toolbar,
    appBar: {
        top: 'auto',
        bottom: 0,
        padding: '0 0',
        ...theme.mixins.toolbar,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    grow: {
        flexGrow: 1,
    },
    header: {
        fontSize: '14px',
        padding: '12px 30px'
    },
    divider: {
        marginBottom: '10px',
        margin: '0 10px'
    },
    appBarSpacer: theme.mixins.toolbar,
}))

const Home = () => {
    //needed for styling
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();
    //dispatch for GET call on load for all requests
    useEffect(()=>{
        dispatch( { type: 'FETCH_REQUESTS' } );
    }, [] )
    //bring down all requests with useSelector
    const requests = useSelector( (store) => {
        return store.requests } );
    //conditional in case user hasn't made requests yet
    const displayWelcome = () =>{
        if ( requests[0] === undefined ){
            return(
                <p>Make your first request!</p>
            )
        }
    }
    //click handler for adding new request
    const addRequest = () =>{
        history.push( '/create' )
    }
    //console.log('requests:', requests);
    return (

        <Box className={classes.homeRoot}>
            <Nav className={classes.nav}/>
            <div className={classes.navBarSpacer} />
            <Typography variant="h2" className={classes.header} color="textSecondary">
                HOME
            </Typography>
            <Divider className={classes.divider} />
            {/* conditionally render: 'make your 1st request'*/}
            {displayWelcome()}
            {/* props to RequestList for map */}
            <RequestList requests={requests} />
            <div className={classes.appBarSpacer} />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={addRequest}>
                        <AddIcon />
                    </Fab>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Home
