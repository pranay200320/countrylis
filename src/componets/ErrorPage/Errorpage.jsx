import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Errorpage = () => {

    // useRouteError() is a hook provided by React Router that allows you to access the error thrown during route rendering or data loading.
    const error = useRouteError()
    return (
        <>
            <h1> Page Not Founded {error.status}</h1>
            <button className='border border-red-600 rounded-lg bg-slate-500 m-auto flex justify-center items-center my-12'>

                <Link to='/'>Go To Home Page</Link>
            </button>
        </>
    )
}

export default Errorpage