import { NextPage } from "next";
import React from "react";
import { Login } from "../../components/login/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center">
      <Login></Login>
    </div>
  );
};

export default LoginPage;
