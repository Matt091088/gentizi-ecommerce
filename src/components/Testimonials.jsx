import "./styles/Testimonials.css";

function Testimonials() {

  const testimonials = [

    {
      name: "María Gómez",
      text: "Excelente calidad y atención personalizada. El mueble quedó perfecto en mi living."
    },

    {
      name: "Lucas Fernández",
      text: "Diseño moderno, materiales premium y entrega impecable. Súper recomendable."
    },

    {
      name: "Carolina Ruiz",
      text: "Nos hicieron un placard a medida increíble. Muy profesionales y atentos."
    }

  ];

  return (

    <section
  className="testimonials"
  data-aos="zoom-in"
>

      <span>

        Opiniones Reales

      </span>

      <h2>

        Lo que dicen nuestros clientes

      </h2>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="stars">

              ⭐⭐⭐⭐⭐

            </div>

            <p>

              "{item.text}"

            </p>

            <h4>

              {item.name}

            </h4>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Testimonials;