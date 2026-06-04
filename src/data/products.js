// Importa imágenes reales
import rackImage from '../assets/images/racktvcajones.webp'
import deskImage from '../assets/images/mesadeluz-vidrio.webp'
import panelImage from '../assets/images/paneltv-ranuras.webp'
import tableImage from '../assets/images/paneltvconranuras.webp'

// Productos
const products = [

  {
  id: 1,
  title: 'Rack Nórdico',
  price: 250000 ,
  image: rackImage,
  isNew: true,
  featured: true,
  category: 'Racks',

  paymentLink: 'https://google.com',

  description:
    'Rack moderno de melamina con diseño minimalista y espacio de guardado premium.',

  /* Especificaciones */
  width: '180 cm',
  height: '60 cm',
  depth: '40 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
    'Roble',
    'Blanco',
    'Negro'
  ]
},

  {
    id: 2,
    title: 'Mesa de Luz',
    price: '$180.000',
    image: deskImage,
    isNew: false,
    category: 'Mesas',

    paymentLink: 'https://google.com',

    description:
      'Mesa de luz elegante con terminaciones modernas y estilo contemporáneo.',

      width: '50 cm',
height: '60 cm',
depth: '40 cm',

material: 'Melamina Premium 18 mm',

delivery: '15 días',

colors: [
  'Roble',
  'Blanco'
]
  },

  {
    id: 3,
    title: 'Panel TV Ranurado',
    price: '$320.000',
    image: panelImage,
    isNew: true,
    category: 'Paneles',

    paymentLink: 'https://google.com',

    description:
      'Panel de TV moderno con ranuras decorativas y diseño sofisticado.',

      width: '180 cm',
height: '120 cm',
depth: '5 cm',

material: 'Melamina Premium 18 mm',

delivery: '15 días',

colors: [
  'Roble',
  'Negro'
]
  },

  {
    id: 4,
    title: 'Panel Moderno',
    price: '$210.000',
    image: tableImage,
    isNew: false,
    category: 'Paneles',

    paymentLink: 'https://google.com',

    description:
      'Panel premium para living moderno fabricado en melamina de alta calidad.',

      width: '160 cm',
height: '110 cm',
depth: '5 cm',

material: 'Melamina Premium 18 mm',

delivery: '15 días',

colors: [
  'Roble',
  'Blanco'
]
  },

  {
    id: 5,
    title: 'Rack Premium',
    price: '$290.000',
    image: rackImage,
    isNew: true,
    category: 'Racks',

    paymentLink: 'https://google.com',

    description:
      'Rack premium con amplio espacio de guardado y diseño moderno para living.',

    width: '200 cm',
    height: '65 cm',
    depth: '40 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '15 días',

    colors: [
      'Roble',
      'Blanco',
      'Negro'
    ]
  },

  {
    id: 6,
    title: 'Rack Suspenso',
    price: '$270.000',
    image: rackImage,
    isNew: false,
    category: 'Racks',

    paymentLink: 'https://google.com',

    description:
      'Rack flotante ideal para ambientes modernos y minimalistas.',

    width: '180 cm',
    height: '45 cm',
    depth: '35 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '15 días',

    colors: [
      'Roble',
      'Blanco',
      'Negro'
    ]
  },

  {
    id: 7,
    title: 'Rack Industrial',
    price: '$310.000',
    image: rackImage,
    isNew: true,
    category: 'Racks',

    paymentLink: 'https://google.com',

    description:
      'Rack estilo industrial con detalles modernos y excelente capacidad de almacenamiento.',

    width: '220 cm',
    height: '60 cm',
    depth: '40 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '20 días',

    colors: [
      'Roble',
      'Negro'
    ]
  },

  {
    id: 8,
    title: 'Mesa de Luz Oslo',
    price: '$195.000',
    image: deskImage,
    isNew: true,
    category: 'Mesas',

    paymentLink: 'https://google.com',

    description:
      'Mesa de luz moderna inspirada en diseño escandinavo.',

    width: '55 cm',
    height: '60 cm',
    depth: '40 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '15 días',

    colors: [
      'Roble',
      'Blanco'
    ]
  },

  {
    id: 9,
    title: 'Mesa de Luz Nórdica',
    price: '$205.000',
    image: deskImage,
    isNew: false,
    category: 'Mesas',

    paymentLink: 'https://google.com',

    description:
      'Mesa de luz con líneas simples y estilo nórdico.',

    width: '55 cm',
    height: '60 cm',
    depth: '40 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '15 días',

    colors: [
      'Roble',
      'Blanco'
    ]
  },

  {
    id: 10,
    title: 'Mesa de Luz Premium',
    price: '$220.000',
    image: deskImage,
    isNew: true,
    category: 'Mesas',

    paymentLink: 'https://google.com',

    description:
      'Mesa de luz premium con mayor capacidad de guardado.',

    width: '60 cm',
    height: '65 cm',
    depth: '40 cm',

    material: 'Melamina Premium 18 mm',

    delivery: '15 días',

    colors: [
      'Roble',
      'Blanco',
      'Negro'
    ]
  },

  {
  id: 11,
  title: 'Placard Moderno',
  price: '$580.000',
  image: rackImage,
  isNew: true,
  category: 'Placares',

  paymentLink: 'https://google.com',

  description:
    'Placard moderno con amplio espacio interior y diseño elegante.',

  width: '180 cm',
  height: '220 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
    'Roble',
    'Blanco',
    'Gris'
  ]
},

