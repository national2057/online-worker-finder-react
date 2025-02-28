// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const CustomerDetailsView = () => {
//    const { state } = useLocation();
//    const navigate = useNavigate();
//    const { job } = state;

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Customer Details</h2>
//          <div className="space-y-2">
//             <p><strong>Full Name:</strong> {job.fullName}</p>
//             <p><strong>Email:</strong> {job.email}</p>
//             <p><strong>Phone:</strong> {job.phone}</p>
//             <p><strong>Address:</strong> {job.address}</p>
//          </div>
//          <div className="mt-4">
//             <button
//                onClick={() => navigate('/worker/approved-jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//             >
//                Back
//             </button>
//          </div>
//       </div>
//    );
// };

// export default CustomerDetailsView;


// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import useGetAllJobs from "../../hooks/useGetAllJobs";

// const CustomerDetailsView = () => {
//   const params = useParams();
//   useGetAllJobs(params.id);
//   const { allJobs } = useSelector((store) => store.job);

//   const navigate = useNavigate();

//   return (
//     <div className="p-4">
//       <h2 className="text-3xl font-bold mb-6 underline">Customer Details</h2>
//       <div className=" m-4 space-y-2">
//         <p>
//           <strong>Full Name:</strong> {allJobs?.createdBy?.fullName}
//         </p>
//         <p>
//           <strong>Email:</strong> {allJobs?.createdBy?.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {allJobs?.createdBy?.phone}
//         </p>
//         <p>
//           <strong>Address:</strong> {allJobs?.createdBy?.address}
//         </p>
//       </div>
//       <div className="mt-8 ml-10">
//         <button
//           onClick={() => navigate("/worker/approved-jobs")}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerDetailsView;


import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useGetApplicants from "../../hooks/useGetApplicants";

const CustomerDetailsView = () => {
  const params = useParams();
  useGetApplicants(params.id);

  const { allJobs } = useSelector((store) => store.job);
  const { applicants } = useSelector((store) => store.application);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 underline">Customer Details</h2>
      <div className=" m-4 space-y-2">
        <p>
          <strong>Full Name:</strong> {allJobs?.applications?.applicants?.fullName}
        </p>
        <p>
          <strong>Email:</strong> {applicants?.email}
        </p>
        <p>
          <strong>Phone:</strong> {applicants?.phone}
        </p>
        <p>
          <strong>Address:</strong> {applicants?.address}
        </p>
      </div>
      <div className="mt-8 ml-10">
        <button
          onClick={() => navigate("/worker/approved-jobs")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CustomerDetailsView;
