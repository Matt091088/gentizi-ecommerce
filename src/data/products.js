// Importa imágenes reales
import rackImage from '../assets/images/racktvcajones.webp'
import deskImage from '../assets/images/mesadeluz-vidrio.webp'
import panelImage from '../assets/images/paneltv-ranuras.webp'
import tableImage from '../assets/images/paneltvconranuras.webp'
import placeholderImage from '../assets/images/placeholder-producto.png'

// Productos
const products = [

  {
  id: 1,
  title: 'Rack Melbourne',
  price: 325000,
  image: placeholderImage,
  isNew: true,
  featured: true,
  category: 'Racks',

  paymentLink: 'https://google.com',

  description:
    'Rack para TV con repisa superior y amplia baulera de almacenamiento.',

  width: '180 cm',
  height: '60 cm',
  depth: '40 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  {
  id: 3,
  title: 'Panel Sydney',
  price: 640000,
  image: placeholderImage,
  isNew: true,
  category: 'Paneles',

  paymentLink: 'https://google.com',

  description:
    'Panel flotante con listones ranurados y repisa integrada para televisores de hasta 65 pulgadas.',

  width: '200 cm',
  height: '240 cm',
  depth: '5 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  {
  id: 4,
  title: 'Panel Melbourne',
  price: 640000,
  image: placeholderImage,
  isNew: true,
  category: 'Paneles',

  paymentLink: 'https://google.com',

  description:
    'Panel para TV con iluminación LED integrada, listones ranurados y amplias bauleras.',

  width: '200 cm',
  height: '240 cm',
  depth: '5 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  {
  id: 5,
  title: 'Rack Darwin',
  price: 345000,
  image: placeholderImage,
  isNew: true,
  category: 'Racks',

  paymentLink: 'https://google.com',

  description:
    'Rack para TV con doble espesor, bauleras de almacenamiento y repisa de vidrio decorativa.',

  width: '190 cm',
  height: '60 cm',
  depth: '40 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  {
  id: 6,
  title: 'Rack Byron',
  price: 380000,
  image: placeholderImage,
  isNew: true,
  category: 'Racks',

  paymentLink: 'https://google.com',

  description:
    'Rack flotante minimalista con iluminación LED interna y diseño sin manijas.',

  width: '200 cm',
  height: '45 cm',
  depth: '35 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  {
  id: 7,
  title: 'Rack Canberra',
  price: 390000,
  image: placeholderImage,
  isNew: true,
  category: 'Racks',

  paymentLink: 'https://google.com',

  description:
    'Rack para TV con amplias bauleras inferiores, alacena superior y repisas flotantes decorativas.',

  width: '180 cm',
  height: '60 cm',
  depth: '40 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

/* ========================= */
/* COCINAS */
/* ========================= */

{
  id: 14,
  title: 'Cocina Clásica',
  price: 1250000,
  image: placeholderImage,
  isNew: true,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Cocina funcional y elegante con excelente capacidad de guardado. Ideal para quienes buscan calidad y diseño a un precio accesible.',

  width: 'A medida',
  height: 'A medida',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '30 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 15,
  title: 'Cocina Premium',
  price: 1850000,
  image: placeholderImage,
  isNew: true,
  featured: true,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Cocina de diseño moderno con mayores espacios de guardado, detalles premium y terminaciones de alta calidad.',

  width: 'A medida',
  height: 'A medida',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '35 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 16,
  title: 'Cocina Deluxe',
  price: 2500000,
  image: placeholderImage,
  isNew: true,
  featured: true,
  category: 'Cocinas',

  paymentLink: 'https://google.com',

  description:
    'Nuestra línea más exclusiva. Diseño contemporáneo, máxima capacidad de almacenamiento y terminaciones de lujo para proyectos premium.',

  width: 'A medida',
  height: 'A medida',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '40 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

/* ========================= */
/* ESCRITORIOS */
/* ========================= */

{
  id: 17,
  title: 'Escritorio Canberra Executive',
  price: 750000,
  image: placeholderImage,
  isNew: true,
  featured: true,
  category: 'Escritorios',

  paymentLink: 'https://google.com',

  description:
    'Escritorio gerencial en L con diseño premium, seis cajoneras, puertas corredizas y gran capacidad de almacenamiento. Ideal para oficinas ejecutivas.',

  width: '180 cm a 250 cm',
  height: '75 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '20 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 18,
  title: 'Escritorio Byron Corner',
  price: 425000,
  image: placeholderImage,
  isNew: true,
  category: 'Escritorios',

  paymentLink: 'https://google.com',

  description:
    'Escritorio en L con biblioteca inferior integrada y puertas baulera. Perfecto para home office y espacios de trabajo modernos.',

  width: '150 cm',
  height: '75 cm',
  depth: '60 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
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
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 23,
  title: 'Mesa Ratona Bondi',
  price: 180000,
  image: placeholderImage,
  isNew: true,
  featured: true,
  category: 'Mesas',

  paymentLink: 'https://google.com',

  description:
    'Mesa ratona con tapa de vidrio y diseño moderno. Ideal para livings contemporáneos.',

  width: '90 cm',
  height: '40 cm',
  depth: '50 cm',

  material: 'Melamina Premium 18 mm + Vidrio',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 24,
  title: 'Mesa Ratona Brisbane',
  price: 230000,
  image: placeholderImage,
  isNew: true,
  category: 'Mesas',

  paymentLink: 'https://google.com',

  description:
    'Mesa ratona elevable con espacio de guardado. Ideal para trabajar con notebook o desayunar cómodamente desde el sofá.',

  width: '90 cm',
  height: '40 cm',
  depth: '50 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

{
  id: 25,
  title: 'Mesa Ratona Perth',
  price: 155000,
  image: placeholderImage,
  isNew: true,
  category: 'Mesas',

  paymentLink: 'https://google.com',

  description:
    'Mesa ratona de doble espesor con cubo flotante inferior para revistas, decoración y objetos de uso diario.',

  width: '90 cm',
  height: '40 cm',
  depth: '40 cm',

  material: 'Melamina Premium 18 mm',

  delivery: '15 días',

  colors: [
  'Blanco + Camelia',
  'Negro + Home',
  'Blanco + Amberes',
  'Gris Tapir + Carvalho Mezzo',
  'Nogal + Negro'
]
},

  /* Los paneles los dejamos como ya los tenías */
]

// Exporta productos
export default products