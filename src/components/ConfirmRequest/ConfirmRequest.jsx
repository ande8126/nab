import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import useClippy from 'use-clippy';
import { 
    Button,
    Box,
    Divider,
    Grid, 
    TextField,
    Typography
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styles here
const useStyles = makeStyles(theme=>({
    confirmRoot: {
        paddingLeft: '10px',
        paddingRight: '30px',
    },
    header: {
        ...theme.typography.button,
        marginTop: '10px',
        padding: '5px',
    },
    nav: {
        padding: '0 0',
        ...theme.mixins.toolbar
    },
    navBarSpacer: theme.mixins.toolbar,
    divider: {
        marginBottom: '20px',
    },
    textField: {
        marginLeft: '10px',
        marginBottom: '18px',
    }
}))

const ConfirmRequest = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //needed for history
    const history = useHistory();
    //needed for mui styling
    const classes = useStyles();
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
        <Box className={classes.confirmRoot}>
            <Nav className={classes.nav}/>
            <div className={classes.navBarSpacer} />
            <Typography variant="h5" color="textSecondary" className={classes.header}>
                Confirm your request{/* FOR TESTING REDUX STORE: <p>{JSON.stringify( emailBody )}</p> */}
            </Typography>
            <Divider className={classes.divider}/>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        className={classes.textField}
                        variant="outlined" 
                        label="email"
                        multiline
                        rows={17}
                        fullWidth
                        color="secondary"
                        value={emailBody}
                        />
                </Grid>
                <Grid item xs={12} align="center">
                    <Link to="/create">
                        <Button>Back</Button>
                    </Link>
                    <Button 
                        disabled = {isDisabled}
                        variant="contained"
                        color="primary" 
                        onClick={handleCopy}
                    >
                        Copy
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary" 
                        onClick={()=>addRequest( request )}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ConfirmRequest
