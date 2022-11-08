import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className=" w-screen h-screen absolute flex flex-row justify-center bg-base-100 font-sans">
      <div className=" w-9/12 text-center mt-20 md:mt-8">
        <h1 className=" text-white font-bold text-5xl mt-12">Oh my Class</h1>
        <p className=" text-slate-400 text-xl font-bold mt-7">
          Make your school life better with Oh my Class!
        </p>
        <div className="flex flex-col items-center gap-2 ">
          <Link href={"/login"}>
            <button className="btn-primary btn-wide p-4 mt-7 rounded-2xl">
              <span className="text-lg font-bold">Login</span>
            </button>
          </Link>
          <Link href={"/login/register"}>
            <a className="link link-hover">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
