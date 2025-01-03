
const CountryCard = ({ name, flags, population, Region, Capitals }) => {
    return (
        <>
            {/* country card */}
            <a className="inline-block w-[250px] rounded-lg overflow-hidden pb-6 shadow-md transition-all duration-200 ease-in-out bg-white no-underline text-inherit country-card hover:scale-[1.03] hover:shadow-lg " href={`/country?name=${name}`}>
                <img src={flags} alt={name} className='w-full' />
                <div className="px-4 md:text-sm">
                    <h3 className="text-2xl my-4">{name}</h3>
                    <p className='my-2'>
                        <b >Populations : </b>{population}
                    </p>
                    <p className='my-2'>
                        <b>Region:</b>{Region}
                    </p>
                    <p className='my-2'>
                        <b>Capital:</b>{Capitals}

                    </p>
                </div>
            </a>
        </>
    )
}

export default CountryCard