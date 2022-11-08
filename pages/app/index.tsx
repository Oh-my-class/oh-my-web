import { NextPage } from "next";
import React from "react";

const App: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:grid p-5 gap-5 lg:grid-rows-3 lg:grid-cols-3 animate-pulse">
      <div className="card bg-slate-800 shadow col-span-2">
        <div className="card-body">
          <h1 className="card-title">Welcome to Oh my Class!</h1>
        </div>
      </div>
      <div className="card bg-slate-800 shadow row-span-2">
        <div className="card-body">
          <h1 className="card-title">Next assessments</h1>
        </div>
      </div>
      <div className="card bg-slate-800 shadow row-span-2">
        <div className="card-body">
          <h1 className="card-title">Calendar</h1>
        </div>
      </div>
      <div className="card bg-slate-800 shadow row-span-2">
        <div className="card-body">
          <h1 className="card-title">Statistics</h1>
        </div>
      </div>
      <div className="card bg-slate-800 shadow">
        <div className="card-body">
          <h1 className="card-title">Marked assessments</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
