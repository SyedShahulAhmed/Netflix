import React, { useEffect, useState } from "react";
import { Searches } from "./index.js"; // Ensure the path is correct
import { Link } from "react-router-dom";

const Cards = ({title,Cat}) => {

  const [Movies,setMovies] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTUyZDA3Mzk0MjI5OTJkNzYwZTVmYTA0NWJiMDhjMiIsIm5iZiI6MTczMzY2ODQzNC45NzQwMDAyLCJzdWIiOiI2NzU1YWU1MjZlMGJlZDI2NmI3ZjgwZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6WHsxq73Ttby2CqsTuWmt0nTDZeqqQZI0LxACRKJi48'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${Cat ? Cat : "now_playing"}?language=en-US&page=3`, options)
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err));
  },[])
  
  return (
    <div className="max-w-[1340px] w-full  mx-auto overflow-hidden">
      <header>
        <h1 className="text-2xl font-bold mb-4 text-white my-5 ml-5">{title}</h1>
      </header>
      <div className="flex  gap-5 overflow-auto">
        {Movies.map((item) => (
          <Link to={`/player/${item.id}`}>
          <div key={item.id} className="min-w-[300px] mb-7 ml-5 hover:scale-105 transition-all duration-300">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.name || "Search item"} 
              className="w-full rounded-lg shadow-md"
            />
            <h1 className="text-white font-semibold mt-2">{item.original_title}</h1>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
