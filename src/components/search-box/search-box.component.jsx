import React from "react";

import './search-box.styles.css'

function SearchBox(props) {
    return (
        <div>
            <input className="search-box" type="search" placeholder="search of country and city " value={props.searchQuery} onChange={props.handleSearchChange}/>
        </div>
    )
}

export default SearchBox