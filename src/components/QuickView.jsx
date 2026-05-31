import "./styles/QuickView.css";

function QuickView({

  product,

  closeModal,

  addToCart

}) {

  if (!product) return null;

  return (

    <div
      className="quickview-overlay"
      onClick={closeModal}
    >

      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Cerrar */}
        <button
          className="quickview-close"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* Imagen */}
        <div className="quickview-image">

          <img
            src={product.image}
            alt={product.title}
          />

        </div>

        {/* Info */}
        <div className="quickview-info">

          <span>

            {product.category}

          </span>

          <h2>

            {product.title}

          </h2>

          <p className="quickview-price">

            {product.price}

          </p>

          <p>

            {product.description}

          </p>

          <button
            className="quickview-button"
            onClick={() => addToCart(product)}
          >

            Agregar al carrito

          </button>

        </div>

      </div>

    </div>
  );
}

export default QuickView;