import React from 'react';

const StateDropdown = ( { getStateLetter }) => {
    //bring in props
    return (
        <select onChange={getStateLetter}>
            <option value=''>Please select</option>
            <option>Test</option>
            {/* map state names here from props */}
        </select>
    )
}

export default StateDropdown;