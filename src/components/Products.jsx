// Importa ProductCard
import ProductCard from "./ProductCard";

// Importa datos productos
import products from "../data/products";

// Estilos
import "./styles/Products.css";

// Navegación
import { useNavigate } from "react-router-dom";

// Componente Products
function Products({
  addToCart,
  selectedCategory,
  searchText,
  setSelectedProduct,
  setQuickViewProduct,
}) {

  /* Navegación */
  const navigate = useNavigate();


  /* ========================= */
  /* FILTRO DE PRODUCTOS */
  /* ========================= */
  const filteredProducts = products.filter((product) => {

    const text = searchText.toLowerCase();

    // Filtra por categoría
    const matchesCategory =

      selectedCategory === "Todos" ||

      !selectedCategory ||

      product.category === selectedCategory;

    // Filtra por búsqueda
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

  /* ========================= */
  /* PRODUCTOS A MOSTRAR */
  /* ========================= */

  
 /* ========================= */
/* PRODUCTOS A MOSTRAR */
/* ========================= */

const displayedProducts =

  !selectedCategory

    ? filteredProducts.slice(0, 6)

    : filteredProducts;
    console.log(displayedProducts.length)
  return (

    <section
      id="productos"
      className="products"
      data-aos="fade-up"
    >

      {/* Título */}
      <h2>
        Nuestros Muebles
      </h2>

      {/* Grid productos */}
      <div className="products-grid">

        {displayedProducts.map((product) => (

          <div
            key={product.id}

            data-aos="fade-up"

            data-aos-duration="1000"

            data-aos-delay={product.id * 100}

            onClick={() =>
              navigate(
                `/producto/${product.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`
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

      {/* Botón Home */}
      {!selectedCategory && (

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >

          <button

            onClick={() =>
              navigate("/productos/racks")
            }

            style={{
              padding: "14px 30px",
              border: "none",
              borderRadius: "12px",
              background: "#c8a94d",
              color: "#111",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >

            Ver más diseños

          </button>

        </div>

      )}

    </section>
  );
}

export default Products;