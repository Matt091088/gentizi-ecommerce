// Importa useState
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importa componentes
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import CustomFurniture from './components/CustomFurniture'
import Testimonials from './components/Testimonials'
import WhatsappButton from './components/WhatsappButton'
import QuickView from './components/QuickView'
import products from './data/products'
import AboutGentizi from './components/AboutGentizi'
import BeforeAfter from './components/BeforeAfter'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

// Componente principal
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  // State carrito
  const [cartCount, setCartCount] = useState(0)

  // Productos carrito
  const [cartItems, setCartItems] = useState(() => {

  const savedCart = localStorage.getItem('gentizi-cart')

  return savedCart

    ? JSON.parse(savedCart)

    : []

})

  const [selectedCategory, setSelectedCategory] =
  useState('')

  // Texto búsqueda
  const [searchText, setSearchText] = useState('')

  const [showNotification, setShowNotification] =
  useState(false)

 useEffect(() => {

  const totalItems = cartItems.reduce(

    (total, item) => total + item.quantity,

    0

  )

  setCartCount(totalItems)

}, [cartItems])

/* Guardar carrito automáticamente */
useEffect(() => {

  localStorage.setItem(

    'gentizi-cart',

    JSON.stringify(cartItems)

  )

}, [cartItems])

  // Agrega productos carrito
   function addToCart(product) {

    setShowNotification(true)

setTimeout(() => {

  setShowNotification(false)

}, 2500)
  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  // Si ya existe
  if (existingProduct) {

    const updatedCart = cartItems.map((item) =>

      item.id === product.id

        ? { ...item, quantity: item.quantity + 1 }

        : item
    );

    setCartItems(updatedCart);

  } else {

    // Si no existe
    setCartItems([
      ...cartItems,
      { ...product, quantity: 1 }
    ]);
  }

  setCartCount(cartCount + 1);
}

function increaseQuantity(id) {

  const updatedCart = cartItems.map((item) =>

    item.id === id

      ? { ...item, quantity: item.quantity + 1 }

      : item
  );

  setCartItems(updatedCart);

  setCartCount(cartCount + 1);
}

function decreaseQuantity(id) {

  const existingProduct = cartItems.find(
    (item) => item.id === id
  );

  if (existingProduct.quantity === 1) {

    const filteredCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(filteredCart);

  } else {

    const updatedCart = cartItems.map((item) =>

      item.id === id

        ? { ...item, quantity: item.quantity - 1 }

        : item
    );

    setCartItems(updatedCart);
  }

  setCartCount(cartCount - 1);
}

  // Cambia categoría
  function changeCategory(category) {

    setSelectedCategory(category)
  }

  // Cambia búsqueda
  function handleSearch(text) {

    setSearchText(text)
  }

  return (
    <>

      {/* Navbar */}
      <Navbar

  cartCount={cartCount}

  setIsCartOpen={setIsCartOpen}

  searchText={searchText}

  setSearchText={setSearchText}

/>


{/* Carrito */}
<Cart

  cartItems={cartItems}

  increaseQuantity={increaseQuantity}

  decreaseQuantity={decreaseQuantity}

  isCartOpen={isCartOpen}

  setIsCartOpen={setIsCartOpen}

  setCartItems={setCartItems}

/>

{/* Quick View */}
{/*
{quickViewProduct && (

  <QuickView

    product={quickViewProduct}

    closeModal={() =>
      setQuickViewProduct(null)
    }

    addToCart={addToCart}

  />

)} */}


{/* Notificación carrito */}

{showNotification && (

  <div className="cart-notification">

    🛒 Producto agregado al carrito

  </div>

)}

      <Routes>

  {/* Home */}
  <Route

    path="/"

    element={

      <Home

        addToCart={addToCart}

        selectedCategory={selectedCategory}

        searchText={searchText}

        setSelectedProduct={setSelectedProduct}

        setQuickViewProduct={setQuickViewProduct}

        changeCategory={changeCategory}
      />
    }
  />

  {/* Página de categoría */}
<Route

  path="/productos/:categoryName"

  element={

    <CategoryPage

      addToCart={addToCart}

      searchText={searchText}

      setSelectedProduct={setSelectedProduct}

      setQuickViewProduct={setQuickViewProduct}
    />
  }
/>

{/* Página individual producto */}
<Route

  path="/producto/:productName"

  element={

    <ProductPage

      addToCart={addToCart}
    />
  }
/>

</Routes>

<Footer />
<WhatsappButton />

    </>

  )
}

export default App