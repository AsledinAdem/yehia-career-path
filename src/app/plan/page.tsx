import React from "react";

const plan = () => {
  return (
    <div className="h-screen mt-10 mx-auto max-w-300 flex flex-col item-center space-y-30 px-10">
      {/* milston bar */}
      <div className="w-full flex items-center justify-between max-w-92.5 md:max-w-250 mx-auto">
        <div className="rounded-full  border-2 border-slate-500  w-10 h-10 flex items-center justify-center text-slate-400 relative ">
          <p className="font-semibold">1</p>
          <span className="absolute -bottom-8 text-slate-400/50 text-sm">
            Prepare
          </span>
        </div>

        <div className="rounded-full  border-2 border-slate-500  w-10 h-10 flex items-center justify-center text-slate-400 relative">
          <p className="font-semibold">2</p>
          <span className="absolute -bottom-8 text-slate-400/50 text-sm">
            Achive
          </span>
        </div>

        <div className="rounded-full  border-2 border-slate-500  w-10 h-10 flex items-center justify-center text-slate-400 relative">
          <p className="font-semibold">3</p>
          <span className="absolute -bottom-8 text-slate-400/50 text-sm">
            Finised
          </span>
        </div>
      </div>

      {/* filling form */}
      <div className="w-full bg-slate-800 h-96 rounded-xl border border-slate-700 ">
        <div className="w-full p-7 flex items-center justify-between">
          {/* 1 */}
          <div className="w-full flex flex-col justify-center gap-5 bg-slate-600">
            <div>Prepare</div>
            <form action="#">
              <div className="flex items-center  gap-2 text-sm">
                <input type="checkbox" name="cv" />
                <label htmlFor="cv">Prepare CV</label>
              </div>
            </form>
          </div>
        </div>

        {/* 2 */}
        {/* <div>achive</div> */}

        {/* 3 */}
        {/* <div>finished</div> */}
      </div>
    </div>
  );
};

export default plan;
