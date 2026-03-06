import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="App">
        {/* 1. Call the Navbar at the top */}
        <Navbar />

        {/* 2. Rest of your page content */}

      </div>
    </>
  )
}

export default App
