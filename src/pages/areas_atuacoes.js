import React from "react";
import Helmet from "react-helmet";
import Industria from "@assets/images/industria_comercio.png";
import { Link } from "gatsby";
import Equipe from "@components/Equipe";

import Layout from "@components/Layout";
import Container from "@components/Container";
import { FaSeedling } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa";
import Agro from "@assets/images/bg-areas-agro.png";
import { FaPagelines, FaBuilding, FaDonate } from "react-icons/fa";




export default () => {
  return (  
                  
    <Layout pageName="home">   
          
      <Helmet>
        <title>Azevedo - Areas de Atuações</title>
      </Helmet>
      <div className="areas_atuacoes">  
        
        <div className="estrutura">
          
        <nav className="sidenav">                 
                <ul> 
                <li><button href="#direito-do-agronegócio">AGRONEGÓCIO </button></li>
                <li><button href="#direito-empresarial">EMPRESARIAL </button></li>
                <li><button href="#direito-em-sucessoes">SUCESSÕES </button></li>     
                    {/* <li className='sidenav-item'>
                    <Link to='/' className='nav-links'>  
                    AGRONEGÓCIO 
                    </Link>  
                    </li>
                    <li className='sidenav-item'>
                    <Link to='/' className='nav-links'>
                    EMPRESARIAL
                    </Link>  
                    </li>     
                    <li className='sidenav-item'> 
                    <Link to='/' className='nav-links'>
                    SUCESSÕES
                    </Link>  
                    </li> */}     
                  
                </ul>          
            </nav>
                   
            <div className="content-item">        
        <div id="direito-do-agronegócio" className="titulo-titulo">
                <h1>AREAS DE ATUAÇÕES</h1>
                <span>DIREITO DO AGRONEGÓCIO</span>
            </div>       
            <div className="image-1"> 
            <FaPagelines /> 
             {/* Segunda Parte do Texto */}
            <p>O Instituto Brasileiro de Direito do Agronegócio (IBDA) nasceu da vocação de estudar o Direito e Economia da atividade agroindustrial,
             trazendo um novo modelo para o estudo, regulamentação e formulação de políticas públicas das atividades que formam o setor.</p>
               
            </div>                    
              
            <p>
                {/* Primeira parte do Texto */}
             O IBDA preza pelo estudo que privilegie a geração de valor aos negócios, a partir de estudos acadêmicos por meio de notas técnicas, 
             com contribuição prática, a fim de contingenciar riscos nas operações e otimizar os resultados econômicos através da aplicação 
             dos adequados instrumentos jurídicos.
              O corpo docente, programa acadêmico e apoios institucionais formam os principais pilares
              para o desenvolvimento dos cursos e treinamentos que o IBDA desenvolve, com conteúdo de grande profundidade, mas ao mesmo 
              tempo prático e aplicável às atividades de todos os operadores do Agronegócio.</p>
               
   <div id="direito-empresarial" className="titulo-titulo">  
   <span>DIREITO EMPRESARIAL</span>
   </div>                  
       {/* Primeira parte do Texto */}
     <p>Toda entidade empresarial, grande ou pequena, precisa de do direito empresarial 
     e de um advogado que a represente. Afinal, embora seja uma
     iniciativa privada, existem centenas de regras e regulações 
     que o empresário precisa seguir para garantir a adequação
     jurídica que influencia diretamente no sucesso de seu 
     negócio. Cada empresa opera dentro de leis específicas as
    quais deve aderir. Um advogado especialista em direito 
     empresarial, bem qualificado, ajudará em todo o
    entendimento da realidade da respectiva empresa e 
    consequente adequação à sua realidade jurídica, 
    aproveitando melhor oportunidades e diminuindo riscos 
    inerentes à atuação da mesma.</p>
    
    <div className="image-1">
    <FaBuilding />
    {/* Segunda Parte do Texto */}
    <p> São inúmeras leis envolvidas 
    no mundo dos negócios, portanto o direito empresarial é 
    fundamental no quesito segurança jurídica aos sócios, 
    investidores e clientes. Em resumo, se você é ou pretende 
    ser empresário, tenha à seu lado um profissional qualificado para apoiá-lo.
    </p>
    </div>
    
    <div  className="titulo-titulo">
    <span id="direito-em-sucessoes">DIREITO EM SUCESSÕES</span>
    </div> 
    <p>Com o falecimento da pessoa física termina com ela a sua 
    existência jurídica. Esta situação é evidenciada pela Código
     Civil no art. 68, n.1 O Direito das Sucessões integra todas
    as áreas do Direito Civil. Desde modo, a pessoa falecida 
   deixa de ser um sujeito possuidor de direitos e obrigações.
   Ao morrer, o falecido perde a sua titularidade sobre o 
   patrimônio.
   No entanto, todo os seus bens, dívidas e
    obrigações, que com sua morte passou a ser reconhecido 
    como sendo herança, por lei, são encaminhados os 
    sucessíveis,</p>     

   <div className="image-1">    
     {/* Segunda Parte do Texto */}  
   <p>  que podem aceitá-la ou rejeitá-la. 
    Esta situação é descrita por Maria Berenice Dias (2011),
     como sendo a sucessão. Ou seja, por causa da morte do 
     responsável pela herança, ele deixa de ter a capacidade 
     jurídica sobre os seus bens passando esse direito para 
     outra(s) pessoa(s). </p>
    <FaDonate />
    </div>

    <blockquote className="citacao col-wide">
     <p> Ser referência regional na prestação de serviços jurídicos especializados,
        participando ativamente do desenvolvimento econômico e social da nossa região. </p>
   </blockquote>         
                 
  </div>
  
        
  <aside className="anuncios">
                      
     <Equipe />                 
               
    </aside>
    </div>
        
      </div>
    </Layout>
  );
};
