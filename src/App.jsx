import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Lander from './component/Lander'

import CardOne from './component/CardOne'
import CardTwo from './component/CardTwo'
import CardThree from './component/CardThree'
import CardFour from './component/CardFour'
import Team from './component/Team'
import Routing from './component/Routing'
import Conclude from './component/Conclude'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Lander/>
      <CardOne/>
      <Routing/>
      <CardTwo/>
      <CardThree/>
      <CardFour/>
      <Team/>
      <Conclude/>
      <Footer/>
    </>
  )
}

export default App
