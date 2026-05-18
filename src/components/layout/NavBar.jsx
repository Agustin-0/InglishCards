import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function hadleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="z-20 md:hidden">
        <button className="" onClick={hadleOpen}>
          <AiOutlineMenu
            className="text-3xl transition transform duration-300 
                                   hover:scale-110 text-secondary-500 hover:text-secondary-300 ease-in-out cursor-pointer"
          />
        </button>
        <div
          className={` inset-0 bg-black transition-opacity duration-300
                    ${isOpen ? "opacity-70" : "opacity-0 pointer-events-none"}`}
        ></div>
        <div
          className={`fixed top-0 right-0 h-screen w-1/2 bg-secondary-500
                    transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex justify-end">
                <button onClick={hadleOpen} className="pt-4 pr-4">
                    <AiOutlineCloseCircle className="text-3xl transition-transform hover:scale-110 cursor-pointer" />
                </button>
            </div>
          <ul className="flex flex-col items-center pt-4 gap-2">
            <li>
              <Link to="/" className="text-2xl text-neutral-50">
                Guide
              </Link>
            </li>
            <li>
              <Link to="/pokemones" className="text-2xl text-neutral-50">
                Translate
              </Link>
            </li>
            <li>
                <Link to="/pokemones" className="text-2xl text-neutral-50">
                DarkMode
              </Link>
            </li>
          </ul>
        </div>
      </nav>


        <ul className=" hidden md:flex items-center gap-4">
            <li>
              <Link to="/" className="text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pokemones" className="text-2xl">
                Pokemones
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
    </>
  );
}

export default Navbar;
