import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Simmer from './Simmereffect/Simmer';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
    // const countryName = new URLSearchParams(location.search).get('name')
    //use Dynamic Routings
    // It allows you to get URL parameters from the current route.
    const params = useParams()
    const countryName = params.country
    // console.log(params)
    // console.log(countryName)
    const [countrydata, setCountryData] = useState(null)
    const [notfound, setNotFound] = useState(false)


    // console.log('hello')



    useEffect(() => {
        // console.log("Hii")

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
                    language: Object.values(data.languages).join(', '),
                    borders: []

                });
                if (!data.borders) {
                    data.borders = []
                }
                const fetchBorderCountries = async (borders) => {
                    try {
                        const borderRequests = borders.map((border) =>
                            // By Using The Alpha code 
                            axios.get(`https://restcountries.com/v3.1/alpha/${border}`)
                        );

                        const responses = await Promise.all(borderRequests);

                        const borderNames = responses.map(
                            (response) => response.data[0].name.common
                        );

                        setCountryData((prevState) => ({
                            ...prevState,
                            borders: borderNames,
                        }));
                    } catch (error) {
                        console.error("Error fetching border countries:", error);
                    }
                };

                // Call the function after fetching the main country data
                fetchBorderCountries(data.borders);

            } catch (error) {
                console.log(error);
                setNotFound(true);
            }
        };

        fetchCountryData();


    }, [countryName]);

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
                    <div className="flex items-center gap-16 mt-16 max-[940px]:flex-col max-[940px]:items-start max-[940px]:mt-8 max-[940px]:gap-4 ">
                        <img
                            src={countrydata.flags}
                            alt={`flag`}
                            className="w-2/5 border border-gray-300 max-[940px]:w-full max-w-[400px] shadow-md transition-all duration-200 ease-in-out bg-white no-underline text-inherit  hover:scale-[1.03] hover:shadow-lg "
                        />
                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold my-10 hover:scale-[1.03] ">{countrydata.name}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <p className='hover:scale-[1.03] hover:shadow-lg '>
                                    <b>Native Name: {countrydata.nativeName}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Population: {countrydata.population}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Region: {countrydata.region}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Sub Region: {countrydata.subregion}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Capital: {countrydata.capital}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Top Level Domain: {countrydata.topleveldomain}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Currencies: {countrydata.currency}</b>
                                </p>
                                <p className='hover:scale-[1.03] hover:shadow-lg'>
                                    <b>Languages: {countrydata.language}</b>
                                </p>
                            </div>
                            {countrydata.borders.length !== 0 && (
                                <div className="mt-12 flex items-start flex-wrap gap-3">
                                    <b className="text-lg">Border Countries:</b>
                                    {
                                        countrydata.borders.map((border) => (
                                            <Link
                                                key={border}
                                                to={`/${border}`}
                                                className="px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transition-transform"
                                            >
                                                {border}
                                            </Link>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default CountryDetail