import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Simmer from './Simmereffect/Simmer';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
    // const countryName = new URLSearchParams(location.search).get('name')
    //use Dynamic Routings
    const params = useParams()
    console.log(params)
    const countryName = params.country
    console.log(countryName)
    const [countrydata, setCountryData] = useState(null)
    const [notfound, setNotFound] = useState(false)






    useEffect(() => {
        // fullText=true ensures the API searches for the full country name, not partial matches.
        // fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        //     .then((res) => res.json())
        //     .then(([data]) => {
        //         console.log(data)
        //         setCountryData({
        //             name: data.name.common,
        //             nativeName: Object.values(data.name.nativeName)[0].common,
        //             population: data.population.toLocaleString('en-IN'),
        //             flags: data.flags.svg,
        //             region: data.region,
        //             capital: data.capital,
        //             subregion: data.subregion,
        //             topleveldomain: data.tld.join(', '),
        //             currency: Object.values(data.currencies).map((curr) => curr.name).join(', '),
        //             language: Object.values(data.languages).join(', ')




        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setNotFound(true)
        //     }
        //     )

        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                const [data] = response.data;
                console.log(data);
                setCountryData({
                    name: data.name.common,
                    nativeName: Object.values(data.name.nativeName)[0].common,
                    population: data.population.toLocaleString('en-IN'),
                    flags: data.flags.svg,
                    region: data.region,
                    capital: data.capital,
                    subregion: data.subregion,
                    topleveldomain: data.tld.join(', '),
                    currency: Object.values(data.currencies).map((curr) => curr.name).join(', '),
                    language: Object.values(data.languages).join(', ')
                });
            } catch (error) {
                console.log(error);
                setNotFound(true);
            }
        };

        fetchCountryData();


    }, []);

    if (notfound === true) {
        return <div className='text-[30px] text-center py-24'>The Country Not Found</div>
    }

    return countrydata === null ? (<Simmer />) : (
        <>
            <main className='p-6'>
                <div className="max-w-[1200px] mx-auto mt-8">
                    <span className="py-2 px-6 shadow-md rounded cursor-pointer inline-block">
                        <Link to='/'>
                            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                        </Link>
                    </span>
                    <div className="flex items-center gap-16 mt-16 max-[940px]:flex-col max-[940px]:items-start max-[940px]:mt-8 max-[940px]:gap-4">
                        <img
                            src={countrydata.flags}
                            alt={`flag`}
                            className="w-2/5 border border-gray-300 max-[940px]:w-full max-w-[400px]"
                        />
                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold my-10">{countrydata.name}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <p>
                                    <b>Native Name: {countrydata.nativeName}</b>
                                </p>
                                <p>
                                    <b>Population: {countrydata.population}</b>
                                </p>
                                <p>
                                    <b>Region: {countrydata.region}</b>
                                </p>
                                <p>
                                    <b>Sub Region: {countrydata.subregion}</b>
                                </p>
                                <p>
                                    <b>Capital: {countrydata.capital}</b>
                                </p>
                                <p>
                                    <b>Top Level Domain: {countrydata.topleveldomain}</b>
                                </p>
                                <p>
                                    <b>Currencies: {countrydata.currency}</b>
                                </p>
                                <p>
                                    <b>Languages: {countrydata.language}</b>
                                </p>
                            </div>
                            <div className="mt-12 flex items-start flex-wrap gap-2">
                                <b>Border Countries: </b>&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default CountryDetail