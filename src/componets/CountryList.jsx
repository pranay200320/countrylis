// import countrydata from '../CountryData'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import axios from 'axios'
const CountryList = ({ query }) => {
    const [countrydata, setCountryData] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchCountrie = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountryData(response.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchCountrie();
    }, []);
    // console.log(countrydata)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Remove All Data</button>
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