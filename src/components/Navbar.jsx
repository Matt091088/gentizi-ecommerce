import { useState } from 'react'
import './styles/Navbar.css'
import logo from '../assets/images/logo.webp'

// Componente Navbar
function Navbar({

  cartCount,

  setIsCartOpen,

  searchText,

  setSearchText

}) {

  // State menú móvil
  const [menuOpen, setMenuOpen] = useState(false)

  // Abre/cierra menú
  function toggleMenu() {

    setMenuOpen(!menuOpen)
  }

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo-container">

        <img
          src={logo}
          alt="Gentizi Muebles"
          className="logo-image"
        />

      </div>

      {/* Buscador */}
      <input
  type="text"
  placeholder="Buscar muebles..."
  className="navbar-search"
  value={searchText}
  onChange={(e) => {

  setSearchText(e.target.value);

  const productsSection =
    document.querySelector(".products");

  if (productsSection) {

    productsSection.scrollIntoView({

      behavior: "smooth"

    });
  }
}}
/>


      {/* Acciones */}
      <div className="nav-actions">

         {/* Menú */}
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

        <li>

  <a href="#inicio">

    Inicio

  </a>

</li>

         <li>
  <a href="#productos">
    Productos
  </a>
</li>

<li>
  <a href="#nosotros">
    Nosotros
  </a>
</li>

<li>
  <a href="#contacto">
    Contacto
  </a>
</li>

      </ul>

        {/* Carrito */}
        <button
          className="cart-button"
          onClick={() => setIsCartOpen(true)}
        >

          🛒 ({cartCount})

        </button>

        {/* Botón hamburguesa */}
        <button
          className="menu-button"
          onClick={toggleMenu}
        >
          ☰
        </button>

      </div>

    </nav>

  )
}

export default Navbar