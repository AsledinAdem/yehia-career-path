import opportunities from "../../data/opportunities.js";
const page = () => {
  return (
    <div className="h-screen ">
      <div className="flex flex-wrap gap-5 mt-20 mx-auto max-w-325 px-5 ">
        {opportunities.map((oportunity) => (
          <div
            className="flex flex-col gap-5 bg-slate-800/50 rounded-lg shadow-lg text-slate-400 p-5 sm:max-w-80 cursor-pointer hover:bg-slate-700/50 transition-all duration-300 w-full border border-slate-700/50 hover:scale-98"
            key={oportunity.id}
          >
            <h1 className="text-lg text-slate-300 font-semibold">
              {oportunity.title}
            </h1>
            <p className="text-amber-400">{oportunity.company}</p>
            <p className="text-blue-500">{oportunity.location}</p>
            <p>{oportunity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
