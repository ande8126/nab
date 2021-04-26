import React from 'react'
//import RequestList for props
import RequestItem from '../RequestItem/RequestItem'
import { Grid } from '@material-ui/core';
//customize MaterialUI settings with MakeStyles
import { makeStyles } from '@material-ui/core/styles';
//styles go here:
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

const RequestList = ( {requests, triggerReload} ) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} >
            {requests.map( request => <RequestItem key={request.id} request={request} triggerReload={triggerReload} /> )}
            </Grid>
        </Grid>
    )
}

export default RequestList
