 import React from "react";
import { Link } from "gatsby";
import Container from "./Container";

import imageImg2 from "@assets/images/2.jpg";
import imageImg1 from "@assets/images/1.jpg";
import imageImg3 from "@assets/images/3.jpg";



const Areas = () => {
  return (
    
    <div>
      <h2 className="titulo text-center">O ESCRITÓRIO</h2>
  
       <div className="escritorio">
       
        <div className="escritorio-areas">
          <img src={imageImg1} alt="IMAGEM" />
           </div>
           <div className="escritorio-marge">
           <h3>SALA DE REUNIÃO</h3>
           <p>A Azevedo Advocacia tem se consolidado como
             um dos mais respeitados e reconhecidos 
             escritórios de advocacia do Brasil.
           </p>
        </div>
       <div className="escritorio-marge">
       <h3> ESTRUTURA FÍSICA E OPERACIONAL</h3> 
         <p>A expansão da Azevedo Advocacia proporcionou a proximidade real 
         com as atividades dos clientes, independente de sua localização. </p>
         </div>
         <div className="escritorio-areas">
         <img src={imageImg2} alt="IMAGEM" /> 
       </div>
      </div>
    </div>
   
  );
};

export default Areas;