{
  id: 12,
  title: 'Placard Espejado',
  price: '$690.000',
  image: rackImage,
  isNew: true,
  category: 'Placares',

  paymentLink: 'https://google.com',

  description:
    'Placard con puertas corredizas y espejo de cuerpo completo.',

  width: '200 cm',
  height: '220 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
    'Blanco',
    'Gris'
  ]
},

{
  id: 13,
  title: 'Placard Premium',
  price: '$780.000',
  image: rackImage,
  isNew: true,
  category: 'Placares',

  paymentLink: 'https://google.com',

  description:
    'Placard premium con gran capacidad de almacenamiento y terminaciones exclusivas.',

  width: '240 cm',
  height: '220 cm',
  depth: '65 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '25 días',

  colors: [
    'Roble',
    'Negro',
    'Blanco'
  ]
},

/* ========================= */
/* COCINAS */
/* ========================= */

{
  id: 14,
  title: 'Cocina Nórdica',
  price: '$1.250.000',
  image: panelImage,
  isNew: true,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Cocina moderna estilo nórdico con amplios espacios de guardado y diseño minimalista.',

  width: '300 cm',
  height: '240 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '30 días',

  colors: [
    'Blanco',
    'Roble'
  ]
},

{
  id: 15,
  title: 'Cocina Premium',
  price: '$1.850.000',
  image: panelImage,
  isNew: true,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Cocina premium con terminaciones exclusivas y excelente capacidad de almacenamiento.',

  width: '400 cm',
  height: '240 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '35 días',

  colors: [
    'Negro',
    'Roble',
    'Blanco'
  ]
},

{
  id: 16,
  title: 'Cocina Moderna',
  price: '$1.450.000',
  image: panelImage,
  isNew: false,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Cocina funcional con diseño moderno ideal para espacios contemporáneos.',

  width: '350 cm',
  height: '240 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '30 días',

  colors: [
    'Blanco',
    'Gris'
  ]
},

/* ========================= */
/* ESCRITORIOS */
/* ========================= */

{
  id: 17,
  title: 'Escritorio Ejecutivo',
  price: '$420.000',
  image: deskImage,
  isNew: true,
  category: 'Escritorios',

  paymentLink: 'https://google.com',

  description:
    'Escritorio ejecutivo con amplio espacio de trabajo y diseño profesional.',

  width: '160 cm',
  height: '75 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
    'Roble',
    'Negro'
  ]
},

{
  id: 18,
  title: 'Escritorio Home Office',
  price: '$320.000',
  image: deskImage,
  isNew: false,
  category: 'Escritorios',

  paymentLink: 'https://google.com',

  description:
    'Ideal para teletrabajo, estudio y espacios reducidos.',

  width: '120 cm',
  height: '75 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
    'Blanco',
    'Roble'
  ]
},

{
  id: 19,
  title: 'Escritorio Gamer',
  price: '$480.000',
  image: deskImage,
  isNew: true,
  category: 'Escritorios',

  paymentLink: 'https://google.com',

  description:
    'Diseñado para setups gamer con gran superficie y estilo moderno.',

  width: '180 cm',
  height: '75 cm',
  depth: '70 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
    'Negro',
    'Rojo'
  ]
},

/* ========================= */
/* VANITORYS */
/* ========================= */

{
  id: 20,
  title: 'Vanitory Moderno',
  price: '$280.000',
  image: panelImage,
  isNew: true,
  category: 'Vanitorys',

  paymentLink: 'https://google.com',

  description:
    'Vanitory moderno con diseño elegante para baños contemporáneos.',

  width: '80 cm',
  height: '85 cm',
  depth: '45 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
    'Blanco',
    'Roble'
  ]
},

{
  id: 21,
  title: 'Vanitory Premium',
  price: '$390.000',
  image: panelImage,
  isNew: true,
  category: 'Vanitorys',

  paymentLink: 'https://google.com',

  description:
    'Vanitory premium con mayor capacidad de guardado y diseño exclusivo.',

  width: '120 cm',
  height: '85 cm',
  depth: '45 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
    'Negro',
    'Blanco',
    'Roble'
  ]
},

{
  id: 22,
  title: 'Vanitory Suspenso',
  price: '$340.000',
  image: panelImage,
  isNew: false,
  category: 'Vanitorys',

  paymentLink: 'https://google.com',

  description:
    'Vanitory flotante ideal para baños modernos y minimalistas.',

  width: '100 cm',
  height: '60 cm',
  depth: '45 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
    'Blanco',
    'Gris'
  ]
},

  /* Los paneles los dejamos como ya los tenías */
]

// Exporta productos
export default products