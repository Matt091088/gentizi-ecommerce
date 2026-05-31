import "./styles/Hero.css";

function Hero() {

  return (

  <section 
  id="inicio"
  className="hero">

    {/* Overlay */}
    <div className="hero-overlay"></div>

    {/* Contenido */}
    <div
  className="hero-content"
  data-aos="fade-up"
>

      <div className="hero-text">

        <h1>

  Muebles modernos
  para transformar
  tu hogar

</h1>

<span className="hero-tagline">

  Diseño • Elegancia • Calidad

</span>

      </div>

      <p>

        Diseños premium en melamina,
        aluminio y vidrio con estilo
        contemporáneo y funcional.

      </p>

      <div className="hero-buttons">

        <button className="hero-primary">

          Ver Colección

        </button>

        <button
          className="hero-secondary"
          onClick={() =>
            window.open(
              "https://wa.me/543765253186"
            )
          }
        >

          Presupuesto

        </button>

      </div>

    </div>

  </section>

);
}

export default Hero;