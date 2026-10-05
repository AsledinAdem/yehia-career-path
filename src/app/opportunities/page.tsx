import React from "react";

const page = () => {
  return (
    <div className="h-screen ">
      <div className="flex flex-wrap gap-5 mt-20 mx-auto max-w-250">
        <div className="flex flex-col gap-5 bg-slate-800/50 rounded-lg shadow-lg text-slate-400 p-5 w-80 cursor-pointer hover:bg-slate-700/50 transition-colors duration-300">
          <h1 className="text-lg text-slate-300 font-semibold">
            Junior Front-End Developer
          </h1>
          <p className="text-amber-400">Cedar Digital</p>
          <p className="text-amber-500">Beirut</p>
          <p>
            Build responsive interfaces and collaborate with a small development
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
