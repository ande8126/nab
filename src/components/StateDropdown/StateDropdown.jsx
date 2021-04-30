import React from 'react';
import { useSelector } from 'react-redux';
import { 
    FormHelperText,
    FormControl,
    InputLabel,
    Select, 
    NativeSelect } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
    dropdown: {
        width: 100
    }
}))

const StateDropdown = ( { letters, getStateLetter }) => {
    //bring in props
    //think i need a new GET route here to dispatch for all states
    const classes = useStyles()

    return (
        <>
            <p>{JSON.stringify( letters )}</p>
        </>
        // <FormControl>
        //     <InputLabel>State</InputLabel>
        //     <Select onChange={getStateLetter} color="secondary" className={classes.dropdown} label="state">
        //         <option value='' />
        //         { letters.map( ( letter )=> <option value={letter.state} key={letter.id} >{letter.state}</option>) }

        //         {/* <option>test</option>
        //         <option>test2</option>
        //         <option value='Florida'>Florida</option>
        //         <option value='Minnesota'>Minnesota</option>
        //         <option value='South Dakota'>South Dakota</option>
        //         <option value='Wisconsin'>Wisconsin</option> */}

        //         {/* map state names here from props */}
        //     </Select>
        // </FormControl>
    )
}

export default StateDropdown;