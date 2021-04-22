import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useClippy from 'use-clippy';

const ConfirmRequest = () => {
    //useSelector to bring in tempRequest object
    const request = useSelector( ( store )=>{
        return store.tempRequest
    })
    //local state for finalizing email_body
    const [ emailBody, setEmailBody ] = useState('');

    useEffect( ()=>{
        makeEmail( request )
    }, [] )

    //function to concat recipient and email body
    const makeEmail = ( emailObject ) =>{
        //setEmailBody( 'Dear ' + emailObject.recipient + ', ' + emailObject.email_body)
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
            <button>Save</button>
            
        </div>
    )
}

export default ConfirmRequest
