import React from 'react'
import Fila from './fila'

const Tabla = ({ datos, prioritarios, onTogglePrioridad }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Especie</th>
          <th>Embarcacion</th>
          <th>Fecha</th>
          <th>Kilos</th>
          <th>Estado</th>
          <th>Prioridad</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((fila) => (
          <Fila
            key={fila.id}
            {...fila}
            esPrioritario={prioritarios.includes(fila.id)}
            onTogglePrioridad={onTogglePrioridad}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Tabla