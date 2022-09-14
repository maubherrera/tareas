const Header = ({titulo}) => {
  return (
    <header>
        <h1>{titulo}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Tareas'
}

export default Header