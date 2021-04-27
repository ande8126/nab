import { useState, useEffect } from 'react'
//pass in RequestList for props
import RequestList from '../RequestList/RequestList'
import { useHistory, Link } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    AppBar,
    Fab,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

//- STYLING STUFF -//
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles(theme=>({
    homeRoot: {
        padding: '0 0',
        //...theme.mixins.toolbar,
    },

    //spacer: theme.mixins.toolbar,

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
    appBarSpacer: theme.mixins.toolbar,
}))


const Home = () => {
    //needed for MaterialUI classes
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();

    //dispatch for GET call on load for all requests
    useEffect(()=>{
        dispatch( { type: 'FETCH_REQUESTS' } ); //this will need to include user_id as param
    }, [] )

    //start by bringing down requests with useSelector
    const requests = useSelector( (store) => {
        return store.requests } );
    //then get user
    //const user = useSelector((store) => store.user) 

    //conditional in case user hasn't made requests yet
    const displayWelcome = () =>{
        if ( requests[0] === undefined ){
            return(
                // way to style this w/bouncing arrow?
                <p>Make your first request!</p>
            )
        
        }
    }
    
    //click handler for adding new request
    const addRequest = () =>{
        history.push( '/create' )
    }

    //ALSO: Maybe 'bouncing' arrow icon pointing to plus sign icon?
    // const classes = useStyles();
    console.log('requests:', requests);
    return (

        <div className={classes.homeRoot}>
            <div className={classes.spacer} />
            <h3>Your requests:</h3>
            {/* conditionally render: 'make your 1st request'*/}
            {displayWelcome()}
            {/* props to RequestList for map */}
            <RequestList requests={requests} />
            {/* Plus sign icon here, links to CreateRequest */}
            <div className={classes.appBarSpacer} />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={addRequest}>
                        <AddIcon />
                    </Fab>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
            {/* <Link to="/create">
                <button>Create Request</button>
            </Link> */}
        </div>
    )
}

export default Home
