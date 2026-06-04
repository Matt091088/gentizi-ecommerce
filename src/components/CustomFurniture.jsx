import "./styles/CustomFurniture.css";
import categoriaCocinas from '../assets/images/categoria-cocinas.jpg'

function CustomFurniture() {

  return (

    <section
  className="custom-furniture"
  data-aos="fade-right"
>

      {/* Imagen */}
      <div className="custom-image">

        <img
  src={categoriaCocinas}
  alt="Cocinas a medida Gentizi"
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

          Consultar por Whatsapp

        </button>

      </div>

    </section>

  );
}

export default CustomFurniture;