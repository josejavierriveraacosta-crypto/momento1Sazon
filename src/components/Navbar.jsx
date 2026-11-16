import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">SAZÓN<span>.</span></h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
      </ul>
      <button>Ver Catálogo</button>
    </nav>
  )
}