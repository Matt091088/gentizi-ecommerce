import './styles/Categories.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'

import placaresImg from '../assets/images/categoria-placares.jpg'
import cocinasImg from '../assets/images/categoria-cocinas.jpg'
import racksImg from '../assets/images/categoria-racks.jpg'
import mesasImg from '../assets/images/categoria-mesas.jpg'
import escritoriosImg from '../assets/images/categoria-escritorios.jpg'
import vanitorysImg from '../assets/images/categoria-vanitorys.jpg'

function Categories({ changeCategory }) {

    /* Navegación */
  const navigate = useNavigate()

  const categories = [

    {
      title: 'Placares',
      image: placaresImg,
      amount: '12 diseños'
    },

    {
      title: 'Cocinas',
      image: cocinasImg,
      amount: '18 proyectos'
    },

    {
      title: 'Racks',
      image: racksImg,
      amount: '9 modelos'
    },

    {
      title: 'Mesas',
      image: mesasImg,
      amount: '7 diseños'
    },

    {
      title: 'Escritorios',
      image: escritoriosImg,
      amount: '6 modelos'
    },

    {
      title: 'Vanitorys',
      image: vanitorysImg,
      amount: '10 proyectos'
    }

  ]

  return (

    <section className="categories" id="productos">

      <div className="categories-header">

        <span>

          CATEGORÍAS

        </span>

        <h2>

          Diseños pensados
          para cada espacio

        </h2>

      </div>

      <Swiper

        modules={[Pagination, Autoplay]}

        pagination={{ clickable: true }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}

        loop={true}

        spaceBetween={25}

        breakpoints={{

          0: {
            slidesPerView: 1.1
          },

          768: {
            slidesPerView: 2
          },

          1200: {
            slidesPerView: 3.2
          },

          1600: {
            slidesPerView: 4.2
          }

        }}
      >

        {categories.map((category, index) => (

          <SwiperSlide key={index}>

            <div

              className="category-card"

              onClick={() => {

  /* Cambia categoría */
  changeCategory(category.title)

  /* Navega a página */
  navigate(

    `/productos/${category.title.toLowerCase()}`
  )
}}
            >

              <img
                src={category.image}
                alt={category.title}
              />

              <div className="category-overlay">

                <h3>

                  {category.title}

                </h3>

                <span>

                  {category.amount}

                </span>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  )
}

export default Categories