import React from "react";
import Header from "./Header";
import Social from "./Social";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Slider1 from "@assets/images/1.jpg";
import abntImg from "@assets/images/abnt.png";
import Areas from "./Areas";

const Slider = ({ home }) => {
  return (
    <>
      <Header />
      {home && (
        <>
          <img src={abntImg} alt="ABNT" className="slider-abnt" />
          <Social />
          <AwesomeSlider cssModule={AwesomeSliderStyles} play={true} bullets={false}>
            <div data-src={Slider1} />
          </AwesomeSlider>
          
        </>
      )}
    </>
  );
};

export default Slider;
