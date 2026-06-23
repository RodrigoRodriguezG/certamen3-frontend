import { useState } from 'react'

const Filtro = ({ onFiltrar }) => {
  const [valor, setValor] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const LIMITE = 30

  const handleChange = (e) => {
    const input = e.target.value

    if (input.length > LIMITE) {
      setErrorMsg(`Máximo ${LIMITE} caracteres`)
      return
    }

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
      <input
        type="text"
        id="filtro"
        value={valor}
        onChange={handleChange}
        placeholder="Especie o estado..."
        maxLength={LIMITE}
      />
      <span className="contador">{valor.length}/{LIMITE}</span>
      {errorMsg && <span className="error-msg">{errorMsg}</span>}
    </div>
  )
}

export default Filtro