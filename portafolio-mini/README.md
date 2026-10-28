# Mini Portafolio

Portafolio personal hecho con React, Vite y React Router. Tiene cinco secciones: Inicio, Sobre mí, Habilidades, Proyectos y Contacto.

## Requisitos e instalación

Node 20.19+ o 22.12+ y Git.

```bash
git clone https://github.com/AlonsolfDev/portafolio-mini.git
cd portafolio-mini
npm install
```

## Cómo ejecutarlo

```bash
npm run dev
```

Abre http://localhost:5173

## Estructura de carpetas

```
src/
  components/
    Header.jsx              menú con NavLink
    Footer.jsx              nombre y año
    Layout.jsx              Header + Outlet + Footer
    TarjetaProyecto.jsx     tarjeta que recibe props
    FormularioContacto.jsx  formulario con estado y validación
  pages/                    una página por ruta
  App.jsx                   definición de rutas
  main.jsx                  BrowserRouter
  index.css                 estilos
```

## Rutas

| Ruta | Página | Qué muestra |
|---|---|---|
| `/` | Inicio | Nombre, rol, bienvenida y botón Explorar |
| `/sobre-mi` | Sobre mí | Estudios, intereses y metas |
| `/habilidades` | Habilidades | Habilidades con nivel y herramientas |
| `/proyectos` | Proyectos | Tarjetas con enlace a GitHub |
| `/contacto` | Contacto | Formulario que valida y confirma |

## Dificultades y soluciones

1. **Carpetas con mayúscula.** `Components` y `Pages` quedaron con mayúscula inicial y los imports daban error. Las renombré a minúscula con `git mv`.
2. **Comandos de Git en la carpeta equivocada.** La terminal estaba fuera del proyecto y `git add` no encontraba los archivos. Entré a `portafolio-mini` antes de ejecutarlos.
3. **Commit olvidado.** Me salté el commit de una fase y lo hice después con `git add .`.
4. **Servidor caído.** `localhost` rechazaba la conexión porque `npm run dev` no estaba corriendo en la carpeta del proyecto.