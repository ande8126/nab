import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StateDropdown from '../StateDropdown/StateDropdown'


const CreateRequest = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //local state for letter object
    const [ tempLetter, setTempLetter ] = useState({});
    const [ recordDetails, setRecordDetails ] = useState('')

    const handleTitle = ( event ) =>{
        setTempLetter( { ...tempLetter, title: event.target.value })
    }

    const handleRecipient = ( event ) =>{
        setTempLetter( { ...tempLetter, recipient: event.target.value })
    }

    //this handler doesn't add to object, but to the textbox below
    const handleRecords = ( event ) =>{
        setRecordDetails( event.target.value )
    }

    //function to handle textbox
    const handleText = ( event ) =>{
        setText( event.target.value );
    }

    //useSelector to draw from redux
    const starterText = useSelector( ( store )=>{
        return store.letter;
    })

    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    //props to StateDropdown component
    const getStateLetter = ( event ) =>{
        dispatch({ type: 'FETCH_LETTER', payload: event.target.value } );
    }

    ////- SHOULD THIS AND TEXTBOX GO IN A LATER SCREEN?(BREADCRUMBS) -////
    //local state for textbox
    const [ text, setText ] = useState('')    



    return (
        <div>
            <br />
            <br />
            <h2>Build your request...</h2>
            {/* <select>
                <option value=''>Please select</option>
                
            </select> */}
            {/* Props GET call to StateDropdown: */}
            <StateDropdown getStateLetter={getStateLetter} />
            <input type="text" placeholder="title" onChange={handleTitle} />
            <input type="text" placeholder="recipient" onChange={handleRecipient} />
            <input type="text" rows="2" placeholder="records here... be specific" onChange={handleRecords} />
            <p><textarea cols="20" rows="6" onChange={()=>handleText} defaultValue={starterText, recordDetails} /></p>
            <Link to="/confirm">
                <button>Confirm</button>
            </Link>
        </div>
    )
}

export default CreateRequest
