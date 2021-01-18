import React from "react";
import Container from "./Container";
import imageCard from "@assets/images/es-1.jpg"

const Atuacao = () => {
 return(        
         <div className="atuacao-header">
                 
         <img src={imageCard} alt="Imagem"/>
         <div className="textos-header">
         <h2>ÁREAS DE ATUAÇÃO</h2>
          <p>Atualmente a Azevedo atua com estrutura física estratégica 
             na cidade de Tangará da Serra/MT, a fim de agregar eficiência e 
             otimizar os custos operacionais dos trabalhos desenvolvidos
          </p>
          <div className="atuacao-button ">
          <a href="#">AGRONEGÓCIO</a>
          <a href="#">EMPRESARIAL</a>
          <a href="#">SUCESSÕES</a>
          </div>
      </div>
            
    </div>
   
    

)

}

export default Atuacao;
