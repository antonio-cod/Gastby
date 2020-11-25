import React from "react";
import Helmet from "react-helmet";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Conteudo from "@components/Conteudo";



const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Azevedo</title>
      </Helmet>
      <Conteudo />
    
    </Layout>
  );
};

export default IndexPage;
