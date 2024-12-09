import React, { useEffect, useState } from "react";
import { images } from "./index";
import { logout } from "../Firebase";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scroll,setScroll] = useState(false)  
  const [Out, setOut] = useState(false);
  const Display = () => {
    setOut(!Out);
  };


  useEffect(() => {
    const HandleScroll = () =>{
        if(window.scrollY > 50) {
            setScroll(true)
        }
        else{
            setScroll(false)
        }
      }    
    window.addEventListener('scroll',HandleScroll)
  },[])

  return (
    <div className={`w-full fixed top-0 right-0 left-0 z-20 ${scroll ?  'bg-black bg-opacity-100' :'bg-transparent'} text-white transition-colors duration-300 flex justify-between items-center md:px-12 px-4 py-6`}>
      <div className="flex justify-center gap-12 items-center">
        <Link to={'/homepage'}><img src={images.logo} alt="" className="w-32" /></Link>
        <ul className=" hidden md:flex justify-center items-center gap-5 ">
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            Tv Shows
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            Movies
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            News & Popular
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            My List{" "}
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
            Browse by Languages
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center ">
        <img
          src={images.search}
          alt=""
          className="w-6 invert mr-4 md:mr-7 cursor-pointer"
        />
        <img
          src={images.Bell}
          alt=""
          className="w-6 invert mr-4 md:mr-7 cursor-pointer"
        />
        <img
          src={images.Profile}
          alt=""
          className="w-10 rounded-lg mr-1  cursor-pointer"
          onClick={Display}
        />
        <img
          src={images.Darrow}
          alt=""
          className="w-4 invert relative cursor-pointer"
          onClick={Display}
        />
      </div>
      {Out ? (
        <div className="absolute right-8 md:right-16 top-20 ">
          <p onClick={() => {logout()}}  className="py-1.5 px-3 bg-gray-600 hover:underline cursor-pointer">
            Sign out of Netflix
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
