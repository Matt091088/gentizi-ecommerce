import "./styles/ProductCard.css";

function ProductCard({

  product,

  addToCart,

  setSelectedProduct,

  setQuickViewProduct

}) {

  return (

    <div
      className="product-card"

      onClick={() => {

        setSelectedProduct(product);

        setQuickViewProduct(product);

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }}
    >

      {/* Imagen */}
      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.title}
        />

        {/* Overlay */}
        <div className="product-overlay">

          <button
            onClick={(e) => {

              e.stopPropagation();

              addToCart(product);

            }}
          >

            Agregar

          </button>

        </div>

        {/* Badge */}
        {product.isNew && (

          <span className="product-badge">

            NUEVO

          </span>

        )}

      </div>

      {/* Info */}
      <div className="product-info">

        <span className="product-category">

          {product.category}

        </span>

        <h3>

          {product.title}

        </h3>

        <p className="product-price">

          {product.price}

        </p>

      </div>

    </div>

  );
}

export default ProductCard;