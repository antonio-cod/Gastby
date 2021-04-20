import React from "react";
import Container from "./Container";
import Social from "./Social";
import ImageADV1 from "@assets/images/adv_image_3.jpeg";
import ImageADV2 from "@assets/images/adv_image_4.jpeg";
import AdvLogo from "@assets/images/adv.svg";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";


const Rodape = () =>{

 return (
           
 <div className="rodape"> 
   <footer>
          <div className="partFooter"> 
           <h4>REDES SOCIAIS</h4>
           <div className="partFooterSocial">
           <FaFacebook/>
           <FaWhatsapp/>
           <FaInstagram/>
           </div>
           </div> 
         <div className="partFooter">
           <h4>ADVOGADO</h4>
           <div className="partFooterImg">
                <img src={ImageADV1} alt=""/>
                <div>
                <a href="#">Dr. Flávio Azevedo</a>
                <div>
                <span>Socio Diretor</span>
                </div>
            </div>
            </div>
            </div>

         <div className="partFooter">
           <h4>ADVOGADO</h4>
           <div className="partFooterImg">
             <img src={ImageADV2} alt=""/>
           <div >
             <a href="#">Dr. Rafael Grilo</a>
             <div>
                <span>Socio Diretor</span>
                </div>
           </div>
           </div>
           </div>

           <div className="partFooter">
             <h4>CONTATO</h4>
              <div>
              <span className=" ">(65) 33261443</span>
              </div>
              <div>
              <span className="">flavio@adv-azevedo.com.br</span>
              </div>
              </div>
           </footer>
           </div>
    );
};
export default Rodape;