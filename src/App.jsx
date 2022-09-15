import { useState } from "react"
import Header from "./components/Header"
import Tareas from "./components/Tareas"

function App() {

  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '02 de Febrero de 2022',
        terminado: true,
    },
    {
        id: 2,
        texto: 'Comprar en el supermercado',
        fecha: '10 de Febrero de 2022',
        terminado: false,
    },
    {
        id: 3,
        texto: 'Hacer app en React',
        fecha: '11 de Febrero de 2022',
        terminado: false,
    }
])

//*funcion para eliminar una tarea
  const borrarTarea = (id) => {
      //console.log('borrar ', id)
      setTareas(tareas.filter((tarea)=> tarea.id !== id))
  }

  return (
   <div className="container">
    <Header titulo={'Tareas'}/>
    {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea} />  : 'No hay tareas para mostrar'}
   </div>
  )
}

export default App
