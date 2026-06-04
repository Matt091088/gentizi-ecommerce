import { useState } from 'react'

import './styles/QuoteForm.css'

function QuoteForm() {

  /* Estados del formulario */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [furniture, setFurniture] = useState('')
  const [measurements, setMeasurements] = useState('')
  const [message, setMessage] = useState('')

  /* Enviar a WhatsApp */
  function sendToWhatsapp() {

    const text =

`Hola Gentizi.

Nombre: ${name}

Teléfono: ${phone}

Tipo de mueble: ${furniture}

Medidas aproximadas: ${measurements}

Detalles:

${message}`

    const whatsappUrl =

`https://wa.me/543765253186?text=${encodeURIComponent(text)}`

    window.open(
      whatsappUrl,
      '_blank'
    )
  }

  return (

    <section
      className="quote-form"
      id="presupuesto"
    >

      <div className="quote-container">

        <span>

          PRESUPUESTO PERSONALIZADO

        </span>

        <h2>

          Contanos tu proyecto

        </h2>

        <p>

          Diseñamos muebles a medida.
          Completá los datos y te
          responderemos por WhatsApp.

        </p>

        {/* Nombre */}
        <input

          type="text"

          placeholder="Tu nombre"

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }

        />

        {/* Teléfono */}
        <input

          type="text"

          placeholder="Tu teléfono"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
          }

        />

        {/* Tipo mueble */}
        <input

          type="text"

          placeholder="Ej: Cocina, Placard, Rack TV"

          value={furniture}

          onChange={(e) =>
            setFurniture(e.target.value)
          }

        />

        {/* Medidas */}
        <input

          type="text"

          placeholder="Medidas aproximadas"

          value={measurements}

          onChange={(e) =>
            setMeasurements(e.target.value)
          }

        />

        {/* Comentario */}
        <textarea

          placeholder="Contanos más detalles..."

          rows="6"

          value={message}

          onChange={(e) =>
            setMessage(e.target.value)
          }

        />

        <button

          onClick={sendToWhatsapp}

        >

          Solicitar Presupuesto

        </button>

      </div>

    </section>
  )
}

export default QuoteForm