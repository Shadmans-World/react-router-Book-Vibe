import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-10 rounded-xl mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img  src='https://i.ibb.co.com/khHN7Pk/9780143454212.jpg' className="max-w-sm rounded-lg shadow-2xl h-[550px]" />
        <div>
          <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
          
          <button className="btn bg-gradient-to-r from-orange-700 via-yellow-700 to-fuchsia-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
