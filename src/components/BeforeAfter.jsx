import { useState } from 'react'

import './styles/BeforeAfter.css'

import before1 from '../assets/images/before1.jpg'
import after1 from '../assets/images/after1.jpg'

import before2 from '../assets/images/before2.JPEG'
import after2 from '../assets/images/after2.jpg'

import before4 from '../assets/images/before4.jpg'
import after4 from '../assets/images/after4.jpg'

import before5 from '../assets/images/before5.jpg'
import after5 from '../assets/images/after5.jpg'

import before6 from '../assets/images/before6.jpg'
import after6 from '../assets/images/after6.jpg'

import before7 from '../assets/images/before7.jpg'
import after7 from '../assets/images/after7.jpg'

import before8 from '../assets/images/before8.JPEG'
import after8 from '../assets/images/after8.jpeg'

import before9 from '../assets/images/before9.png'
import after9 from '../assets/images/after9.jpg'

function BeforeAfter() {

  const [sliderPosition, setSliderPosition] = useState(50)

  const projects = [

    {
      before: before1,
      after: after1,
      title: 'Cocina Moderna'
    },

    {
      before: before2,
      after: after2,
      title: 'panel tv con ranuras'
    },

    {
      before: before4,
      after: after4,
      title: 'Cocina Deluxe en Itaembe Guazu'
    },

    {
      before: before5,
      after: after5,
      title: 'Cocina Clasica Itaembe Guazu'
    },

    {
      before: before6,
      after: after6,
      title: 'Cocina Clasica Itaembe Mini'
    },

    {
      before: before7,
      after: after7,
      title: 'Cocina Clasica Itaembe Guazu'
    },

    {
      before: before8,
      after: after8,
      title: 'Cocina line Premium Itaembe Guazu'
    }

  ]

  return (

    <section
      className="before-after"
      data-aos="fade-up"
    >

      {/* Header */}
      <div className="before-header">

        <span>

          TRANSFORMAMOS ESPACIOS

        </span>

        <h2>

          El diseño también
          cambia cómo te sentís

        </h2>

        <p>

          Durante mucho tiempo viví
          en espacios desordenados,
          con cosas acumuladas y sin
          lugar para organizar.

        </p>

        <p>

          Y aunque parezca algo simple,
          entendí cómo el entorno puede
          afectar el ánimo, el descanso
          y hasta la energía con la que
          comenzamos el día.

        </p>

        <p>

          Cuando diseñé mi propia cocina,
          mi placard y cada espacio de
          mi casa, descubrí algo mucho
          más importante que un mueble:

        </p>

        <p>

          descubrí la tranquilidad que
          genera vivir en un ambiente
          funcional, ordenado y pensado
          para disfrutar.

        </p>

        <p>

          Hoy buscamos crear muebles
          que no solo transformen espacios,
          sino también la forma en que las
          personas viven y sienten su hogar.

        </p>

      </div>

      {/* Proyectos */}
      <div className="projects-list">

        {projects.map((project, index) => (

          <div
            key={index}
            className="project-wrapper"
          >

            <h3>

              {project.title}

            </h3>

            <div

              className="comparison-container"

              onMouseMove={(e) => {

  const rect =
    e.currentTarget.getBoundingClientRect()

  const x =
    e.clientX - rect.left

  const percentage =
    (x / rect.width) * 100

  setSliderPosition(percentage)
}}

onTouchMove={(e) => {

  const rect =
    e.currentTarget.getBoundingClientRect()

  const x =
    e.touches[0].clientX - rect.left

  const percentage =
    (x / rect.width) * 100

  setSliderPosition(percentage)
}}
            >

              {/* Después */}
<img
  src={project.after}
  alt="Después"
  className="comparison-image"
/>

{/* Antes */}
<div
  className="after-image-wrapper"
  style={{
    width: `${sliderPosition}%`
  }}
>

  <img
    src={project.before}
    alt="Antes"
    className="comparison-image"
  />

</div>

              {/* Línea */}
              <div

                className="comparison-line"

                style={{
                  left: `${sliderPosition}%`
                }}
              >

                <div className="comparison-circle">

                  ⇆

                </div>

              </div>

              {/* Labels */}
              <div className="comparison-label before-label">

                ANTES

              </div>

              <div className="comparison-label after-label">

                DESPUÉS

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default BeforeAfter