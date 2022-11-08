import { NextPage } from "next";
import React from "react";
import { Login } from "../../components/login/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center w-full">
      <Login className="w-full sm:1/2 md:w-1/3"></Login>
    </div>
  );
};

export default LoginPage;
