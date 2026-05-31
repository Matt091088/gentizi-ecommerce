// Importa ProductCard
import ProductCard from "./ProductCard";

// Importa datos productos
import products from "../data/products";

import "./styles/Products.css";
import { useNavigate } from 'react-router-dom'
// Componente Products
function Products({
  addToCart,
  selectedCategory,
  searchText,
  setSelectedProduct,
  setQuickViewProduct
}) {

    /* Navegación */
  const navigate = useNavigate()

  // Filtra productos
  const filteredProducts = products.filter((product) => {

    const text = searchText.toLowerCase();

    // Categoría
    const matchesCategory =

      selectedCategory === "Todos" ||

      !selectedCategory ||

      product.category === selectedCategory;

    // Búsqueda
    const matchesSearch =

      !searchText ||

      product.title
        .toLowerCase()
        .includes(text) ||

      product.category
        .toLowerCase()
        .includes(text) ||

      product.description
        .toLowerCase()
        .includes(text);

    return matchesCategory && matchesSearch;
  });

  return (

  <section
  id="productos"
    className="products"
    data-aos="fade-up"
  >

    <h2>
      Nuestros Muebles
    </h2>

    <div className="products-grid">

      {filteredProducts.map((product) => (

        <div

  key={product.id}

  data-aos="fade-up"

  data-aos-duration="1000"

  data-aos-delay={product.id * 100}

  onClick={() =>

    navigate(

      `/producto/${product.title
        .toLowerCase()
        .replaceAll(' ', '-')}`
    )
  }
>

          <ProductCard

            product={product}

            addToCart={addToCart}

            setSelectedProduct={setSelectedProduct}

            setQuickViewProduct={setQuickViewProduct}

          />

        </div>

      ))}

    </div>

  </section>
);
}

export default Products;