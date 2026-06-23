import React from 'react'
import PropTypes from 'prop-types'

const Fila = ({ id, especie, embarcacion, fecha, kilos, estado, esPrioritario, onTogglePrioridad }) => {
  return (
    <tr className={esPrioritario ? "fila-prioritaria" : ""}>
      <td>{id}</td>
      <td>{especie}</td>
      <td>{embarcacion}</td>
      <td>{fecha}</td>
      <td>{kilos}</td>
      <td>{estado}</td>
      <td>
        <button
          className={`btn-prioridad ${esPrioritario ? "activo" : ""}`}
          onClick={() => onTogglePrioridad(id)}
        >
          {esPrioritario ? "★ Prioritario" : "☆ Marcar"}
        </button>
      </td>
    </tr>
  )
}

Fila.propTypes = {
  id: PropTypes.number.isRequired,
  especie: PropTypes.string.isRequired,
  embarcacion: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  kilos: PropTypes.number.isRequired,
  estado: PropTypes.string.isRequired,
  esPrioritario: PropTypes.bool.isRequired,
  onTogglePrioridad: PropTypes.func.isRequired
}
export default Fila