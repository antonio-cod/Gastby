import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Container from "@components/Container";
import Layout from "@components/Layout";
import News from "@components/News";

export default ({ data }) => {
  return (
    <Layout pageName="news">
      <Helmet>
        <title>SLS Advogados - Notícias</title>
      </Helmet>
      <Container>
        <News showCount />
      </Container>
    </Layout>
  );
};
