
import { Outlet } from 'react-router-dom'
import Header from './componets/Header'

function App() {


  return (
    <>


      <Header />
      {/* <Outlet /> is a special component from React Router. It renders the child route inside the parent component (App). */}
      <Outlet />



    </>
  )
}

export default App
