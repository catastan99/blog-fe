import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import getData from "../api/api";
import Slide from "./Slide";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Hero() {
  const [sliders, setSliders] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    getData("sliders?populate=*").then((data) => setSliders(data.data));
  }, []);

  //   console.log(sliders)

  return (
    <div className="Hero">
      <Slider {...settings}>
        {sliders.map((slider) => {
          return (
            <Slide
              key={slider.id}
              title={slider.attributes.title}
              description={slider.attributes.description}
              background={slider.attributes.background.data.attributes.url}
              alternativeText={
                slider.attributes.background.data.attributes.alternativeText
              }
              buttonText={
                slider.attributes.Button
                  ? slider.attributes.Button.buttonText
                  : null
              }
              buttonURL={
                slider.attributes.Button
                  ? slider.attributes.Button.buttonURL
                  : null
              }
              textPosition={
                slider.attributes.textPosition
                  ? slider.attributes.textPosition
                  : null
              }
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Hero;
