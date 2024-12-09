import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="max-w-[600px]  mx-auto  mt-[150px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Unlimited movies, Tv <br /> Shows and More
        </h1>
        <p className="text-white py-5 text-lg font-semibold">
          Starts at ₹149. Cancel at any time.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-300 pb-5 px-3 text-center">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="flex justify-center items-center mx-auto flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="py-5  px-6 md:font-lg placeholder:tex-lg md:placeholder:text-xl mx-auto rounded-full
                bg-gray-800
                bg-opacity-80
                text-white
                w-full
                border-none
                outline-none
               "
          />
         <Link to={'/login'}
            className="py-1.5 px-3 bg-red-600 flex justify-center
                md:text-xl 
                items-center rounded-full
                font-bold text-white md:w-[300px]"
          >
          Get Started <RiArrowDropRightLine size={50} />
         </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
