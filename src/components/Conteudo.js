import React from "react";
import Container from "./Container";

import Layout from"@components/Layout";


const Conteudo = () => {
  return (
    <div className="conteudo">
        <Container >
        <h2>QUEM SOMOS</h2>
        <p>     
        O Azevedo Advogados Associados é um escritório multidisciplinar e dispõe de uma infraestrutura completa 
        e moderna de atendimento aos seus clientes. Estrategicamente sediado em Tangará da Serra, Mato Grosso, o
         escritório está localizado na região central da cidade, na Rua José Cândido Melhorança, n° 275-N.
          O escritório Azevedo Advogados Associados destaca-se por sua atuação diversificada e por oferecer 
          serviços jurídicos especializados em benefício de seus clientes. O escritório é reconhecido ainda 
          por sua agilidade e excelência na prestação de serviços jurídicos e por manter um relacionamento 
          estreito com seus clientes, o que nos permite desenvolver relacionamentos sólidos e bem sucedidos.
           Considerando o comportamento da sociedade moderna, e a necessidade de adequar a esse novo perfil de
            clientes, o Azevedo Advogados Associados oferece atendimento presencial, bem como digital, através
             de suas redes sociais e site.
       </p>
       <div className="text-center">
       <a href="#">SAIBA MAIS</a>
       </div>
        </Container>
        </div>   
       
  );

};

export default Conteudo;
