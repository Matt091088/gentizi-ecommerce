// Componente Modal
function Modal(props) {

  return (

    // Fondo oscuro
    <div className="modal-overlay">

      {/* Caja modal */}
      <div className="modal">

        <img
  className="modal-image"
  src={props.image}
  alt={props.title}
/>

        {/* Título */}
        <h2>
          {props.title}
        </h2>

        {/* Precio */}
        <p>
  Diseño moderno en melamina premium.
</p>
        <p>
          {props.price}
        </p>

        {/* Botón comprar */}
        <button>
          Comprar
        </button>

        {/* Botón cerrar */}
        <button onClick={props.closeModal}>
          Cerrar
        </button>

      </div>

    </div>

  )
}

export default Modal