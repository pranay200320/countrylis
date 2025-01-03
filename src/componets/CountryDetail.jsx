import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CountryDetail = () => {
    const countryName = new URLSearchParams(location.search).get('name')
    console.log(countryName)
    const [countrydata, setCountryData] = useState({})



    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())


    }, []);
    {
        console.log(countrydata)
    }
    return (
        <>
            <main className='p-6'>
                <div className="max-w-[1200px] mx-auto mt-8">
                    <span className="py-2 px-6 shadow-md rounded cursor-pointer inline-block">
                        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                    </span>
                    <div className="flex items-center gap-16 mt-16 max-[940px]:flex-col max-[940px]:items-start max-[940px]:mt-8 max-[940px]:gap-4">
                        <img
                            src=''
                            alt={`flag`}
                            className="w-2/5 border border-gray-300 max-[940px]:w-full max-w-[400px]"
                        />
                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold my-10">{countrydata.name}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <p>
                                    <b>Native Name:{countrydata.nativeName}</b>
                                </p>
                                <p>
                                    <b>Population:</b>
                                </p>
                                <p>
                                    <b>Region:</b>
                                </p>
                                <p>
                                    <b>Sub Region:</b>
                                </p>
                                <p>
                                    <b>Capital:</b>
                                </p>
                                <p>
                                    <b>Top Level Domain:</b>
                                </p>
                                <p>
                                    <b>Currencies:</b>
                                </p>
                                <p>
                                    <b>Languages:</b>
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