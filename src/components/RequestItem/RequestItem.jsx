import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Switch, 
    FormControlLabel, 
    FormGroup,
    IconButton, 
    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styles
const useStyles = makeStyles( (theme) => ({
    root: {
        minWidth: '100%',
    },
    header: {
        borderBottom: '4px solid #fcecae',
        backgroundColor: '#fffef2'
    },
    content: { 
        padding: '7px 15px',
        backgroundColor: '#fafdfd',
    },
    recordsSynopsis: {
        color: 'textSecondary',
        fontSize: 13,
        fontStyle: 'oblique',
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
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RequestItem = ( {request} ) => {
    //format date on page load 
    useEffect( ()=>{
        makeDate( request.date )
    }, [] )
    //needed for styling
    const classes = useStyles();
    //needed for dispatch
    const dispatch = useDispatch();
    //local state for date
    const [ date, setDate ] = useState( '' )
    //function to make date more readable
    const makeDate = ( requestDate ) =>{
        console.log( 'the date:', requestDate );
        let tempDate = '';
        for ( let i=0; i<requestDate.length; i++ ){
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
            <CardContent className={classes.content}>
                <Typography variant="body2">
                    Recipient: <span>{request.recipient}</span>
                </Typography>
                <FormGroup row>
                    <FormControlLabel
                    control={<Switch checked={request.response} onChange={()=>handleResponse( request.id )} name="checkedA" />}
                    label={<Typography variant="body2" color="textSecondary">Initial response</Typography>}
                    />
                </FormGroup>
            </CardContent>
            <Divider />
            <CardActions >
                <Typography variant="body2">
                    SEE THE EMAIL:
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
        </Card>
    )
}

export default RequestItem
