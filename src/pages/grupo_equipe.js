import React from "react";
import Helmet from "react-helmet";

import { Link } from "gatsby";
import Equipe from "@components/Equipe";

import Layout from "@components/Layout";
import Container from "@components/Container";
import ImageADV1 from "@assets/images/adv_image_3.jpeg";
import ImageADV2 from "@assets/images/adv_image_4.jpeg";
import { FaAtlassian } from "react-icons/fa";         

export default () => {               
  return (  
                  
    <Layout pageName="home">   
          
      <Helmet>
        <title>Azevedo - Equipe </title>   
      </Helmet>
      <div className="grupo_equipe">  
        
        <div className="grupo-estrutura">       

        <nav className="grupo-sidenav">                   
                <ul> 
                <li><button href="#direito-do-agronegócio">ATUAÇÃO </button></li>
                <li><button href="#direito-empresarial">NOTÍCIAS</button></li>
                <li><button href="#direito-em-sucessoes">CONTATO</button></li>      
                      
                </ul>          
            </nav>   
                   
            <div className="grupo-content-item">        
        <div id="direito-do-agronegócio" className="grupo-titulo-titulo">
                <h1>ADVOGACIA AZEVEDO</h1>
                <span>Sócios Diretores</span>
            </div>                                                  
            <div className="image-1">             
             {/* Texto */}
            <p>O Instituto Brasileiro de Direito do Agronegócio (IBDA) nasceu da vocação de estudar o Direito e Economia da atividade agroindustrial,
             trazendo um novo modelo para o estudo, regulamentação e formulação de políticas públicas das atividades que formam o setor.</p>
            </div>     
            <div className="grupo-perfil">  
                <img src={ImageADV1} alt="Flávio"/>
                    <p>Dr. Flávio Azevedo</p>       
                    <p>OAB/MT 26.444</p>  
                </div> 
  
                <div className="image-2"> 
             {/* Texto */}
            <p>O Instituto Brasileiro de Direito do Agronegócio (IBDA) nasceu da vocação de estudar o Direito e Economia da atividade agroindustrial,
             trazendo um novo modelo para o estudo, regulamentação e formulação de políticas públicas das atividades que formam o setor.</p>
            </div>     
            <div className="grupo-perfil">
                <img src={ImageADV2} alt="Rafael"/>
                    <p>Dr. Flávio Azevedo</p>
                    <p>Dr. Rafel Soares Dos Reis Grilo</p>
                    <p>OAB/MT 23.399</p>      
                </div> 

                                          
                <div className="grupo-titulo-titulo">
                <h1>EQUIPE</h1>
                </div>

    <blockquote className="grupo-citacao grupo-col-wide">
     <p> Ser referência regional na prestação de serviços jurídicos especializados,
        participando ativamente do desenvolvimento econômico e social da nossa região. </p>
        <div className="grupo-flex">
            <div>  
            <FaAtlassian />
            <p>Dr. HERRIQUE DE SOUZA MENDONÇA</p>
                <p>OAB/MT 23.410</p>
                <p>ADVOGADO</p>
            </div>
                    
            <div>
            <FaAtlassian />
            <p>Dr. LETICIA LANCELOTTI FÁVERO</p>
                <p>OAB/MT 25.904</p>
                <p>ADVOGADA</p>
            </div>

            <div>
            <FaAtlassian />
            <p>MARIA ROSARIO DA SILVA</p>
                <p>ADMINISTRADOR</p>
            </div>

            <div>
            <FaAtlassian />
            <p>ROBERTA MIRANDA DO CARMO</p>
                <p>SECRETARIA</p>
            </div>

            <div>
            <FaAtlassian />
            <p>BRUNA RODRIGUES DA CRUZ</p>
                <p>ATENDENTE</p>
            </div>

            <div>
            <FaAtlassian />
            <p>CARLOS PINTO SOUZA</p>
                <p>AUX. ATENDENTE</p>
            </div>

        </div>

   </blockquote>         
                 
  </div>
            
        
  <aside className="grupo-anuncios">
                      
                  
               
    </aside>
    </div>
        
      </div>
    </Layout>
  );
};
