import React from "react";
import Helmet from "react-helmet";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Conteudo from "@components/Conteudo";
import Areas from "@components/Areas";
import Atuacao from "@components/Atuacao";
import Noticias from "@components/Noticias";
import Equipe from "@components/Equipe";
import Contact from "@components/Contact";




const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Azevedo</title>
      </Helmet>
      
     <Conteudo />
      <Areas />
      <Atuacao />
      <Noticias />
      <Equipe />
      <Contact />
    </Layout>
    
    
  );
};

export default IndexPage;
