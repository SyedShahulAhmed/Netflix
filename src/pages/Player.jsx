import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

const Player = () => {

    const {id} = useParams();

    const [Data,setData] = useState({
        name:"",
        key:"",
        published_at: "",
        typeof:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTUyZDA3Mzk0MjI5OTJkNzYwZTVmYTA0NWJiMDhjMiIsIm5iZiI6MTczMzY2ODQzNC45NzQwMDAyLCJzdWIiOiI2NzU1YWU1MjZlMGJlZDI2NmI3ZjgwZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6WHsxq73Ttby2CqsTuWmt0nTDZeqqQZI0LxACRKJi48'
        }
      };
      
     useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setData(res.results[0]))
        .catch(err => console.error(err));
     },[])

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center relative">
      {/* Back Button */}
   <Link to={'/homepage'}>
   <IoArrowBackCircleOutline
        size={50}
        className="absolute top-4 left-4 cursor-pointer hover:text-gray-400 transition-colors duration-300"
      />
   </Link>

      {/* Video Player */}
      <div className="w-full max-w-4xl">
        <iframe
          src={`https://www.youtube.com/embed/${Data.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
          className="w-full aspect-video rounded-md shadow-lg"
        />
      </div>

      {/* Metadata */}
      <div className="flex justify-between items-center w-[90%] max-w-4xl mt-6 text-sm md:text-base text-gray-300">
        <p className="flex-1 text-center">Published: <span className="font-semibold">{Data.published_at.slice(0,10)}</span></p>
        <p className="flex-1 text-center font-semibold">{Data.name}</p>
        <p className="flex-1 text-center">Type: <span className="font-semibold">{Data.typeof ? Data.typeof :"Preview"}</span></p>
      </div>
    </div>
  );
};

export default Player;
