// import countrydata from '../CountryData'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import axios from 'axios'
const CountryList = ({ query }) => {
    const [countrydata, setCountryData] = useState([])
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

            {/* contries-container */}
            <div className='max-w-[1200px] mt-4 flex gap-16 flex-wrap mx-auto justify-between  md:justify-center '>

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