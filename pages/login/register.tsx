import { NextPage } from "next";
import React from "react";
import { Register } from "../../components/login/Register";

const RegisterPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center">
      <Register></Register>
    </div>
  );
};

export default RegisterPage;
