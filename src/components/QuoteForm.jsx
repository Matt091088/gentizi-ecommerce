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

  if (!name || !phone || !furniture) {

    alert(
      'Por favor completá nombre, teléfono y tipo de mueble.'
    )

    return
  }

  const text =

`Hola Gentizi 👋

Quiero solicitar un presupuesto.

👤 Nombre: ${name}

📞 Teléfono: ${phone}

🪑 Tipo de mueble: ${furniture}

📐 Medidas aproximadas: ${measurements}

📝 Detalles:

${message}

Gracias.`

  const whatsappUrl =

`https://wa.me/543765253186?text=${encodeURIComponent(text)}`

  window.open(
    whatsappUrl,
    '_blank'
  )

  /* Limpiar formulario */
  setName('')
  setPhone('')
  setFurniture('')
  setMeasurements('')
  setMessage('')
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
         <select

  value={furniture}

  onChange={(e) =>
    setFurniture(e.target.value)
  }

>

  <option value="">
  Seleccioná el tipo de mueble
</option>

  <option value="Cocina">

    Cocina

  </option>

  <option value="Placard">

    Placard

  </option>

  <option value="Vestidor">

    Vestidor

  </option>

  <option value="Panel TV">

    Panel TV

  </option>

  <option value="Otro">

    Otro

  </option>

</select>


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