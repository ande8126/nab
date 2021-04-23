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
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}))


const Home = () => {
    //needed for MaterialUI classes
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
    //dispatch for GET call on load for all requests
    useEffect(()=>{
        dispatch( { type: 'FETCH_REQUESTS' } );
    }, [] )

    //conditionally render phrase like "Make your first request"
    //start by bringing down requests with useSelector
    const requests = useSelector( store => store.requests );
    //set local state for toggling conditional render
    const [ areRequests, setAreRequests ] = useState( false );
    //conditional
    const displayWelcome = () =>{
        if ( requests[0] === undefined ){
            return(
                // way to style this w/bouncing arrow?
                <p>Make your first request!</p>
            )
        
        }
    }   

    //ALSO: Maybe 'bouncing' arrow icon pointing to plus sign icon?
    // const classes = useStyles();
    console.log('requests:', requests);
    return (


        <div className="home-section">
            <br />
            <br />
            <br />
            <h3>Your requests:</h3>
            {/* conditionally render: 'make your 1st request'*/}
            {displayWelcome()}
            {/* props to RequestList for map */}
            <RequestList requests={requests} />
            {/* Plus sign icon here, links to CreateRequest */}
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton}>
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
