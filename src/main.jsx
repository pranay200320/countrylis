import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './componets/Contact/Contact.jsx'

import Home from './componets/Home.jsx'
import Errorpage from './componets/ErrorPage/Errorpage.jsx'
import CountryDetail from './componets/CountryDetail.jsx'
//This createBrowserRouter function sets up the router with different routes for your app.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,

    children: [
      {
        path: '/',
        element: <div><Home /></div>
      },
      {
        path: '/contact',
        element: <div><Contact /></div>
      },
      {
        path: '/:country',
        element: <div><CountryDetail /></div>
      },

    ]
  },
])

createRoot(document.getElementById('root')).render(

  // its identfy the dangers librery and life cycle
  // A React tool that helps catch potential errors by running certain parts twice in development 
  <>
    {/* <StrictMode> */}

    {/* This connects the router (created earlier) to the app, allowing navigation to work. */}

    <RouterProvider router={router} />
    {/* </StrictMode> */}
  </>
)
