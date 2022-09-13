import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return <div data-theme="winter" className=" w-screen h-screen absolute flex flex-row justify-center bg-base-100 font-sans bg-gradient-to-t from-white via-white to-slate-600"> 
    <div className=" w-9/12 text-center mt-20 md:mt-8">
      <img src="https://cdn.onlinewebfonts.com/svg/img_142809.png" alt="School Icon" className="md:w-1/4 md:h-1/8 mx-auto"/>
      <h1 className=" text-slate-800 font-bold text-5xl mt-12">Oh my Class</h1>
      <p className=" text-slate-600 text-xl font-bold mt-7">Make your school life better with Oh my Class!</p>
      <button className="btn-primary btn-wide p-4 mt-7 rounded-2xl"><span className="text-lg font-bold">Go to page</span></button>
    </div>
  </div>;
};

export default Home;
