import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Backend ORM',
    descripcion: 'Taller de Desarrollo de Backend: persistencia con ORM, migraciones con Alembic y PostgreSQL en Docker.',
    enlace: 'https://github.com/AlonsolfDev/icinf1108-taller2-02',
  },
  {
    titulo: 'Portafolio web estático',
    descripcion: 'Portafolio personal hecho con HTML, CSS y JavaScript para el curso de Frontend.',
    enlace: 'https://github.com/ICINF1107-2026/web01alonso',
  },
]

function Proyectos() {
  return (
    <section className="proyectos">
      <h1>Proyectos</h1>

      {proyectos.map((p) => (
        <TarjetaProyecto
          key={p.titulo}
          titulo={p.titulo}
          descripcion={p.descripcion}
          enlace={p.enlace}
        />
      ))}
    </section>
  )
}

export default Proyectos
