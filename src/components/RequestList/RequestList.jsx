import React from 'react'
//import RequestList for props
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ( {requests, triggerReload} ) => {

    return (
        <div>
            {requests.map( request => <RequestItem key={request.id} request={request} triggerReload={triggerReload} /> )}
        </div>
    )
}

export default RequestList
