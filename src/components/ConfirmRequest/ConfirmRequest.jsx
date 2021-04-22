import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useClippy from 'use-clippy';

const ConfirmRequest = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();
    //useSelector to bring in tempRequest object
    const request = useSelector( ( store )=>{
        return store.tempRequest;
    })
    //local state for finalizing email_body
    const [ emailBody, setEmailBody ] = useState('');
    //get full email on DOM on load
    useEffect( ()=>{
        makeEmail( request )
    }, [] )
    //function to concat recipient and email body
    const makeEmail = ( emailObject ) =>{
        setEmailBody( `Dear ${emailObject.recipient}, \n${emailObject.email_body}`)
    }

    //CLIPBOARD SETUP HERE
    //useClippy tool imported, acts like useState
    const [ clipboard, setClipboard ] = useClippy();
    //disable button if text is already copied
    const isDisabled = clipboard === emailBody;
    
    const handleCopy = useCallback(()=>{
        setClipboard( emailBody )
    }, [ setClipboard, emailBody ])

    //function to send email object and go back to Home screen
    const addRequest = ( emailObject ) =>{
        dispatch( { type: 'SEND_REQUEST', payload: emailObject });
        history.push( '/home' );
    }



    return (
        <div>
            <br />
            <br />
            <h2>Your request:</h2>
            {/* FOR TESTING REDUX STORE: <p>{JSON.stringify( emailBody )}</p> */}
            <textarea cols="25"rows="20" value={emailBody}></textarea>
            <Link to="/create">
                <button>Back</button>
            </Link>
            <button disabled = {isDisabled} onClick={handleCopy}>Copy</button>
            <button onClick={()=>addRequest( request )}>Save</button>
            
        </div>
    )
}

export default ConfirmRequest
