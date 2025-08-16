import { useState } from 'react'
import AdminRoutes from './Router/AdminRoutes'
import './App.css'
import PublicHome from './Public/PublicHome'

function App() {

  const [isLogged,SeLogged] = useState(false)

  return (
    <div>
      {isLogged ? <AdminRoutes/> : <PublicHome/> }
    </div>
  )
}

export default App
