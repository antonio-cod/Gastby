 import React from "react";
import { Link } from "gatsby";

import imageImg2 from "@assets/images/2.jpg";
import imageImg1 from "@assets/images/1.jpg";
import imageImg3 from "@assets/images/3.jpg";


const Areas = () => {
  return (
    <div className="columns slider-areas">
     
      <div className="column">
        <Link to="">
          <img src={imageImg1} alt="" />
        </Link>
        <h3>SALA DE REUNIÃO</h3>
        <p>A Azevedo Advocacia tem se consolidado como
             um dos mais respeitados e reconhecidos 
             escritórios de advocacia do Brasil.
          </p>
      </div>

       
       <div className="column"> 
        <Link to=""> 
         <img src={imageImg2} alt="" /> 
         </Link> 
        <h3> ESTRUTURA FÍSICA E OPERACIONAL</h3> 
      <p>A expansão da Azevedo Advocacia proporcionou a proximidade real 
      com as atividades dos clientes, independente de sua localização.
     </p>
        </div> 
      
      

      <div className="column">
        <Link to="">
          <img src={imageImg3} alt="" />
        </Link>
        <h3>AMBIENTE DE TRABALHO</h3> 
      <p>A expansão da Azevedo Advocacia proporcionou a proximidade real 
      com as atividades dos clientes, independente de sua localização.
     </p>
      </div>
    </div>
  );
};

export default Areas;
