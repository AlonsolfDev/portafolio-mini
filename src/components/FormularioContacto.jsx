import { useState } from 'react'

function FormularioContacto() {
  const [valores, setValores] = useState({ nombre: '', correo: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setValores({ ...valores, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nuevos = {}

    if (!valores.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio'

    if (!valores.correo.trim()) nuevos.correo = 'El correo es obligatorio'
    else if (!/\S+@\S+\.\S+/.test(valores.correo)) nuevos.correo = 'Ingresa un correo válido'

    if (!valores.mensaje.trim()) nuevos.mensaje = 'El mensaje es obligatorio'

    setErrores(nuevos)

    if (Object.keys(nuevos).length > 0) {
      setEnviado(false)
      return
    }

    setEnviado(true)
    setValores({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <form className="formulario" noValidate onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={valores.correo}
          onChange={handleChange}
        />
        {errores.correo && <p className="error">{errores.correo}</p>}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={valores.mensaje}
          onChange={handleChange}
        />
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>
      {enviado && <p className="exito">¡Mensaje enviado con éxito!</p>}
    </form>
  )
}

export default FormularioContacto
