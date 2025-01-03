
const Select = () => {
    return (
        <>
            {/* filter by resion */}
            <select className="w-[250px] p-4 border-none outline-none shadow-md rounded bg-sky-200 text-[#999]">
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