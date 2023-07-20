import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './features/Authentication/register'
import Allroutes from './Allroutes/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Allroutes/>
    </>
  )
}

export default App
