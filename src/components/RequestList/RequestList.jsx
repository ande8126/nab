import React from 'react'
//import RequestList for props
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ( {requests, fetchRequests} ) => {

    return (
        <div>
            {requests.map( request => <RequestItem key={request.id} request={request} fetchRequests={fetchRequests} /> )}
        </div>
    )
}

export default RequestList
