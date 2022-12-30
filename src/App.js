// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import { Link, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div id='nav'>
      <nav>
        <Link id="signup" to="/"> Sign-UP </Link>
        <Link id="dashboard" to="/dashboard"> Dashboard </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}
export default App;