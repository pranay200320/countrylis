
const Select = () => {
    return (
        <>
            <select className="filter-by-region">
                <option hidden=''>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceanina">Oceanina</option>
            </select>
        </>
    )
}

export default Select