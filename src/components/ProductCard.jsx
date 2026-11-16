import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <img src={product.img} alt={product.name} />
      <span className="tag">{product.tag}</span>
      <h3>{product.name}</h3>
      <p>${product.price.toLocaleString()}</p>
      <button>Agregar</button>
    </article>
  )
}