import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './features/Authentication/register'

import Home from './pages/Home'
import Ideaform from './pages/idea-form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Ideaform/>
    </>
  )
}

export default App
