import React from 'react'
//import RequestList for props
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ( {requests} ) => {

    return (
        <div>
            {requests.map( request => <RequestItem key={request.id} request={request} /> )}
        </div>
    )
}

export default RequestList
