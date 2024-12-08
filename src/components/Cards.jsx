import React from "react";
import { Searches } from "./index.js"; // Ensure the path is correct

const Cards = () => {
  return (
    <div className="max-w-[1340px] w-full mx-auto ">
      <header>
        <h1 className="text-2xl font-bold mb-4 text-white my-5">Top Searches</h1>
      </header>
      <div className="flex  gap-5 overflow-auto">
        {Searches.map((item) => (
          <div key={item.id} className="min-w-[300px] mb-7">
            <img
              src={item.img}
              alt={item.name || "Search item"} 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
