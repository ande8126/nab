import React from 'react'
//import RequestList for props
import RequestItem from '../RequestItem/RequestItem'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styles
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

const RequestList = ( {requests} ) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer} spacing={4} justify="center">       
            {requests.map( request => <Grid item xs={12}><RequestItem key={request.id} request={request} /></Grid> )}       
        </Grid>
    )
}

export default RequestList
