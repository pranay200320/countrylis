import { useState } from "react";

const SearchBar = ({ setQuery }) => {
    const [searchitems, setSearchitems] = useState('')



    return (
        <>
            {/* add search container */}
            <div className="search-container">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for a country" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </>
    )
}

export default SearchBar;