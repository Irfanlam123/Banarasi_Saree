import React from "react";
import Saree from "../home/saree.jpg";
import Lover from "./component/lover";
import Footer from "../footer/footer";
import { Link, NavLink } from "react-router-dom";
import Card from "./component/card";


const Home = () => {
  return (
    <div>
      <div className="mt-24 ml-4 flex justify-between">
        <h1 className="text-5xl font-bold">
          Experience the <br /> Beauty of Banarasi <br /> Sarees
        </h1>
        <div className="">
          <p className="text-sm">
            Indulge in the rich tradition and elegance of Banarasi sarees,
            handcrafted <br /> with love and care.
          </p>
          <div className="space-x-4 mt-6">
            <Link to={`/shop`}>
            <button className="bg-black text-white w-20 h-10 rounded-full">shop</button>

            </Link>
            <Link to={`/about`}>
            <button className=" text-black w-28 h-10 border border-black rounded-full ">
              learn more
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-4">
        <img src={Saree} className="h-[700px] w-full" />
      </div>
    
      <Lover/>
     
      <Footer/>
    </div>
  );
};

export default Home;
