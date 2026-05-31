import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './index.css'

import './styles/global.css'

import App from './App.jsx'

import AOS from 'aos'

import 'aos/dist/aos.css'


/* Inicializa animaciones */
AOS.init()


createRoot(document.getElementById('root')).render(

  <StrictMode>

    {/* Router principal */}
    <BrowserRouter>

      <App />

    </BrowserRouter>

  </StrictMode>,
)