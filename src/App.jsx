import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Contacto from './pages/Contacto/Contacto'

import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App