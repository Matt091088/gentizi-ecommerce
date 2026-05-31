import "./styles/ProductDetail.css";

function ProductDetail({ product, addToCart }) {

  if (!product) return null;

  return (

    <section
  className="product-detail"
  data-aos="fade-left"
>

      {/* Imagen */}
      <div className="detail-image-container">

        <img
          src={product.image}
          alt={product.title}
          className="detail-image"
        />

        {product.isNew && (

          <span className="detail-badge">
            NUEVO
          </span>

        )}

      </div>

      {/* Info */}
      <div className="detail-info">

        <span className="product-category">
          {product.category}
        </span>

        <h2>{product.title}</h2>

        <p className="price">
          {product.price}
        </p>

        <p className="description">

          Diseño moderno fabricado en melamina premium,
          ideal para aportar elegancia, funcionalidad y
          estilo contemporáneo a tu hogar.

        </p>

        {/* Specs */}
        <div className="specs-box">

          <p>
            <strong>Material:</strong> Melamina premium
          </p>

          <p>
            <strong>Terminación:</strong> Textura moderna
          </p>

          <p>
            <strong>Entrega:</strong> 7 a 15 días
          </p>

          <p>
            <strong>Garantía:</strong> 12 meses
          </p>

        </div>

        <p className="installments">
          Hasta 12 cuotas sin interés
        </p>

        {/* Botones */}
        <div className="detail-buttons">

          {/* Carrito */}
          <button
            className="buy-button"
            onClick={() => addToCart(product)}
          >

            Agregar al carrito

          </button>

          {/* Mercado Pago */}
          <button
            className="mercadopago-button"
            onClick={() =>
              window.open(product.paymentLink)
            }
          >

            Comprar Ahora

          </button>

          {/* WhatsApp */}
          <button
            className="whatsapp-button"
            onClick={() =>
              window.open(
                `https://wa.me/543765253186?text=Hola quiero consultar por ${product.title}`
              )
            }
          >

            Consultar Diseño

          </button>

        </div>

      </div>

    </section>

  );
}

export default ProductDetail;