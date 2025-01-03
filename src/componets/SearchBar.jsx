import { useState } from "react";

const SearchBar = ({ setQuery }) => {
    const [searchitems, setSearchitems] = useState('')



    return (
        <>
            {/* add search container */}
            <div className="shadow-md max-w-[350px] w-full rounded px-6 text-b overflow-hidden bg-sky-200">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input type="text" className="border-none outline-none p-4 w-[90%] bg-inherit text-inherit placeholder-" placeholder="Search for a country" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </>
    )
}

export default SearchBar;