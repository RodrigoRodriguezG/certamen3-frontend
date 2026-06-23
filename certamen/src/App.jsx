import { useState } from 'react'
import './App.css'
import Tabla from "./components/tabla.jsx"
import Fila from "./components/fila.jsx"
import Filtro from "./components/filtro.jsx"

function App() {

  return (
    <>
      <main>
        <div className='div-input'>
          <Filtro />
        </div>

        <div className='div-tabla'>
          <Tabla/>
        </div>

      </main>
    </>
  )
}

export default App
