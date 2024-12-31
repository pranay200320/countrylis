import countrydata from '../CountryData'
import CountryCard from './CountryCard'
const CountryList = () => {
    const array = countrydata.map((k, d) => (
        <div key={d}>
            {
                console.log(k)
            }
            <CountryCard />
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