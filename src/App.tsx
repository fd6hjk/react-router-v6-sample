import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>home</div>
      <Link to="/Page1">page1</Link>
      <Link to="/Page2">page2</Link>
      <Outlet />
    </div>
  )
}

export default App
