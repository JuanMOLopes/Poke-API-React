import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Pokedex from './pages/Pokedex'
import Favoritos from './pages/Favoritos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
