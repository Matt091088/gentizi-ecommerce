/* Hook para leer parámetros de la URL */
import { useParams } from 'react-router-dom'

/* Componentes */
import Products from '../components/Products'

/* Productos */
import products from '../data/products'


function CategoryPage({

  addToCart,
  searchText,
  setSelectedProduct,
  setQuickViewProduct
}) {

  /* Obtiene categoría desde URL */
  const { categoryName } = useParams()

  /* Filtra productos */
  const filteredProducts = products.filter(

    (product) =>

      product.category.toLowerCase() ===
      categoryName.toLowerCase()
  )

  return (

    <section>

      {/* Título */}
      <div
        style={{
          padding: '120px 8% 40px',
          background: '#111',
          color: 'white'
        }}
      >

        <h1
          style={{
            fontSize: '3rem',
            textTransform: 'capitalize'
          }}
        >

          {categoryName}

        </h1>

      </div>

      {/* Productos */}
      <Products

        addToCart={addToCart}

        searchText={searchText}

        selectedCategory={categoryName}

        setSelectedProduct={setSelectedProduct}

        setQuickViewProduct={setQuickViewProduct}
      />

    </section>
  )
}

export default CategoryPage