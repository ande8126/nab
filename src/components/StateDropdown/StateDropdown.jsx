import React from 'react';
import { 
    FormHelperText,
    FormControl,
    InputLabel,
    Select, 
    NativeSelect } from '@material-ui/core/';

const StateDropdown = ( { getStateLetter }) => {
    //bring in props
    //think i need a new GET route here to dispatch for all states


    return (
        <FormControl>
            <InputLabel>State</InputLabel>
            <Select onChange={getStateLetter}>
                <option value='' />
                <option>test</option>
                <option>test2</option>
                <option value='Florida'>Florida</option>
                <option value='Minnesota'>Minnesota</option>
                <option value='South Dakota'>South Dakota</option>
                <option value='Wisconsin'>Wisconsin</option>

                {/* map state names here from props */}
            </Select>
        </FormControl>
    )
}

export default StateDropdown;