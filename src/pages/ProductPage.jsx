/* Hook para leer URL */
import { useParams } from 'react-router-dom'

/* Productos */
import products from '../data/products'


function ProductPage({ addToCart }) {

  /* Obtiene slug */
  const { productName } = useParams()

  /* Busca producto */
  const product = products.find(

    (item) =>

      item.title
        .toLowerCase()
        .replaceAll(' ', '-')

      === productName
  )

  /* Si no existe */
  if (!product) {

    return (

      <h1
        style={{
          color: 'white',
          padding: '150px 8%'
        }}
      >

        Producto no encontrado

      </h1>
    )
  }

  return (

    <section
      style={{
        padding: '140px 8%',
        background: '#111',
        minHeight: '100vh',
        color: 'white'
      }}
    >

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}
      >

        {/* Imagen */}
        <div>

          <img

            src={product.image}

            alt={product.title}

            style={{
              width: '100%',
              borderRadius: '24px'
            }}
          />

        </div>

        {/* Info */}
        <div>

          <span
            style={{
              color: '#c8a94d',
              letterSpacing: '3px'
            }}
          >

            GENTIZI MUEBLES

          </span>

          <h1
            style={{
              fontSize: '3rem',
              margin: '20px 0'
            }}
          >

            {product.title}

          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >

            {product.description}

          </p>

          <h2
            style={{
              margin: '30px 0',
              color: '#c8a94d'
            }}
          >

            {product.price}

          </h2>

          {/* Botones */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >

            <button

              onClick={() =>
                addToCart(product)
              }

              style={{
                padding: '16px 30px',
                border: 'none',
                borderRadius: '14px',
                background: '#c8a94d',
                color: '#111',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >

              Agregar al carrito

            </button>

            <a

              href={product.paymentLink}

              target="_blank"

              style={{
                padding: '16px 30px',
                borderRadius: '14px',
                border: '1px solid #c8a94d',
                color: '#c8a94d',
                textDecoration: 'none'
              }}
            >

              Comprar ahora

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductPage