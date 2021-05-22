import React from "react";
import Container from "./Container";
import imageCard from "@assets/images/es-1.jpg"

const Atuacao = () => {
 return(        
         <div className="atuacao-header">     
         <div className="container"> 
         <div>                
         <h2>ÁREAS DE ATUAÇÃO</h2>            
          <p>Atualmente a Azevedo atua com estrutura física estratégica 
             na cidade de Tangará da Serra/MT, a fim de agregar eficiência e 
             otimizar os custos operacionais dos trabalhos desenvolvidos
          </p>       
          <div className="atuacao-button ">   
          <button href="#">AGRONEGÓCIO</button>
          <button href="#">EMPRESARIAL</button>  
          <button href="#">SUCESSÕES</button>   
          </div> 
          </div>                        
          <img src={imageCard} alt="Imagem"/>
      </div>
    </div>
   
    

)

}

export default Atuacao;
