import React from "react";
import Helmet from "react-helmet";

import { Link } from "gatsby";
import Contact from "@components/Contact";

import Layout from "@components/Layout";
import Container from "@components/Container";
import ImageADV1 from "@assets/images/adv_image_3.jpeg";
import ImageADV2 from "@assets/images/adv_image_4.jpeg";
import { FaAtlassian } from "react-icons/fa";

export default () => {
  return (  
                  
    <Layout pageName="home">   
                          
      <Helmet>
        <title>Azevedo - Contato </title>  
      </Helmet>
      <div className="contato">  
      <Container>
      <div className="contato_titulo">    
      <h2>ENTRE EM CONTATO</h2>    
      </div>       
       <p>Para informações ou contato com nossos profissionais, utilize o formulário abaixo.</p>
       <p>Nossa equipe de atendimento retornará a sua mensagem o mais breve possível.</p>
       <p>flavio@adv-azevedo.com.br</p>
       <Contact />
       </Container>
       </div>             
          
    </Layout>
  );
};
