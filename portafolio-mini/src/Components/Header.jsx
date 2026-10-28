import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/Sobre-mi">Sobre mí</NavLink></li>
          <li><NavLink to="/Habilidades">Habilidades</NavLink></li>
          <li><NavLink to="/Proyectos">Proyectos</NavLink></li>
          <li><NavLink to="/Contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header