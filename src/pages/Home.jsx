import Hero from '../components/Hero'

import Categories from '../components/Categories'

import Products from '../components/Products'

import WhyChooseUs from '../components/WhyChooseUs'

import AboutGentizi from '../components/AboutGentizi'

import CustomFurniture from '../components/CustomFurniture'

import Testimonials from '../components/Testimonials'

import BeforeAfter from '../components/BeforeAfter'


function Home({

  addToCart,
  selectedCategory,
  searchText,
  setSelectedProduct,
  setQuickViewProduct,
  changeCategory
}) {

  return (

    <>

      {/* Hero principal */}
      <Hero />

      {/* Categorías */}
      <Categories
        changeCategory={changeCategory}
      />

      {/* Productos */}
      <Products

        addToCart={addToCart}

        selectedCategory={selectedCategory}

        searchText={searchText}

        setSelectedProduct={setSelectedProduct}

        setQuickViewProduct={setQuickViewProduct}
      />

      {/* Secciones extras */}
      <WhyChooseUs />

      <AboutGentizi />

      <CustomFurniture />

      <Testimonials />

      <BeforeAfter />

    </>
  )
}

export default Home