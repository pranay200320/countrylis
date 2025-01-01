import './App.css'
import Header from './componets/Header'
import SerchBar from './componets/SearchBar'
import Select from './componets/Select'
import CountryList from './componets/CountryList'
import { useState } from 'react'

function App() {

  const [query, setQuery] = useState('')

  return (
    <>


      <Header />

      <main>

        <div className='search-filter-container'>

          <SerchBar setQuery={setQuery} />
          <Select />
        </div>
        <CountryList query={query} />

      </main>
    </>
  )
}

export default App
