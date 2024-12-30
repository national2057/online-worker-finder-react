// import React from "react";
// import PostedJobs from "./PostedJobs";
// import { useSelector } from "react-redux";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const WorkerDashboard = () => {
//   const { allJobs } = useSelector((state) => state.jobs);

//   return (
//     <>
//       <div>
//         {jobsArray.length <= 0 ? (
//           <span className="bg-gray-200 p-10 mt-6 ml-60 rounded-lg shadow-lg max-w-xl w-full text-center text-3xl font-bold">
//             No Any Jobs Posted.
//           </span>
//         ) : (
//           <>
//             <p className="text-2xl font-bold mx-3 my-6 underline">
//               All Latest Posted Jobs:
//             </p>
//             <div className="grid grid-cols-3 m-8 gap-6 h-[88vh overflow-y-auto pb-5]">
//               {allJobs.length <= 0 ? (
//                 <span>Jobs Not Found!!</span>
//               ) : (
//                 allJobs
//                   ?.slice(0, 6)
//                   .map((job) => <PostedJobs key={job._id} job={job} />)
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default WorkerDashboard;

import React from "react";
import PostedJobs from "./PostedJobs";
import { useSelector } from "react-redux";

const WorkerDashboard = () => {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <>
      <p className="text-2xl font-bold mx-3 my-6 underline">
        All Latest Posted Jobs:
      </p>
      <div className="grid grid-cols-3 m-8 gap-6 h-[88vh overflow-y-auto pb-5]">
        {allJobs.length <= 0 ? (
          <span>Jobs Not Found!!</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <PostedJobs key={job._id} job={job} />)
        )}
      </div>
    </>
  );
};

export default WorkerDashboard;
