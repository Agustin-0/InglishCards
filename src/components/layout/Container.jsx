// Container controla el ancho del contenido y su alineación horizontal.

// No define “qué parte” de la página es. Define hasta dónde puede crecer el contenido.

// Normalmente:

// ancho máximo (max-width)
// centrado (mx-auto)
// padding lateral (px-4)
export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {children}
    </div>
  )
}