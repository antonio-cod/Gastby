import React from "react";
import Container from "./Container";
import Areas from "@components/Areas";
import Atuacao from "@components/Atuacao";
import Noticias from "@components/Noticias";

const Conteudo = () => {
  return (
    <div className="conteudo">
      <Container>
        
        <h2>QUEM SOMOS</h2>
      <h3>Azevedo Advocacia</h3>
        <p>     
          A Azevedo tem como foco a advocacia empresarial e do agronegócio,
          que transita por entre as diversas áreas do direito (administrativo, 
          agrário, ambiental, cível, criminal, imobiliário, tributário, trabalhista entre outros),
           e Se destaca pela objetividade, modernidade e eficiência dos métodos de trabalho,
            tanto perante os órgãos administrativos, como judiciais.
       </p>
       <p>
         Assume com os seus clientes 
          o compromisso pelo comprometimento, seriedade, transparência e ética na assessoria prestada,
         eis que envolve toda a equipe, e dessa forma, revela sua maior assertividade e eficiência na 
        prestação de serviços. 
      </p>
       <p>
         Atualmente a Azevedo adivocacia atua com estrutura física estratégica na
        cidade de Tangará da Serra/MT, a fim de agregar eficiência e otimizar os custos operacionais dos 
        trabalhos desenvolvidos, tudo pautado no padrão global de administração para o melhor desempenho nos 
         trabalhos e realização pessoal dos seus parceiros e colaboradores. Desse modo, por seu perfil moderno
        de advocacia a Azevedo presta atendimento de excelência para assessorar uma gestão confiável e eficiente
         à demanda de todos os seus clientes
        </p>
        
     
       
        
      </Container>
      <div>
      <h2>ESCRITÓRIO</h2>
        <Areas />
        <h2>ÁREA DE ATUAÇÃO</h2>
        <Atuacao />
      
      <div className="contenedor">
      <h2>ÁREA DE ATUAÇÃO</h2>
        <Noticias />
      </div>
        </div>
     
     
    </div>
   
  );
};

export default Conteudo;
