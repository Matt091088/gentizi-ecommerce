import "./styles/Footer.css";

import {

  FaInstagram,

  FaFacebookF,

  FaWhatsapp

} from "react-icons/fa";

function Footer() {

  return (

    <footer
      id="contacto"
      className="footer"
    >

      <h2>

        Gentizi Muebles

      </h2>

      {/* Redes */}
      <div className="footer-socials">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gentizi.mueblesdemelamina/?hl=en"
          target="_blank"
        >

          <FaInstagram />

        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/share/1Cc8QZEjMR/?"
          target="_blank"
        >

          <FaFacebookF />

        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/543765253186"
          target="_blank"
        >

          <FaWhatsapp />

        </a>

      </div>

      <span>

        <div className="footer-copy">

  <span>

    © 2026 Gentizi Muebles.
    Transformando espacios y emociones.

  </span>

  <a
    href="https://fernando-portfolio-ruby.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >

    Sitio Desarrollado por Fernando M. Tau

  </a>

</div>

      </span>

    </footer>

  );
}

export default Footer;