import React from "react";
import whatsappImg from "@assets/images/whatsapp.png";
import facebookImg from "@assets/images/facebook.png";
import instagramImg from "@assets/images/instagram.png";
const Social = () => {
  return (
    <div className="slider-social">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/slsadvogadosassociados/"
        target="_blank"
        className="slider-social--instagram"
      >
        <img src={instagramImg} alt="Instagram" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/slsadvogadosassociados/"
        target="_blank"
        className="slider-social--facebook"
      >
        <img src={facebookImg} alt="Facebook" />
      </a>

      {/* Whatsapp */}
      <a
        href="https://api.whatsapp.com/send?phone=55659999999999&text=Ol%C3%A1%2C%20seja%20bem%20vindo%20a%20SLS%20Advogados%20Associados%20"
        target="_blank"
        className="slider-social--whatsapp"
      >
        <img src={whatsappImg} alt="Whatsapp" />
      </a>
    </div>
  );
};

export default Social;
