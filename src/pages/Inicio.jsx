import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section className="hero-container">
      <div className="hero-card">
        <h1>Alonso Lantaño</h1>
        <p className="hero-role">Estudiante de Ingenieria Civil Informatica</p>
        <p className="hero-description">
          Bienvenido a mi portafolio. Aquí encontrarás lo que he aprendido durante el semestre en la asignatura de Frontend.
        </p>
        <Link to="/proyectos" className="hero-button">
          Explorar
        </Link>
      </div>
    </section>
  );
}
