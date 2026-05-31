import "./styles/WhatsappButton.css";

import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {

  return (

    <a
      href="https://wa.me/543765253186"
      target="_blank"
      className="whatsapp-float"
    >

      <FaWhatsapp />

    </a>

  );
}

export default WhatsappButton;