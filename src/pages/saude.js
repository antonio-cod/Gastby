import React from "react";
import Helmet from "react-helmet";
import saudeImg from "@assets/images/saude.png";

import Layout from "@components/Layout";
import Container from "@components/Container";

export default () => {
  return (
    <Layout pageName="saude">
      <Helmet>
        <title>SLS Advogados - Saúde – Preventivo/Contencioso</title>
      </Helmet>
      <div className="areas saude">
        <Container>
          <img src={saudeImg} alt="Saúde" />
          <p>
            Consultoria Jurídica Preventiva e Assessoria Jurídica Contenciosa especializada em
            Direito de Saúde, e Normativas da Agencia Nacional de Saúde - ANS, expertise na atuação
            Jurídica para Operadoras de Planos de Saúde,Hospitais, Clínicas médicas, de dentistas,
            fisioterapeutas, enfermeiros, farmácias e Laboratórios em geral. Atuação contenciosa na
            elaboração de defesas administrativas perante os Conselhos, CRM, CFM, CRO, CRF e demais
            e defesas e acompanhamento até final em processos judiciais.
          </p>

          <h3>Saúde – Preventivo/Contencioso</h3>

          <ul>
            <li>
              Gestão Jurídica Preventiva de análises de riscos de pessoas jurídicas e de
              profissionais liberais;
            </li>
            <li> Operadoras de Saúde;</li>
            <li> Hospitalar;</li>
            <li> Laboratorial;</li>
            <li> Clínicas de Radio Imagem;</li>
            <li> Clínicas Médicas;</li>
            <li> Clínicas Odontológicas;</li>
            <li> Farmacêuticos;</li>
            <li> Profissionais da Enfermagem, Fisioterapia e afins;</li>
            <li> Atuação junto aos Conselhos de Classe CRM, CRF, CRO e demais;</li>
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
