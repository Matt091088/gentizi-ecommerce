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
    price: '$250.000',
    image: rackImage,
    isNew: true,
    category: 'Racks',

    paymentLink: 'https://google.com',

    description:
      'Rack moderno de melamina con diseño minimalista y espacio de guardado premium.',
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
  },

]

// Exporta productos
export default products