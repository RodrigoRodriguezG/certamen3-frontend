import React from 'react'

const Fila = ({ id, especie, embarcacion, fecha, kilos, estado, prioridad }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{especie}</td>
      <td>{embarcacion}</td>
      <td>{fecha}</td>
      <td>{kilos}</td>
      <td>{estado}</td>
      <td>{prioridad}</td>
    </tr>
  )
}

export default Fila