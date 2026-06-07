import { useState } from 'react'

import './styles/Materials.css'

function Materials() {

  const categories = {

    Mesopotamia: [

      {
  name: 'Petiribí',
  image: '/images/materials/linea-mesopotamia/peteribi.jpg'
},

      {
        name: 'Yute',
        image: '/images/materials/linea-mesopotamia/yute.jpg'
      },

      {
        name: 'Terracota',
        image: '/images/materials/linea-mesopotamia/terracota.jpg'
      },

      {
        name: 'Gris Caliza',
        image: '/images/materials/linea-mesopotamia/griscaliza.jpg'
      },

      {
        name: 'Gris Basalto',
        image: '/images/materials/linea-mesopotamia/grisbasalto.jpg'
      },

      {
        name: 'Gris Tapir',
        image: '/images/materials/linea-mesopotamia/gristapir.jpg'
      },

      {
        name: 'Amatista',
        image: '/images/materials/linea-mesopotamia/amatista.jpg'
      },

      {
        name: 'Jade',
        image: '/images/materials/linea-mesopotamia/jade.jpg'
      },

      {
        name: 'Kiri',
        image: '/images/materials/linea-mesopotamia/kiri.jpg'
      },

      {
        name: 'Paraíso',
        image: '/images/materials/linea-mesopotamia/paraiso.jpg'
      }

    ],

    Nature: [

  {
    name: 'Cajú',
    image: '/images/materials/linea-nature/caju.jpeg'
  },

  {
    name: 'Gaudí',
    image: '/images/materials/linea-nature/gaudi.jpeg'
  },

  {
    name: 'Mont Blanc',
    image: '/images/materials/linea-nature/montblanc.jpeg'
  },

  {
    name: 'Teka Artico',
    image: '/images/materials/linea-nature/tekaartico.jpeg'
  },

  {
    name: 'Venezia',
    image: '/images/materials/linea-nature/venezia.jpeg'
  },

  {
    name: 'Nogal Terracota',
    image: '/images/materials/linea-nature/nogalterracota.jpeg'
  },

  {
    name: 'Carvalho Mezzo',
    image: '/images/materials/linea-nature/carvalhomezzo.jpeg'
  },

  {
    name: 'Nocce Milano',
    image: '/images/materials/linea-nature/noccemilano.jpeg'
  },

  {
    name: 'Blanco Nature',
    image: '/images/materials/linea-nature/blanconature.jpeg'
  }

],

Lisos: [

  {
    name: 'Ceniza',
    image: '/images/materials/linea-lisos/ceniza.jpeg'
  },

  {
    name: 'Grafito',
    image: '/images/materials/linea-lisos/grafito.jpeg'
  },

  {
    name: 'Negro Profundo',
    image: '/images/materials/linea-lisos/negroprofundo.jpeg'
  },

  {
    name: 'Gris Humo',
    image: '/images/materials/linea-lisos/grishumo.jpeg'
  },

  {
    name: 'Almendra',
    image: '/images/materials/linea-lisos/almendra.jpeg'
  },

  {
    name: 'Aluminio',
    image: '/images/materials/linea-lisos/aluminio.jpeg'
  },

  {
    name: 'Litio',
    image: '/images/materials/linea-lisos/litio.jpeg'
  },

  {
    name: 'Blanco Tundra',
    image: '/images/materials/linea-lisos/blancotundra.jpeg'
  }

],

Hilados: [

  {
    name: 'Seda Azzurra',
    image: '/images/materials/linea-hilados/sedaazzurra.jpeg'
  },

  {
    name: 'Seda Giorno',
    image: '/images/materials/linea-hilados/sedagiorno.jpeg'
  },

  {
    name: 'Seda Notte',
    image: '/images/materials/linea-hilados/sedanotte.jpeg'
  },

  {
    name: 'Lino Chiaro',
    image: '/images/materials/linea-hilados/linochiaro.jpeg'
  },

  {
    name: 'Lino Blanco',
    image: '/images/materials/linea-hilados/linoblanco.jpeg'
  },

  {
    name: 'Lino Terra',
    image: '/images/materials/linea-hilados/linoterra.jpeg'
  },

  {
    name: 'Lino Negro',
    image: '/images/materials/linea-hilados/linonegro.jpeg'
  }

],

Blend: [

  {
    name: 'Sauco',
    image: '/images/materials/linea-blend/sauco.jpg'
  },

  {
    name: 'Pinot Gris',
    image: '/images/materials/linea-blend/pinotgris.jpeg'
  },

  {
    name: 'Camellia',
    image: '/images/materials/linea-blend/camellia.jpeg'
  },

  {
    name: 'Merlot',
    image: '/images/materials/linea-blend/merlot.jpeg'
  },

  {
    name: 'Scotch',
    image: '/images/materials/linea-blend/scotch.jpeg'
  },

  {
    name: 'Amaranto',
    image: '/images/materials/linea-blend/amaranto.jpeg'
  }

],

  UrbanConcept: [

  {
    name: 'Coliseo',
    image: '/images/materials/linea-urban-concept/coliseo.jpeg'
  },

  {
    name: 'Amberes',
    image: '/images/materials/linea-urban-concept/amberes.jpeg'
  },

  {
    name: 'Viena',
    image: '/images/materials/linea-urban-concept/viena.jpeg'
  },

  {
    name: 'Moscú',
    image: '/images/materials/linea-urban-concept/moscu.jpeg'
  },

  {
    name: 'Praga',
    image: '/images/materials/linea-urban-concept/praga.jpeg'
  },

  {
    name: 'Street',
    image: '/images/materials/linea-urban-concept/street.jpeg'
  },

  {
    name: 'Home',
    image: '/images/materials/linea-urban-concept/home.jpeg'
  }

],

Etnica: [

  {
    name: 'Tribal',
    image: '/images/materials/linea-etnica/tribal.jpeg'
  },

  {
    name: 'Sahara',
    image: '/images/materials/linea-etnica/sahara.jpeg'
  },

  {
    name: 'Tuareg',
    image: '/images/materials/linea-etnica/tuareg.jpeg'
  },

  {
    name: 'Himalaya',
    image: '/images/materials/linea-etnica/himalaya.jpeg'
  },

  {
    name: 'Safari',
    image: '/images/materials/linea-etnica/safari.jpeg'
  },

  {
    name: 'Everest',
    image: '/images/materials/linea-etnica/everest.jpeg'
  }

],

Nordica: [

  {
    name: 'Helsinki',
    image: '/images/materials/linea-nordica/helsinki.jpeg'
  },

  {
    name: 'Báltico',
    image: '/images/materials/linea-nordica/baltico.jpeg'
  },

  {
    name: 'Olmo Finlandés',
    image: '/images/materials/linea-nordica/olmofinlandes.jpeg'
  },

  {
    name: 'Roble Escandinavo',
    image: '/images/materials/linea-nordica/robleescandinavo.jpeg'
  },

  {
    name: 'Teka Oslo',
    image: '/images/materials/linea-nordica/tekaoslo.jpeg'
  }

],

MaderasClasicas: [

  {
    name: 'Roble Americano Nature',
    image: '/images/materials/linea-maderas-clasicas/robleamericano.jpeg'
  },

  {
    name: 'Roble Dakar Woodtext',
    image: '/images/materials/linea-maderas-clasicas/robledakar.jpeg'
  },

  {
    name: 'Cedro Woodtext',
    image: '/images/materials/linea-maderas-clasicas/cedro.jpeg'
  },

  {
    name: 'Ebano Negro',
    image: '/images/materials/linea-maderas-clasicas/ebanonegro.jpeg'
  }

],



  }

  const [activeCategory, setActiveCategory] =
    useState('Mesopotamia')
    const [selectedMaterial, setSelectedMaterial] =
  useState(null)

  const categoryDescriptions = {

  Mesopotamia:
    'Inspirada en especies y colores de la región mesopotámica.',

  Nature:
    'Texturas que reproducen la apariencia natural de la madera.',

  Lisos:
    'Diseños modernos y versátiles para cualquier ambiente.',

  Hilados:
    'Superficies con apariencia textil y tejidos suaves.',

  Blend:
    'Combinación de tonos contemporáneos y naturales.',

  UrbanConcept:
    'Inspirada en materiales urbanos como piedra y cemento.',

  Etnica:
    'Diseños con identidad y carácter artesanal.',

  Nordica:
    'Tonos claros inspirados en el diseño escandinavo.',

  MaderasClasicas:
    'Maderas tradicionales con acabados atemporales.'
}

  return (

    <section className="materials">

      <div className="materials-header">

        <span>

          COLORES Y TEXTURAS

        </span>

        <h2>

          Elegí el acabado ideal

        </h2>

        <p>

          Trabajamos con una amplia variedad
          de melaminas y texturas para
          personalizar cada proyecto.

        </p>

      </div>

      {/* Categorías */}

      <div className="materials-filters">

        {Object.keys(categories).map((category) => (

          <button

            key={category}

            className={
              activeCategory === category
                ? 'active'
                : ''
            }

            onClick={() =>
              setActiveCategory(category)
            }

          >

            {category}

          </button>

        ))}

      </div>

      {/* Materiales */}

      <div className="materials-grid">

        {categories[activeCategory].map((material) => (

          <div
  className="material-card"
  key={material.name}
  onClick={() =>
    setSelectedMaterial({
      ...material,
      category: activeCategory
    })
  }
>

            <img
              src={material.image}
              alt={material.name}
            />

            <h3>

              {material.name}

            </h3>

          </div>

        ))}

      </div>

      {selectedMaterial && (

  <div
    className="material-modal"
    onClick={() =>
      setSelectedMaterial(null)
    }
  >

    <div
      className="material-modal-content"
      onClick={(e) =>
        e.stopPropagation()
      }
    >

      <button
        className="close-modal"
        onClick={() =>
          setSelectedMaterial(null)
        }
      >

        ✕

      </button>

      <img
        src={selectedMaterial.image}
        alt={selectedMaterial.name}
      />

      <h3>

  {selectedMaterial.name}

</h3>

<span className="material-line">

  Línea {selectedMaterial.category}

</span>

<div className="material-divider"></div>

<p className="material-description">

  {
    categoryDescriptions[
      selectedMaterial.category
    ]
  }

</p>

      

  

    </div>

  </div>

)}

    </section>

  )
}

export default Materials