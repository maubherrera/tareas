import Button from "./Button"

const Header = ({titulo}) => {
//*si pasamos este prop como funcion 
  const onClick = () =>{
    console.log('click')
  }

  // const Saludo = () =>{
  //   console.log('Hola Mauricio')
  // }


  return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto='Agregar' color= 'black' onClick={onClick}/>
        {/* <Button texto='Saludar' color= 'green' onClick={Saludo}/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Tareas'
}
//*de esta manera podemos agregar estilos mediante un constante y ya no tener que llamar los valores de estilo a{adiendo cada valor a la linea de estilo con dos llaves {{color: 'red', backgroundColor: 'black'}}
// const estiloEncabezado = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header