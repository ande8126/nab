import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StateDropdown from '../StateDropdown/StateDropdown'


const CreateRequest = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();
    //local state for letter object
    const [ tempRequest, setTempRequest ] = useState({});
    //const [ recordDetails, setRecordDetails ] = useState('')
    ////- SHOULD THIS AND TEXTBOX GO IN A LATER SCREEN?(BREADCRUMBS) -////
    //local state for textbox
    //const [ text, setText ] = useState('')   

    const handleTitle = ( event ) =>{
        console.log( 'in handleTitle:', event.target.value );
        setTempRequest( { ...tempRequest, title: event.target.value })
    }

    const handleRecipient = ( event ) =>{
        setTempRequest( { ...tempRequest, recipient: event.target.value })
    }

    ////- HOW DO I LAY THIS OUT? RECORD DETAILS SHOULD ADD TO MIDDLE OF TEXTBOX -////
    //this handler doesn't add to object, but to the textbox below
    // const handleRecords = ( event ) =>{
    //     setRecordDetails( event.target.value )
    // }

    //useSelector to draw from redux
    const starterText = useSelector( ( store )=>{
        return store.letter;
    })

    //function to handle textbox
    const handleText = ( event ) =>{
        console.log( 'in handleText', event.target.value );
        setTempRequest( {...tempRequest, email_body: event.target.value } );
    }

    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    //props to StateDropdown component
    const getStateLetter = ( event ) =>{
        dispatch({ type: 'FETCH_LETTER', payload: event.target.value } );
    }

    //make object and bring over to confirmation page
    const createLetter = ( object ) =>{
        console.log( 'in createLetter with:', object );
        //will have to set foreign keys here 
        ////- think I need "breadcrumbs" approach tho -////
        //for now, send object to redux
        dispatch( {type: 'SET_TEMP_REQUEST', payload: object } );
        //move to confirmation 
        history.push( '/confirm' )
    }




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
            {/* <input type="text" placeholder="records here... be specific" onChange={handleRecords} /> */}

            <p><textarea cols="20" rows="6" onChange={handleText} defaultValue={starterText.body} /></p>
            <Link to="/home">
                <button>Back</button>
            </Link>
            <button onClick={()=>createLetter( tempRequest )}>Confirm</button>
        </div>
    )
}

export default CreateRequest
