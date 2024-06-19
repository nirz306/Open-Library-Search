import React from "react";
import { Link } from "react-router-dom";

const Book = ({ cover_img, id, title, author = [], edition_count, first_publish_year }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f8f9fa] w-[500px] h-[600px] mt-10 p-5 shadow-lg rounded-lg">
      
      <div>
        <img className="w-max h-[370px]" src={cover_img} alt="cover" />
      </div>

      <div className="h-auto text-center mt-4">
        
        <Link to={`/book/${id}`}>
        {/* this helps to print only the first two lines , check the index.css */}
          <div className="line-clamp-2"> 
            <span className="font-bold text-lg">{title}</span>
          </div>
        </Link>

        <div className="">
          <span className="font-bold">Author: </span>
          <span>{author.join(", ")}</span>
        </div>

        <div className="mt-2">
          <span className="font-bold">Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className="mt-2">
          <span className="font-bold">First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>

      </div>
    </div>
  );
};

export default Book;


