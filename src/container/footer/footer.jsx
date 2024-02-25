import React from "react";
import Foot from "../footer/foot.png"

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-400 h-96 p-4 mt-10">
        <div>
            <img src={Foot} alt="" />
        </div>
        <div className=" absolute top-[2020px] object-cover mt-[580px] ml-8 text-white">
          <h1 className="text-4xl font-bold">
            Discover Our Latest Collection
            <br />
            Now
          </h1>
          <p className="mt-11">Shop the finest selection of Banarasi sarees for any occasion.</p>
        </div>
        <div className=" absolute top-[2200px] space-x-4 mt-[580px] ml-8 ">
          <button className="bg-black h-10 w-20 text-white text-sm rounded-full">Shop</button>
          <button className="border border-gray-500 h-10 w-20 text-white   text-sm rounded-full">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
