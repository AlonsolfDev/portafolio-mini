import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="inicio">
      <h1>Tu Nombre</h1>
      <p className="rol">Estudiante de Ingeniería en Informática</p>
      <p>Bienvenido a mi portafolio!.</p>
      <Link to="/proyectos" className="boton">Explorar</Link>
    </section>
  )
}

export default Inicio
