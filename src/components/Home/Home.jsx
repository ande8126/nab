import { useState, useEffect } from 'react'
//pass in RequestList for props
import RequestList from '../RequestList/RequestList'
import { useHistory, Link } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { StoreMallDirectory } from '@material-ui/icons';

////- STYLING STUFF FOR LATER MAYBE -////
//import { makeStyles } from '@material-ui/core/styles';
// const  useStyles = makeStyles(theme=>({
//     offset: theme.mixins.toolbar,
// }))


const Home = () => {
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
        if ( requests === undefined ){
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
            {JSON.stringify( requests )}
            {displayWelcome()}
            {/* conditionally render: 'make your 1st request'*/}
            <RequestList />
            {/* Plus sign icon here, links to CreateRequest */}
            
            {/* more stuff from LandingPage DOM - will edit later */}
            
            <Link to="/create">
                <button>Create Request</button>
            </Link>
        </div>
    )
}

export default Home
