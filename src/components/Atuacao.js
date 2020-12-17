import React from "react";
import Container from "./Container";
import imageCard from "@assets/images/es-1.jpg"

const Atuacao = () => {
 return(
   
  
        <div className="atuacao-header">
        <img src={imageCard} alt="Imagem"/>
       
      <div className="textos-header">
         <h1>Our creativity is your cusses</h1>
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
    
    


)

}

export default Atuacao;
