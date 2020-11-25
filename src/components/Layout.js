import "@assets/stylesheets/application.scss";

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Footer from "@components/Footer";
import Slider from "@components/Slider";


const Layout = ({ children, pageName }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Azevedo</title>
      </Helmet>
      <div className="wrapper">
        <Slider home={pageName === "home"} />
        
        <main>{children}</main>
       
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
