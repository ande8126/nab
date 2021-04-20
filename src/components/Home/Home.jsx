import React, { useState } from 'react'
//pass in RequestList for props
import RequestList from '../RequestList/RequestList'
import RegisterForm from '../RegisterForm/RegisterForm'
import { useHistory, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    //dispatch for GET call on load for all requests
    //conditionally render phrase like "Make your first request"
    //ALSO: Maybe 'bouncing' arrow icon pointing to plus sign icon?
    
    return (


        <div>
            <h2>Your requests:</h2>
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
