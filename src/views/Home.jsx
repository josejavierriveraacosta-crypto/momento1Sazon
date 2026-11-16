import { useState } from 'react'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './Home.css'

export default function Home() {
  const [listaProductos] = useState(products)
  const [busqueda, setBusqueda] = useState("")

  const filtrados = listaProductos.filter(p =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="home">
      <h2>Nuestros Sabores</h2>
      <input
        placeholder="Buscar sazón..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="grid">
        {filtrados.map(producto => (
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
    </section>
  )
}