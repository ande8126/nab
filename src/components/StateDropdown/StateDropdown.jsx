import React from 'react';

const StateDropdown = ( { getStateLetter }) => {
    //bring in props
    //think i need a new GET route here to dispatch for all states


    return (
        <select onChange={getStateLetter}>
            <option value=''>Please select</option>
            <option>test</option>
            <option>test2</option>
            <option>Florida</option>
            <option>Minnesota</option>
            <option>South Dakota</option>
            <option>Wisconsin</option>

            {/* map state names here from props */}
        </select>
    )
}

export default StateDropdown;