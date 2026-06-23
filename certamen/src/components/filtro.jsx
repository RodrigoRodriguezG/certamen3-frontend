import { useState } from 'react'

const Filtro = ({ onFiltrar }) => {
  const [valor, setValor] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const input = e.target.value

    // Validación solo letras y espacios
    if (/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/.test(input)) {
      setErrorMsg("Solo se permiten letras")
      return
    }

    setErrorMsg("")
    setValor(input)
    onFiltrar(input)
  }

  return (
    <div>
      <label htmlFor="filtro">Filtrar: </label>
      <input type="text" id="filtro" value={valor} onChange={handleChange}/>
      {errorMsg && <span className="error-msg">{errorMsg}</span>}
    </div>
  )
}

export default Filtro