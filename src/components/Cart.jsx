import "./styles/Cart.css";

function Cart({

  cartItems,

  increaseQuantity,

  decreaseQuantity,

  isCartOpen,

  setIsCartOpen

}) {

  const total = cartItems.reduce((acc, item) => {

    const numericPrice = Number(
      item.price
        .replace('$', '')
        .replace(/\./g, '')
    );

    return acc + (numericPrice * item.quantity);

  }, 0);

  return (

    <>

      {/* Overlay */}
      {isCartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        ></div>

      )}

      {/* Carrito */}
      <aside className={isCartOpen ? "cart open" : "cart"}>

        {/* Header */}
        <div className="cart-header">

          <h2>Carrito</h2>

          <button
            className="close-cart"
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>

        </div>

        {/* Carrito vacío */}
        {cartItems.length === 0 ? (

          <p>Tu carrito está vacío</p>

        ) : (

          <>

            {cartItems.map((item, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-info">

                  <h4>{item.title}</h4>

                  <p>{item.price}</p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            ))}

            {/* Footer */}
            <div className="cart-footer">

              <h3>

                Total: $

                {total.toLocaleString('es-AR')}

              </h3>

              <button className="checkout-button">

                Finalizar Compra

              </button>

            </div>

          </>

        )}

      </aside>

    </>

  );

}

export default Cart;