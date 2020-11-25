import React from "react";
import Container from "./Container";
import Social from "./Social";
import ImageADV1 from "@assets/images/adv_image_3.jpeg";
import ImageADV2 from "@assets/images/adv_image_4.jpeg";
import AdvLogo from "@assets/images/adv.svg";


const Rodape = () =>{

 return (
   
         <footer>
          {/* <h1 className="text-center">SOCIOS</h1>  */}
          <div className="partFooter">
                
         </div>

       <div className="partFooter">
           <h4>Advogado</h4>
            <div className="partFooterImg">
                <img src={ImageADV1} alt=""/>
                <div>
                <a href="#">Dr. Flávio Azevedo</a>
                </div>
            </div>
      </div>

      <div className="partFooter">
        <h4>Advogado</h4>
          <div className="partFooterImg">
             <img src={ImageADV2} alt=""/>
             <div >
             <a href="#">Dr. Rafael Grilo</a>
             </div>
          </div>
      </div>
      
          <div className="partFooter"> 
             <h4>Redes Sociais</h4>
               <Social /> 
           </div>
    
   </footer>
    
    );
};
export default Rodape;