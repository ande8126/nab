import React, { useState } from 'react'
//pass in RequestList for props
import RequestList from '../RequestList/RequestList'
import RegisterForm from '../RegisterForm/RegisterForm'
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {
    //dispatch for GET call on load for all requests
    //conditionally render phrase like "Make your first request"
    //ALSO: Maybe 'bouncing' arrow icon pointing to plus sign icon?
    
    //replace LandingPage functionality here
    const [heading, setHeading] = useState('Welcome');
    const history = useHistory();

    const onLogin = (event) => {
        history.push('/login');
    };

    return (


        <div>
            
            {/* conditionally render: 'make your 1st request'*/}
            <RequestList />
            {/* Plus sign icon here, links to CreateRequest */}
            
            {/* more stuff from LandingPage DOM - will edit later */}

        </div>
    )
}

export default Home
