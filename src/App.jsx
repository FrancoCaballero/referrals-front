import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <nav>
        <Link to="/registro">Registro</Link>
        <Link to="/invitacion">Invitación</Link>
        <Link to="/referidos">Referidos</Link>
      </nav>

      <Outlet/>
    </div>
  )
}

export default App
