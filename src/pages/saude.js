import React from "react";
import Helmet from "react-helmet";
import saudeImg from "@assets/images/saude.png";

import Layout from "@components/Layout";
import Container from "@components/Container";
   
export default () => {
  return (
    <Layout pageName="home">    
      <Helmet>
      <title>Azevedo - Quem Somos</title>
      </Helmet>
      {/* <div className="areas saude"> */}
        <Container>
          {/* <img src={saudeImg} alt="Saúde" /> */}
    <div className="conteudo">
          <h2>ESCRITÓRIO</h2>
          <p>A Azevedo Advogados Associados é um escritório multidisciplinar e dispõe de uma infraestrutura 
            completa e moderna de atendimento aos seus clientes. Estrategicamente sediado em Tangará da Serra,
             Mato Grosso, o escritório está localizado na região central da cidade, na Rua José Cândido 
             Melhorança, n° 275-N. O escritório Azevedo Advogados Associados destaca-se por sua atuação 
             diversificada e por oferecer serviços jurídicos especializados em benefício de seus clientes.
              O escritório é reconhecido ainda por sua agilidade e excelência na prestação de serviços 
              jurídicos e por manter um relacionamento estreito com seus clientes, o que nos permite desenvolver
              relacionamentos sólidos e bem sucedidos. Considerando o comportamento da sociedade moderna, e a 
              necessidade de adequar a esse novo perfil de clientes, o Azevedo Advogados Associados oferece
               atendimento presencial, bem como digital, através de suas redes sociais e site.
          </p>

      <h2>MISSÃO</h2>
      <p>Atender com excelência nossos clientes, nas diversas áreas do direito, visando alcançar os seus 
        objetivos, investir constantemente em conhecimento, o que nos possibilita empregar as melhores práticas
         jurídicas e, consequentemente, tomar decisões estratégicas com segurança e agilidade.
          O nosso compromisso é com a eficiência e excelência das atividades jurídicas que prestamos e a 
          satisfação dos nossos clientes.
    </p>

    <h2>VISÃO</h2>
    <p>Ser referência regional na prestação de serviços jurídicos especializados, participando ativamente do 
      desenvolvimento econômico e social da nossa região.
    </p>     

  <h2>VALORES</h2>
<p className="linhaUnica">Ética, lealdade e transparência.</p>

  <h2>ATUAÇÃO</h2>
  <p>O escritório Azevedo Advogados Associados orienta seus clientes a evitar a esfera judicial, quando constata
     a possibilidade de solucionar os litígios, se valendo das técnicas alternativas e adequadas de resolução de
      conflitos, quais sejam: conciliação, mediação e negociação. A solução consensual de conflitos é menos 
      onerosa e mais célere, o que justifica a sua escolha quando possível. No entanto quando a solução 
      consensual de conflitos não é mais possível, sendo inevitável recorrer à esfera judicial para solucionar
       tais conflitos, o escritório atua em todas as fases, que compõem o contencioso judicial, administrativo 
       e arbitral. A nossa atuação é sempre fundamentada de acordo com as orientações jurisprudenciais e
        doutrinárias recentes. O escritório Azevedo Advogados Associados tem se destacado por sua atuação nas 
        seguintes áreas: Direito Civil, Direito Empresarial, Direito Tributário, Direito Trabalho, Direito
         Previdenciário e Direito Eleitoral.
  </p>

  </div>
        </Container>
      {/* </div> */}  
    </Layout>
  );
};
