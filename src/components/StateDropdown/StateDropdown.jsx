import React from 'react';
import { 
    FormControl,
    InputLabel,
    Select, 
    } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
    dropdown: {
        width: 100
    }
}))

const StateDropdown = ( { letters, getStateLetter }) => {
    //needed for styling
    const classes = useStyles()

    return (
        // <>
        //     <p>{JSON.stringify( letters )}</p>
        // </>
        <FormControl>
            <InputLabel>State</InputLabel>
            <Select onChange={getStateLetter} color="secondary" className={classes.dropdown} label="state">
                <option value='' />
                { letters.map( ( letter )=> <option value={letter.id} key={letter.id} >{letter.state}</option>) }
            </Select>
        </FormControl>
    )
}

export default StateDropdown;