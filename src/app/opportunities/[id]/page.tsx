import opportunities from "../../../data/opportunities.js";

const singleOpportunities = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const opportunityId = await params;
  return (
    <div className="h-screen w-full">
      <div className="flex flex-wrap gap-5 mt-10 w-full px-5">
        {opportunities.map(
          (select) =>
            opportunityId.id === select.id && (
              <div
                className="flex flex-col gap-5 bg-slate-800/50 rounded-lg shadow-lg text-slate-400 p-5  transition-color duration-300 w-full border border-slate-700/50 "
                key={select.id}
              >
                <h1 className="text-lg text-slate-300 font-semibold">
                  {select.title}
                </h1>
                <p className="text-amber-400">{select.company}</p>
                <p className="text-blue-500">{select.location}</p>
                <p>{select.description}</p>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default singleOpportunities;
