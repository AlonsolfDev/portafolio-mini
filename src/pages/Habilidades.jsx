const habilidades = [
  { nombre: 'Python', nivel: 'Intermedio' },
  { nombre: 'React', nivel: 'Básico' },
  { nombre: 'HTML y CSS', nivel: 'Intermedio' },
  { nombre: 'SQL', nivel: 'Intermedio' },
]

function Habilidades() {
  return (
    <section className="habilidades">
      <h1>Habilidades</h1>

      {habilidades.map((h) => (
        <article key={h.nombre} className="tarjeta">
          <h2>{h.nombre}</h2>
          <p>{h.nivel}</p>
        </article>
      ))}

      <h2>Herramientas</h2>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>
    </section>
  )
}

export default Habilidades
