import { useState, useEffect } from 'react'
import Tabla from "./components/tabla.jsx"
import Filtro from "./components/filtro.jsx"
import "./App.css"

function App() {
  const [datos, setDatos] = useState([])
  const [filtro, setFiltro] = useState("")
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [prioritarios, setPrioritarios] = useState(() => {
    const guardados = localStorage.getItem("prioritarios")
    return guardados ? JSON.parse(guardados) : []
  })

  useEffect(() => {
    const fetchDesembarques = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/desembarques`)
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
        const data = await res.json()
        setDatos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    fetchDesembarques()
  }, [])

  useEffect(() => {
    localStorage.setItem("prioritarios", JSON.stringify(prioritarios))
  }, [prioritarios])

  const togglePrioridad = (id) => {
    setPrioritarios((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const datosFiltrados = datos.filter((fila) =>
    fila.especie.toLowerCase().includes(filtro.toLowerCase()) ||
    fila.estado.toLowerCase().includes(filtro.toLowerCase())
  )

  if (cargando) return <p className="mensaje">Cargando datos...</p>
  if (error) return <p className="mensaje error">⚠️ {error}</p>

  return (
    <main>
      <div className='div-input'>
        <Filtro onFiltrar={setFiltro} />
      </div>
      <div className='div-tabla'>
        <Tabla
          datos={datosFiltrados}
          prioritarios={prioritarios}
          onTogglePrioridad={togglePrioridad}
        />
      </div>
    </main>
  )
}

export default App