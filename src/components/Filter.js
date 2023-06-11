import React from "react";

function Filter({ hogsToFilterGreased }) {

    function onGreasedFilterChange(event) {
        hogsToFilterGreased(event.target.value)
    }

    return(
        <div>
            <select name="filter" onChange={onGreasedFilterChange}>
                <option value="All">Select Greased State</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter