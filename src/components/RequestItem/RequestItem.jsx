import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
/**  MATERIAL UI
 * npm install
 * experiment with theme (make theme.js, ThemeProvider in index.js)
 * 
*/
import { 
    Button, 
    Switch, 
    FormControlLabel, 
    FormGroup,
    IconButton, 
    Paper,
    Typography } from '@material-ui/core';
//customize MaterialUI settings with MakeStyles
import { makeStyles } from '@material-ui/core/styles';
//styles go here:
const useStyles = makeStyles({
    deleteButtonStyle: {
        fontStyle: 'oblique'
    }
})
//grid
import Grid from '@material-ui/core/Grid'
//icons
import CloseIcon from '@material-ui/icons/Close';


const RequestItem = ( {request} ) => {
    //format date on page load 
    useEffect( ()=>{
        makeDate( request.date )
    }, [] )
    //needed for MaterialUI classes
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
    ////- TO DECIDE: useParams for each RequestItem? -////

    //local state for date
    const [ date, setDate ] = useState('')
    //function to make date more readable
    const makeDate = ( requestDate ) =>{
        let tempDate = '';
        for ( let i=0; i<requestDate.length; i++ ){
            console.log( 'making date:', requestDate[i] );
            if ( requestDate[i] === 'T' ){
                setDate( tempDate )
                break
            } else {
                tempDate += requestDate[i];
            }
        }
    }//end makeDate

    //function to delete a request
    const deleteRequest = ( id ) =>{
        console.log( 'in deleteRequest', id );
        dispatch( { type: 'DELETE_REQUEST', payload: id } );
    }
    //toggle for switch
    const [toggle, setToggle] = useState({ checked: false });
    //function for switch -- still need to learn how to toggle on DOM?? 
    const handleResponse = ( id ) => {
        setToggle({ checked: true });
        dispatch( { type: 'HAVE_RESPONSE', payload: id } )
        };
    //function to toggle PUT request
    // const haveRequest = ( id ) =>{
    //     console.log( 'in haveRequest', id );
    //     dispatch( { type: 'HAVE_REQUEST', payload: id } )
    // }

    return (
        <div>
            {/* {JSON.stringify( date )} */}
            <Paper elevation={4}>
            <Grid container>
                <Grid item xs={1}>
                    <IconButton onClick={()=>deleteRequest( request.id )}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="primary" variant="h5">{request.title}</Typography>
                </Grid>
                
                <Grid item xs={12}>
                    <p>Sent:<span>{date}</span></p>
                </Grid>
                <Grid item xs={12}>
                    <p>Recipient:<span>{request.recipient}</span></p>
                </Grid>
                <Grid item xs={12}>
                    <p>Email:</p>
                </Grid>
                <Grid item xs={2} /> 
                <Grid item xs={8}>
                    <p>{request.email_body}</p>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={12}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Switch checked={toggle.checked} onChange={()=>handleResponse( request.id )} name="checkedA" />}
                        label="Response"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={8} />
                <Grid item xs={4}>
                    <Button 
                    className={classes.deleteButtonStyle}
                    variant="contained"
                    color="secondary">
                        Delete
                    </Button>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default RequestItem
