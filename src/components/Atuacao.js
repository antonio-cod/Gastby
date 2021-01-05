import React from "react";
import Container from "./Container";
import imageCard from "@assets/images/es-1.jpg"

const Atuacao = () => {
 return(
   
         <div className="textos-header">
            <h2 >ÁREAS DE ATUAÇÃO</h2>
            
        <div className="atuacao-header">
        
        <img src={imageCard} alt="Imagem"/>
       
      <div className="textos-header">
         <h2>Our creativity is your cusses</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
             velit aperiam 
            omnis doloribus quos ea exercitationem animi, repudiandae quam 
            sed consequuntur, architecto dignissimos. Tempora dolor
             atque reprehenderit, explicabo magni delectus.
          </p>
          <div className=" ">
          <a href="#">Learn more</a>
          <a href="#">Learn more</a>
          <a href="#">Learn more</a>
          
          </div>
      </div>
      
    </div>
    
    </div>
    

)

}

export default Atuacao;
