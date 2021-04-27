import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
/**  MATERIAL UI
 * npm install
 * experiment with theme (make theme.js, ThemeProvider in index.js)
 * 
*/
import { 
    Button, 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Switch, 
    FormControlLabel, 
    FormGroup,
    IconButton, 
    Typography } from '@material-ui/core';
//customize MaterialUI settings with MakeStyles
import { makeStyles } from '@material-ui/core/styles';
//styles go here:
const useStyles = makeStyles( (theme) => ({
    root: {
        minWidth: '100%',
    },
    header: {
        borderBottom: '4px solid #fcecae',
    },
    recordsSynopsis: {
        paddingBottom: '20px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));
//grid
//import Grid from '@material-ui/core/Grid'
//icons
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StayPrimaryPortraitTwoTone } from '@material-ui/icons';


const RequestItem = ( {request} ) => {
    //format date on page load 
    useEffect( ()=>{
        makeDate( request.date )
    }, [] )
    //needed for MaterialUI classes
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
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
        //this triggers new GET for all requests but it's janky??
        dispatch( { type: 'FETCH_REQUESTS' } );
    }
    //function to handle response (PUT)
    const handleResponse = ( id ) => {
        dispatch( { type: 'HAVE_RESPONSE', payload: id } )
        //this triggers new GET for all requests but it's janky??
        dispatch( { type: 'FETCH_REQUESTS' } );
    };

    //local state to expand email
    const [ expanded, setExpanded ] = useState( false );
    //handle expand click
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            {/* {JSON.stringify( date )} */}
            <CardHeader 
            action={
            <IconButton onClick={()=>deleteRequest( request.id )}>
                <CloseIcon />
            </IconButton>
            }
            titleTypographyProps={{variant:'h6' }}
            title={request.title}
            subheaderTypographyProps={{variant:'body2' }}
            subheader={date}
            className={classes.header}
            />
            <CardContent>
                <Typography variant="body1" component="p" className={classes.recordsSynopsis}>
                    Records synopsis here
                </Typography>
                <FormGroup row>
                    <FormControlLabel
                    control={<Switch checked={request.response} onChange={()=>handleResponse( request.id )} name="checkedA" />}
                    label={<Typography variant="body2" color="textSecondary">Response</Typography>}
                    />
                </FormGroup>
            </CardContent>
            <CardActions >
                <Typography variant="body2">
                    SEE THE FULL EMAIL:
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2">
                        {request.email_body}
                    </Typography>
                </CardContent>
            </Collapse>
            {/* <Grid container>
                <Grid item xs={1}>

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
                        control={<Switch checked={request.response} onChange={()=>handleResponse( request.id )} name="checkedA" />}
                        label="Response"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            </Paper> */}
        </Card>
    )
}

export default RequestItem
