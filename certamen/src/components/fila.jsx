import React from 'react'

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

export default Fila