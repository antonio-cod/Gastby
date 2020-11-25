import React from "react";
import Helmet from "react-helmet";

import Layout from "@components/Layout";
import Container from "@components/Container";
import abntImg from "@assets/images/abnt.png";

export default () => {
  return (
    <Layout pageName="abnt">
      <Helmet>
        <title>SLS Advogados - Certificação</title>
      </Helmet>
      <div className="office">
        <Container>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter text-center">
              <img src={abntImg} />
            </div>
          </div>

          <h3>Política da Qualidade</h3>
          <p>
            "Proporcionar prestação de serviços em consultoria e assessoria jurídica, atendendo
            todos os requisitos de forma adequada e inovadora, com foco na satisfação do cliente e
            garantia de melhoria contínua da SLS Advogados Associados".
          </p>

          <h3>Objetivo da Qualidade</h3>
          <p>
            <ol style={{ listStyle: "square" }}>
              <li>Promover a satisfação do cliente;</li>
              <li>
                Promover a Melhoria Contínua dos Serviços Jurídicos e do Sistema de Gestão da
                Qualidade
              </li>
              <li>
                Atender rigorosamente todos os requisitos relacionados aos serviços jurídicos e os
                prazos determinantes no Processo;
              </li>
              <li>
                Incentivar o crescimento constante da marca SLS bem como o crescimento profissional
                dos associados e colaboradores.
              </li>
            </ol>
          </p>

          <h3>Valores</h3>
          <p>• Ética • Transparência • Confiança • Capacitação contínua dos profissionais.</p>

          <h3>Compliance / Lei proteção de dados</h3>
        </Container>
      </div>
    </Layout>
  );
};
