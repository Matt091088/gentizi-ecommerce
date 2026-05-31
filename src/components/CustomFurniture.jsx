import "./styles/CustomFurniture.css";

function CustomFurniture() {

  return (

    <section
  className="custom-furniture"
  data-aos="fade-right"
>

      {/* Imagen */}
      <div className="custom-image">

        <img
          src="https://images.unsplash.com/photo-1616594039964-3d4d0dca2d3f?q=80&w=1200&auto=format&fit=crop"
          alt="Custom Furniture"
        />

      </div>

      {/* Texto */}
      <div className="custom-content">

        <span>

          Diseños Exclusivos

        </span>

        <h2>

          Muebles a Medida
          para cada espacio

        </h2>

        <p>

          Creamos muebles personalizados
          en melamina, aluminio y vidrio,
          adaptados a tu estilo, medidas
          y necesidades.

        </p>

        <ul>

          <li>✔ Placares modernos</li>

          <li>✔ Cocinas premium</li>

          <li>✔ Paneles TV</li>

          <li>✔ Vestidores LED</li>

        </ul>

        <button
          className="custom-button"
          onClick={() =>
            window.open(
              "https://wa.me/543765253186"
            )
          }
        >

          Solicitar Presupuesto

        </button>

      </div>

    </section>

  );
}

export default CustomFurniture;