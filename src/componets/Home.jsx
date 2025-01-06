import SerchBar from './SearchBar'
import Select from './Select'
import CountryList from './CountryList'
import { useState } from 'react'


const Home = () => {

    const [query, setQuery] = useState('')

    return (
        <>
            <main className='p-6'>
                {/* serach filter container */}

                <div className='max-w-[1200px]  mx-auto mt-4 mb-12 flex justify-between gap-6 sm:flex-col md:flex-row lg:flex-row'>

                    <SerchBar setQuery={setQuery} />

                </div>
                <CountryList query={query} />

            </main>
        </>
    )
}

export default Home