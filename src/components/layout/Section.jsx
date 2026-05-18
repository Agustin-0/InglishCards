// Su responsabilidad suele ser:

// separar bloques visuales
// manejar espaciado vertical (padding-top, padding-bottom)
// a veces fondo distinto
export default function Section({ children, className = "" }) {
  return (
    <section className={`py-16 ${className}`}>
      {children}
    </section>
  )
}