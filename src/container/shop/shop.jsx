import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Saree1 from "../shop/saree.jpg";
import { Link } from "react-router-dom";
import Card from "../home/component/card";

const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <div className="mt-3">
        <Slider {...settings}>
          <div>
            <img className="h-[600px] w-full" src={Saree1} alt="img" />
          </div>
          <div>
            <img className="h-[600px] w-full" src={Saree1} alt="img" />
          </div>
          <div>
            <img className="h-[600px] w-full" src={Saree1} alt="img" />
          </div>
        </Slider>
      </div>
    
      <Card/>
    </div>
  );
};

export default Shop;
