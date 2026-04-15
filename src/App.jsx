import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/home'
import Timeline from './components/timeline'
import Stats from './components/states'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Timeline />
      <Stats />
      <Footer />
    </>
  )
}

export default App
