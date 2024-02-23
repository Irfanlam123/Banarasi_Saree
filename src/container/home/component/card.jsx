// Card.js
import React from "react";
import Sare1 from "../component/sare1.png";
import Sare2 from "../component/sare2.png";
import Sare3 from "../component/sare3.png";

import { Link } from "react-router-dom";

const Card = ({ title, content }) => {
  const item = [
    {
      id: 1,
      img: Sare1,
      text: "Elevate Your Style with",
      maker: "Banarasi Sarees",
      time: "",
    },
    {
      id: 2,
      img: Sare2,
      text: "Unmatched Quality and",
      maker: "Equisite Designs",
      time: "",
    },
    {
      id: 3,
      img: Sare3,
      text: "Unleash Your Inner Diva",
      maker: "with Banarasi Sarees",
    },
  ];
  return (
    <>
      <div className="flex justify-between mt-6">
        {item.map((e, id) => {
          return (
            <>
              <Link to={`/shop/${id}`}>
                <div className="overflow-hidden rounded-lg  shadow-md my-4">
                  <img className="h-48 w-80" src={e.img} />
                </div>
                <div className="flex justify-center  ">
                  <p className=" text-2xl text-[#1C120D] ">{e.text}</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-2xl  text-black">{e.maker}</p>
                  <p className="text-sm  text-[#99694D]">{e.time}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center space-x-6">
        <Link to={`/shop`}>
        <button className="border border-gray-500  rounded-full w-20 h-10">Shop</button>

        </Link>
        <button>learn more {">"}</button>
      </div>
    </>
  );
};

export default Card;
