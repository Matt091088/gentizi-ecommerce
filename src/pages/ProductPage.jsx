import { useState } from 'react'
import { useParams } from 'react-router-dom'

/* Datos de productos */
import products from '../data/products'

/* Card reutilizable */
import ProductCard from '../components/ProductCard'

function ProductPage({ addToCart }) {

  /* Obtiene el nombre desde la URL */
  const { productName } = useParams()

  /* Busca el producto actual */
  const product = products.find(

    (item) =>

      item.title
        .toLowerCase()
        .replaceAll(' ', '-')

      === productName

  )

  /* Si no encuentra producto */
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

  /* Productos de la misma categoría */
  const relatedProducts = products.filter(

    (item) =>

      item.category === product.category &&

      item.id !== product.id

  ).slice(0, 3)

    /* Imagen seleccionada */
const [selectedImage, setSelectedImage] = useState(

  product.images

    ? product.images[0]

    : product.image
)

   const whatsappMessage =

  `Hola, me interesa el producto ${product.title}.
¿Podrían enviarme más información?`

  return (

    <>

      {/* ========================= */}
      {/* Página principal producto */}
      {/* ========================= */}

      <section
        style={{
          padding: '140px 8%',
          background: '#111',
          minHeight: '100vh',
          color: 'white'
        }}
      >

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',

            gap: '50px',
            alignItems: 'center'
          }}
        >

       {/* Imagen producto */}
<div>

  {/* Imagen principal */}
  <img

    src={selectedImage}

    alt={product.title}

    style={{
      width: '100%',
      borderRadius: '24px'
    }}

  />

  {/* Miniaturas */}
  <div
    style={{
      display: 'flex',
      gap: '15px',
      marginTop: '20px'
    }}
  >

    {(product.images || [product.image]).map(

      (image, index) => (

        <img

          key={index}

          src={image}

          alt={product.title}

          onClick={() =>
            setSelectedImage(image)
          }

          style={{
            width: '90px',
            height: '90px',
            objectFit: 'cover',
            borderRadius: '12px',
            cursor: 'pointer',

            border:
              selectedImage === image
                ? '3px solid #c8a94d'
                : '2px solid #333'
          }}

        />

      )
    )}

  </div>

</div>

          {/* Información producto */}
          <div>
            <p
  style={{
    color: '#888',
    marginBottom: '20px'
  }}
>

  Inicio / {product.category} / {product.title}

</p>
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

            <div
  style={{
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#ddd'
  }}
>

  <span>
    ✓ Fabricación a medida
  </span>

  <span>
    ✓ Melamina Premium 18 mm
  </span>

  <span>
    ✓ Entrega en toda la región
  </span>

  <span>
    ✓ Garantía de calidad
  </span>

</div>

<p
  style={{
    color: '#c8a94d',
    fontWeight: 'bold',
    marginBottom: '30px'
  }}
>

  6 cuotas de ${(parseInt(product.price.replace(/\D/g, '')) / 6).toFixed(0)}

</p>

            {/* ========================= */}
            {/* Especificaciones */}
            {/* ========================= */}

            <div
              style={{
                margin: '30px 0',
                padding: '25px',
                border: '1px solid #333',
                borderRadius: '16px'
              }}
            >

              <h3
                style={{
                  marginBottom: '20px',
                  color: '#c8a94d'
                }}
              >

                Especificaciones

              </h3>

              <p>

                <strong>Medidas:</strong>{' '}

                {product.width} x {product.height} x {product.depth}

              </p>

              <p>

                <strong>Material:</strong>{' '}

                {product.material}

              </p>

              <p>

                <strong>Entrega estimada:</strong>{' '}

                {product.delivery}

              </p>

              <p>

                <strong>Colores:</strong>{' '}

                {product.colors?.join(' • ')}

              </p>

            </div>

            {/* Personalización */}

            <div
  style={{
    background: '#1a1a1a',
    border: '1px solid #333',
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px'
  }}
>

  🛠️ Fabricado especialmente para vos

  <br />

  📅 Tiempo de producción: {product.delivery}

</div>

            {/* ========================= */}
            {/* Botones */}
            {/* ========================= */}

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

                rel="noopener noreferrer"

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

              <a

  href={`https://wa.me/5493765253186?text=${encodeURIComponent(whatsappMessage)}`}

  target="_blank"

  rel="noopener noreferrer"

  style={{
    padding: '16px 30px',
    borderRadius: '14px',
    background: '#25D366',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  }}
>

  Consultar por WhatsApp

</a>


            </div>

          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* Productos relacionados */}
      {/* ========================= */}

      {relatedProducts.length > 0 && (

        <section
          style={{
            padding: '80px 8%',
            background: '#111',
            color: 'white'
          }}
        >

          <h2
            style={{
              marginBottom: '40px',
              color: '#c8a94d'
            }}
          >

            También te puede interesar

          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',

              gap: '30px'
            }}
          >

            {relatedProducts.map((item) => (

              <ProductCard

                key={item.id}

                product={item}

                addToCart={addToCart}

                setSelectedProduct={() => {}}

                setQuickViewProduct={() => {}}

              />

            ))}

          </div>

        </section>

      )}

    </>

  )
}

export default ProductPage