import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header'
import SerchBar from './componets/SearchBar'
import Select from './componets/Select'
import CountryList from './componets/CountryList'

function App() {

  return (
    <>
      <Header />

      <main>

        <div className='search-filter-container'>

          <SerchBar />
          <Select />
        </div>
        <CountryList />

      </main>
    </>
  )
}

export default App
