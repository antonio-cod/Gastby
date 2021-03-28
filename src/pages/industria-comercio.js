import React from "react";
import Helmet from "react-helmet";
import industriaComercioImg from "@assets/images/industria_comercio.png";

import Layout from "@components/Layout";
import Container from "@components/Container";

export default () => {
  return (
    <Layout pageName="industria-comercio">  
      <Helmet>
        <title>SLS Advogados - Indústria e Comércio - Preventivo/Contecioso</title>
      </Helmet>
      <div className="areas industria-comercio">   
        <Container>
          <img src={industriaComercioImg} alt="Indústria e Comércio" />
          <p>
            Consultoria Jurídica Preventiva e Assessoria Jurídica Contenciosa especializada em
            empresas do varejo e do atacado nos mais variados ramos, empresas de roupas, calçados,
            alimentos, restaurantes, postos de Combustível, Transportadoras e afins bem com nas
            indústrias e empresas prestadoras de serviço.
          </p>

          <h3>Indústria e Comércio – Preventivo/Contencioso</h3>

          <ul>
            <li> Associação Empresarial;</li>
            <li> Atacadista;</li>
            <li> Transportadoras;</li>
            <li> Varejo em Geral (roupa, calçados, eletrodomésticos, alimentação, etc.)</li>
            <li> Prestadores de Serviços em geral;</li>
            <li> Postos de Combustível;</li>
            <li> Frigoríficos;</li>
          </ul>
          <br />
          <p>
            Obs: O rol apresentado em cada área é de caráter meramente exemplificatvo, contendo as
            áreas de maior atuação do escritório. Precisando nos consulte.
          </p>
        </Container>
      </div>
    </Layout>
  );
};
