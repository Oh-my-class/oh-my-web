import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return <div data-theme="winter" className=" w-screen h-screen absolute flex flex-row justify-center bg-base-100 font-sans bg-gradient-to-t from-white via-white to-slate-600"> 
    <div className=" w-9/12 text-center mt-14">
      <img src="https://www.theanimator.co.in/icon/1998840123schoolmanagement-icon.png" alt="" />
      <h1 className=" text-slate-800 font-bold text-5xl">Oh my Class</h1>
      <p className=" text-slate-600 text-xl font-bold mt-7">Make your school life at least better than suicidal thoughts</p>
      <button className="btn-primary btn-wide p-4 mt-7 rounded-2xl"><span className="text-lg font-bold">Go to page</span></button>
    </div>
  </div>;
};

export default Home;
