import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return <div data-theme="cupcake" className=" w-screen h-screen absolute flex flex-row justify-center bg-base-100 font-sans"> 
    <div className=" w-9/12 text-center mt-14">
      <h1 className=" text-slate-800 font-bold text-4xl">Oh my Class</h1>
      <p className=" text-slate-600 text-xl font-bold mt-7">Make your school life at least better than suicidal thoughts</p>
      <button className="btn-primary btn-wide p-4 mt-7 rounded-2xl">Go to page</button>
    </div>
  </div>;
};

export default Home;
