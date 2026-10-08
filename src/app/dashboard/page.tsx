// const page = () => {
//   return <div className="h-screen mt-10 mx-auto max-w-325">Dashboard

//   </div>;
// };

// export default page;

import opportunities from "../../data/opportunities.js";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
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
      </div>
    </div>
  );
};

export default page;
