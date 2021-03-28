import React from "react";
import Helmet from "react-helmet";

import Layout from "@components/Layout";
import Office from "@components/Office";

export default () => {
  return (
    <Layout pageName="business">
      <Helmet>  
        <title>SLS Advogados - A Empresa</title>
      </Helmet> 
      <Office />
    </Layout>
  );
};
