import './styles/WorkProcess.css'

function WorkProcess() {

  const steps = [

    {
      number: '01',
      title: 'Contanos tu idea',
      description:
        'Enviános fotos, medidas o una referencia del mueble que imaginás.'
    },

    {
      number: '02',
      title: 'Diseñamos tu proyecto',
      description:
        'Te asesoramos en materiales, colores y distribución para aprovechar cada espacio.'
    },

    {
      number: '03',
      title: 'Fabricamos a medida',
      description:
        'Construimos cada mueble según tus necesidades con materiales de calidad.'
    },

    {
      number: '04',
      title: 'Entrega e instalación',
      description:
        'Coordinamos la entrega y dejamos todo listo para disfrutar.'
    }

  ]

  return (

    <section className="work-process">

      <div className="process-header">

        <span>¿CÓMO TRABAJAMOS?</span>

        <h2>

          Un proceso simple,
          transparente y personalizado

        </h2>

      </div>

      <div className="process-grid">

        {steps.map((step) => (

          <div
            key={step.number}
            className="process-card"
          >

            <div className="process-number">

              {step.number}

            </div>

            <h3>

              {step.title}

            </h3>

            <p>

              {step.description}

            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default WorkProcess