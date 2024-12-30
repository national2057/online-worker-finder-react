import React from "react";

const jobs = [
  {
    sn: 1,
    date: "2081-06-23",
    category: "Electrician",
    status: "Pending",
  },
  {
    sn: 2,
    date: "2081-06-23",
    category: "Plumber",
    status: "Pending",
  },
  {
    sn: 3,
    date: "2081-06-23",
    category: "Painter",
    status: "Pending",
  },
];

const ApprovedJobs = () => {
  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-2 border-gray-700">S.N.</th>
            <th className="py-2 px-4 border-2 border-gray-700">Category</th>
            <th className="py-2 px-4 border-2 border-gray-700">Date</th>
            <th className="py-2 px-4 border-2 border-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-2 border border-gray-700">{data.sn}</td>
              <td className="py-2 px-2 border border-gray-700">
                {data.category}
              </td>
              <td className="py-2 px-2 border border-gray-700">
                {data.date}
              </td>
              <td className="py-2 px-2 border border-gray-700 ">
                <span className="text-black rounded-3xl px-2 py-1 bg-orange-600 border border-gray-400">
                  {data.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedJobs;
