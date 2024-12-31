import countrydata from '../CountryData'
import CountryCard from './CountryCard'
const CountryList = () => {
    const array = countrydata.map((country, index) => (
        <div key={index}>
            {
                console.log(country.name.official)
            }
            <CountryCard name={country.name.common} />
        </div>
    ))

    console.log(array)

    return (
        <>
            <div className='countries-container'>
                {
                    array
                }
            </div>
        </>
    )
}

export default CountryList