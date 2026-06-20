import "./styles/Cart.css";

function Cart({

  cartItems,

  increaseQuantity,

  decreaseQuantity,

  isCartOpen,

  setIsCartOpen,

  setCartItems

}) {

  const total = cartItems.reduce(

  (acc, item) =>

    acc + Number(item.price) * item.quantity,

  0

)

function handleCheckout() {

 const productsText = cartItems

  .map(

    item =>

`• ${item.title} x${item.quantity}

  Terminación: ${item.selectedColor || 'Sin especificar'}`

  )

  .join('\n')

  const message =

`Hola, quiero realizar el siguiente pedido:

${productsText}

Total: $${total.toLocaleString('es-AR')}

Nombre:
Localidad:
Forma de pago:`

  window.open(

    `https://wa.me/5493765253186?text=${encodeURIComponent(message)}`,

    '_blank'

  )

  setIsCartOpen(false)

  setCartItems([])

}


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
                  {/* ========================= */}
{/* TERMINACIÓN ELEGIDA       */}
{/* ========================= */}

{item.selectedColor && (

  <p
    style={{
      fontSize: '0.85rem',
      color: '#c8a94d',
      margin: '5px 0'
    }}
  >

    {item.selectedColor}

  </p>

)}

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

              <button

  className="checkout-button"

  onClick={handleCheckout}

>

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