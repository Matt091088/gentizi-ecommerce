import { useState } from 'react'

import './styles/Projects.css'

function Projects() {

  const projects = {

    Joyeria: {

      title: 'Joyería Premium',

      description:
        'Diseño y fabricación integral de mobiliario comercial para joyería.',

      images: [

        '/public/projects/joyeria/joyeria1.jpg',

        '/public/projects/joyeria/joyeria2.jpg',

        '/public/projects/joyeria/joyeria3.jpg',

        '/public/projects/joyeria/joyeria4.jpg',

        '/public/projects/joyeria/joyeria5.jpg',

        '/public/projects/joyeria/joyeria6.jpg',

        '/public/projects/joyeria/joyeria7.jpg',

        '/public/projects/joyeria/joyeria8.jpg'

      ]

    }

    ,

OficinaHotel: {

  title: 'Oficina Hotel',

  description:
    'Proyecto de mobiliario para oficinas y áreas administrativas de hotel.',

  images: [

    '/public/projects/oficinahotel/oficinahotel1.jpg',

    '/public/projects/oficinahotel/oficinahotel2.jpg',

    '/public/projects/oficinahotel/oficinahotel3.jpg',

    '/public/projects/oficinahotel/oficinahotel4.jpg'

  ]

},

LocalComercial: {

  title: 'Local Comercial',

  description:
    'Diseño y fabricación de mobiliario comercial personalizado.',

  images: [

    '/public/projects/localcomercial/localcomercial1.jpg',

    '/public/projects/localcomercial/localcomercial2.jpg',

    '/public/projects/localcomercial/localcomercial3.jpg',

    '/public/projects/localcomercial/localcomercial4.jpg',

    '/public/projects/localcomercial/localcomercial5.jpg'

  ]

},

PuertasColgantes: {

  title: 'Puertas Colgantes',

  description:
    'Sistema de puertas corredizas modernas fabricadas a medida.',

  images: [

    '/public/projects/puertascolgantes/puertascolgante1.jpg',

    '/public/projects/puertascolgantes/puertascolgante2.jpg',

    '/public/projects/puertascolgantes/puertascolgante3.jpg'

  ]

}

  }

  const [activeProject, setActiveProject] =
    useState('Joyeria')

  const [selectedImage, setSelectedImage] =
    useState('/public/projects/joyeria/joyeria1.jpg')

  return (

    <section
      id="proyectos"
      className="projects"
    >

      <div className="projects-header">

        <span>

          PROYECTOS REALES

        </span>

        <h2>

          Algunos trabajos destacados

        </h2>

      </div>

      <div className="project-filters">

        {Object.keys(projects).map((project) => (

          <button

            key={project}

            className={
              activeProject === project
                ? 'active'
                : ''
            }

            onClick={() => {

              setActiveProject(project)

              setSelectedImage(
                projects[project].images[0]
              )

            }}

          >

            {project}

          </button>

        ))}

      </div>

      <div className="project-card">

        <h3>

          {projects[activeProject].title}

        </h3>

        <p>

          {projects[activeProject].description}

        </p>

        <div className="main-image">

          <img
            src={selectedImage}
            alt={
              projects[activeProject].title
            }
          />

        </div>

        <div className="thumbnails">

          {projects[activeProject].images.map((image) => (

            <img

              key={image}

              src={image}

              alt=""

              className={
                selectedImage === image
                  ? 'active'
                  : ''
              }

              onClick={() =>
                setSelectedImage(image)
              }

            />

          ))}

        </div>

      </div>

    </section>

  )

}

export default Projects