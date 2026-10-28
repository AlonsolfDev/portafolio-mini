function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      {enlace ? (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      ) : (
        <span>Sin repositorio</span>
      )}
    </article>
  )
}

export default TarjetaProyecto