import Link from "next/link.js";
import opportunities from "../../../data/opportunities.js";

const singleOpportunities = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const opportunityId = await params;
  return (
    <div className="h-screen w-full px-7 md:px-0  ">
      <div className="flex flex-col gap-5 mt-10 p-5 bg-slate-800 rounded-lg border border-slate-500">
        {opportunities.map(
          (select) =>
            opportunityId.id === select.id && (
              <div className="flex flex-col gap-5  " key={select.id}>
                <h1 className="text-lg text-slate-300 font-semibold">
                  {select.title}
                </h1>
                <p className="text-amber-400">{select.company}</p>
                <p className="text-blue-500">{select.location}</p>
                <p>{select.description}</p>
              </div>
            ),
        )}
        <div className="flex items-center gap-10">
          <Link
            href={"/opportunities"}
            className="bg-red-400 text-red-900 rounded-lg h-10 w-35 cursor-pointer hover:border border-red-400 hover:text-red-400 hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center"
          >
            Cancel
          </Link>
          <Link
            href={"/dashboard"}
            className="bg-slate-300 text-slate-700 rounded-lg h-10 w-35 cursor-pointer  hover:bg-slate-400 hover:text-slate-800 transition-colors duration-300 flex items-center justify-center"
          >
            add application
          </Link>
        </div>
      </div>
    </div>
  );
};

export default singleOpportunities;
