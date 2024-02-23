import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BNS.png";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const navBar = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },

    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      name: "About",
      link: "/about",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <div className="flex  bg-[#ffffff] text-[#1C120D]">
        <div className="">
          <img src={logo} alt="" className="h-10 w-14 hover:opacity-65 mr-10" />
        </div>
        <div className="font-bold text-black">
          {" "}
          <span className="text-2xl font-bold">B</span>anarasi{" "}
          <span className="text-2xl font-bold">S</span>aree
        </div>
        {navBar.map((e) => {
          return (
            <div>
              <li className="list-none font-sans  mt-2 ml-20 ">
                <Link className="" to={e.link}>
                  {" "}
                  {e.name}
                </Link>
              </li>
            </div>
          );
        })}
        <div className="mt-3 space-x-3">
          <FaCartArrowDown />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
