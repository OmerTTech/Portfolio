import { useState } from 'react'
import AdminRoutes from './Router/AdminRoutes'
import './App.css'
import PublicHome from './Public/PublicHome'
import { useSelector } from 'react-redux';

function App() {
  const isDarkmode = useSelector((state) => state.darkmode.darkmode);
  const [isLogged,SeLogged] = useState(false)

  return (
    <div className={isDarkmode ? "dark dark:bg-body-dark text-white" : ""}>
      {isLogged ? <AdminRoutes/> : <PublicHome/> }
    </div>
  )
}

export default App
