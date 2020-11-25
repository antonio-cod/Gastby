import React from "react";
import Helmet from "react-helmet";
import undTangaraImg from "@assets/images/und-tangara.png";
import undVilhenaImg from "@assets/images/und-vilhena.png";

import Layout from "@components/Layout";
import Container from "@components/Container";

export default () => {
  return (
    <Layout pageName="unidades">
      <Helmet>
        <title>SLS Advogados - Saúde – Preventivo/Contencioso</title>
      </Helmet>
      <div className="unidades">
        <Container>
          <img src={undTangaraImg} alt="Tangará da Serra" />
          <img src={undVilhenaImg} alt="Vilhena" />
        </Container>
      </div>
    </Layout>
  );
};
