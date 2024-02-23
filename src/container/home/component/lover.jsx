import React from "react";
import Yashi from "../component/saii.png"
import Lover2 from "./lover2";

const Lover = () => {
  return (
    <div >
      <div className="mt-20 ml-4 flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mt-32">
            Discover the Timeless Elegance <br /> of Banarasi Sarees
          </h1>
          <p className="mt-8">
            Indulge in the rich heritage and exquisite craftsmanship of Banarasi{" "}
            <br /> sarees. Each piece tells a story of tradition and artistry.
          </p>
          <ul className="mt-10 ml-10 list-disc">
            <li>Handwoven with love by skilled artisans</li>
            <li>Experience the opulence of pure silk</li>
            <li>Embrace the intricate beauty of zari work</li>
          </ul>
        </div>
        <div>
            <img src={Yashi} alt="img" className="h-[500px] w-[500px]" />
        </div>
      </div>
      <Lover2/>
    </div>
  );
};

export default Lover;
