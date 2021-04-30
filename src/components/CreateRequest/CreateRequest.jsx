import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StateDropdown from '../StateDropdown/StateDropdown'
import Nav from '../Nav/Nav';
import { 
    Button,
    Box,
    Divider, 
    TextField,
    Typography
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styles here
const useStyles = makeStyles(theme=>({
    createRoot: {
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    header: {
        ...theme.typography.button,
        marginTop: '10px',
        padding: '5px'
    },
    nav: {
        padding: '0 0',
        ...theme.mixins.toolbar
    },
    navBarSpacer: theme.mixins.toolbar,
}))


const CreateRequest = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();
    //needed for MUI styles
    const classes = useStyles()
    //local state for letter object
    const [ tempRequest, setTempRequest ] = useState({});
    //bring down user to use user.id as foreign key
    const user = useSelector((store) => store.user)
    //set user_id on load
    useEffect( ()=>{
        //get letters data for dropdown (NOT WORKING)
        dispatch( { type: 'FETCH_ALL_LETTERS' } );
        //set user_id foreign key
        setTempRequest( {...tempRequest, user_id: user.id } );
    }, [])
    const handleTitle = ( event ) =>{
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
    //letter to edit
    const starterText = useSelector( ( store )=>{
        return store.letter;
    })
    //all letters/statenames for dropdown
    const letters = useSelector( ( store )=>{
        return store.allLetters;
    })

    //function to handle textbox
    const handleText = ( event ) =>{
        console.log( 'in handleText', event.target.value );
        //setEmailBody( starterText.body );
        setTempRequest( {...tempRequest, email_body: event.target.value } );
    }

    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    //props to StateDropdown component
    const getStateLetter = ( event ) =>{
        dispatch( { type: 'FETCH_LETTER', payload: event.target.value } );
    }

    //make object and bring over to confirmation page
    const createLetter = ( object ) =>{
        console.log( 'in createLetter with:', object );
        ////- think I need "breadcrumbs" approach tho -////
        //for now, send object to redux
        dispatch( {type: 'SET_TEMP_REQUEST', payload: object } );
        //move to confirmation 
        history.push( '/confirm' )
    }

    return (
        <Box className={classes.createRoot} paddingBottom="10px">
            <Nav className={classes.nav}/>
            <div className={classes.navBarSpacer} />
            <Typography variant="h5" color="textSecondary" className={classes.header}>
                BUILD YOUR REQUEST
            </Typography>
            <Divider />
            {/* <select>
                <option value=''>Please select</option>
                
            </select> */}
            {/* Props GET call to StateDropdown: */}
            <StateDropdown letters={letters} getStateLetter={getStateLetter} />
            <br />
            <br />
            <TextField 
            id="outlined-helperText"
            variant="outlined" 
            type="text" 
            label="Description"
            InputLabelProps={{
                shrink: true,
            }}
            color="secondary"
            placeholder="Brief description"
            onChange={handleTitle} />
            <br />
            <br />
            <TextField 
            variant="outlined" 
            type="text" 
            label="Recipient"
            InputLabelProps={{
                shrink: true,
            }} 
            placeholder="Department or person"
            color="secondary"
            onChange={handleRecipient} />
            <p><TextField
                variant="outlined" 
                label="email"
                multiline
                rows={7}
                cols={30}
                InputLabelProps={{
                    shrink: true,
                }}
                color="secondary"
                onChange={handleText} 
                defaultValue={starterText.body} 
                /></p>
            <Link to="/home">
                <Button>Back</Button>
            </Link>
            <Button variant="contained" color="primary" onClick={()=>createLetter( tempRequest )}>Confirm</Button>
        </Box>
    )
}

export default CreateRequest
