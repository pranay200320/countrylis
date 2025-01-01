import countrydata from '../CountryData'
import CountryCard from './CountryCard'
const CountryList = ({ query }) => {



    return (
        <>


            <div className='countries-container'>

                {
                    // query is intial state is empty and evry country containt empty space 
                    countrydata.filter((con) => con.name.common.toLowerCase().includes(query)).map((country, index) => (
                        <div key={index + 1}>

                            <CountryCard
                                name={country.name.common}
                                flags={country.flags.svg}
                                population={country.population.toLocaleString('en-IN')}
                                Region={country.region}
                                Capitals={country.capital?.[0]} />
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default CountryList