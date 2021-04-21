import React from 'react'
import { Link } from 'react-router-dom';


const CreateRequest = () => {
    return (
        <div>
            <h2>Build your request...</h2>

            <Link to="/confirm">
                <button>Confirm</button>
            </Link>
        </div>
    )
}

export default CreateRequest
