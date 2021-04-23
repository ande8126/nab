import React, { useEffect, useState } from 'react';
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
    Paper,
    Typography } from '@material-ui/core';
//customize MaterialUI settings with MakeStyles
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
//grid
import Grid from '@material-ui/core/Grid'


const RequestItem = ( {request} ) => {
    useEffect( ()=>{
        makeDate( request.date )
    }, [] )

    ////- TO DECIDE: useParams for each RequestItem? -////
    //toggle for switch
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });
   //function for switch -- still need to learn how to toggle on DOM?? 
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //makeStyles changes here:
    const useStyles = makeStyles({
        deleteButtonStyle: {
            fontStyle: 'oblique'
        }
})
    //local state for date
    const [ date, setDate ] = useState('')
    //function to make date more readable
    const makeDate = ( requestDate ) =>{
        let tempDate = ''
        for ( let i=0; i<requestDate.length; i++ ){
            console.log( 'making date:', requestDate[i] );
            if ( requestDate[i] === 'T' ){
                setDate( tempDate )
                break
            } else {
                tempDate += requestDate[i];
            }
            
            // else if ( requestDate[i] === 'T' ) {
            //     break;
            // }
        }
    }

    const classes = useStyles();
    return (
        <div>
            {/* {JSON.stringify( date )} */}
            <Paper elevation="4">
            <Grid container xs={12}>
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
                        control={<Switch checked={state.checkedA} onChange={handleChange} />}
                        label="Response"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
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
