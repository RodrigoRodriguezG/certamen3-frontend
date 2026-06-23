
Componentes

Los componentes son las piezas reutilizables de la interfaz. Cada uno tiene una responsabilidad específica.

App: Componente raíz. Orquesta el estado global, realiza el fetch a la API y distribuye los datos hacia los hijos.
Filtro: Renderiza el input de búsqueda. Gestiona su propio estado interno, valida la entrada y notifica al padre cuando cambia el valor.
Tabla: Recibe el array de desembarques y renderiza la estructura de la tabla, iterando sobre los datos para generar las filas.
Fila: Representa una fila individual. Muestra los datos de un desembarque y contiene el botón para marcar como prioritario.

Props

Las props son la forma en que los componentes padre pasan información a sus hijos. Son de solo lectura.

onFiltrar: función que pasa App a Filtro para actualizar el texto del filtro en el padre.
datos: array de desembarques filtrados que pasa App a Tabla.
prioritarios: array de IDs marcados como prioritarios que pasa App a Tabla.
onTogglePrioridad: función para activar o desactivar la prioridad de una fila, que viaja de App hasta Fila.
esPrioritario: booleano que indica si esa fila específica está marcada como prioritaria.

Estado con useState

El estado es la memoria interna de un componente. Cuando cambia, React vuelve a renderizar el componente automáticamente.

datos: array con todos los desembarques obtenidos desde la API.
filtro: texto actual del input de búsqueda.
cargando: booleano que indica si el fetch aún está en curso.
error: mensaje de error en caso de que el fetch falle.
prioritarios: array de IDs marcados como prioritarios, se inicializa desde localStorage.
valor: texto del input, controlado localmente por el componente Filtro.
errorMsg: mensaje de validación que se muestra bajo el input en Filtro.



useEffect permite ejecutar código con efectos secundarios después de que el componente se renderiza.

Fetch a la API: se ejecuta una sola vez al montar App. Llama a http://localhost:3001/desembarques con async/await y actualiza datos o error según el resultado.
Guardar en localStorage: se ejecuta cada vez que cambia el array prioritarios. Lo serializa con JSON.stringify y lo persiste bajo la clave "prioritarios".

JSX
JSX es la sintaxis que permite escribir estructura similar a HTML dentro de JavaScript. React lo transforma internamente durante la compilación. Se usa en este panel para renderizado condicional según el estado de carga o error, para iterar el array de datos con .map() y generar las filas dinámicamente, y para aplicar clases CSS condicionales según si una fila es prioritaria o no.

Manejo de Eventos

Los eventos permiten que la interfaz reaccione a las acciones del usuario.

onChange en el input de Filtro: dispara la función handleChange, que valida la entrada (solo letras, máximo 30 caracteres) y llama a onFiltrar con el valor limpio.
onClick en el botón de prioridad en Fila: llama a onTogglePrioridad con el id de la fila, que agrega o elimina ese ID del array prioritarios en App.







--------------Sugerencia de IA-----------


Codigo original creado al inicio por mi:

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <>
      <label htmlFor="filtro">Filtrar: </label>
      <input
        type="text"
        id="filtro"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </>
  )
}

---------------------------------------------------------

Codigo terminado con muuuchas sugerencias de IA: (creo que no hay mucho que decir aquí, mejora absolutamente y lo hace funcionar correctamente, prácticamente le di la estructura inicial. importante aclarar que funciones como validaciones y demás si las hice y pensé yo pero las mejoraba IA)

import { useState } from 'react'
import PropTypes from "prop-types"

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

Filtro.propTypes = {
  onFiltrar: PropTypes.func.isRequired
}

export default Filtro
---------------------------------------------------------------------------

Sugerencias de SonarQube:


#1
.btn-prioridad.activo {
  background-color: #f39c12;
  color: #fff;		text does not meet the minimal contrast requirements with its background
  border-color: #e67e22;
}
esta se ignora debido a que es una sugerencia de accesibilidad que en la practica no es tan notoria (al menos en mi pantalla), habla de que los colores son muy parecidos por lo que podría no verse bien. pero no es el caso


#2
en los componentes hay datos sin prop validation (ejemplo: "datos" is missing in props validation), indicando que no se valida. por lo que se importa PropTypes from 'prop-types' y se añaden las validaciones de prop al final de los componentes, de esta manera se implementa esta sugerencia
