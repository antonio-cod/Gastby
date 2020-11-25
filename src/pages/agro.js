import React from "react";
import Helmet from "react-helmet";
import agroImg from "@assets/images/agro.png";

import Layout from "@components/Layout";
import Container from "@components/Container";

export default () => {
  return (
    <Layout pageName="agro">
      <Helmet>
        <title>SLS Advogados - Agronegócio - Preventivo/Contecioso</title>
      </Helmet>
      <div className="areas agro">
        <Container>
          <img src={agroImg} alt="Agro" />
          <p>
            Consultoria Jurídica Preventiva e Assessoria Jurídica contenciosa ao Agricultor e
            empresas do Agro, com especialização em agrobusiness com foco em commodities agrícolas,
            garantias reais e pignoratícias de crédito, dívidas rurais, tributos rurais, ações
            possessórias, sucessão familiar, recuperações de crédito, prevenção trabalhista e
            ambiental, questões bancárias.
          </p>

          <h3>Agronegócio – Preventivo/Contencioso</h3>

          <ul>
            <li>
              Gestão Jurídica Preventiva de análises de riscos de pessoas jurídicas e físicas;
            </li>
            <li>Revenda de Defensivos Agrícolas;</li>
            <li>Revendas de Sal mineral – Pecuária;</li>
            <li>Revenda de Tratores e Peças;</li>
            <li>Agroindústrias;</li>
            <li>Usinas;</li>
            <li>Cooperativas de Trabalho/Produção Agrícola;</li>
            <li>
              Agricultores em ações fundiárias de natureza de Interdito Proibitório, Reintegração de
              posse;
            </li>
            <li>Pecuaristas;</li>
            <li>
              Empresários rurais – Recursos administrativos e demandas judiciais ambientais junto a
              SEMA, IBAMA, INCRA, INTERMAT e afins;
            </li>
            <li>Pessoas jurídicas/físicas na análise da carga tributária;</li>
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
