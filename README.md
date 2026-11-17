# Proyecto Sazón - Momento 1

## Historia de Usuario
**Como** usuario visitante
**Quiero** ver el catálogo de productos de Sazón dividido en tarjetas claras
**Para** encontrar rápido el sabor que quiero y ver su precio

**Criterios de aceptación:**
- Ver Navbar, listado de productos y Footer
- Cada producto muestra imagen, nombre, precio y etiqueta
- Puedo buscar por nombre y la lista se filtra sin recargar

## Árbol de Componentes
App
├── Navbar
├── Home
│   └── ProductCard (x N)
└── Footer

## Buenas prácticas aplicadas
- Datos en `src/data/products.js`, no pegados en el JSX
- Datos pasan por props: `Home` -> `ProductCard` con `product={producto}`
- Estado local con `useState` para la lista y la búsqueda
- Cada componente con su propio `.css`
- Kit de marca en variables CSS en `App.css` (`:root`)
- 3 ramas: `main`, `dev`, `feature/momento-1-componentes`