// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const JobView = () => {
//    const { state } = useLocation();
//    const navigate = useNavigate();
//    const { job } = state;

//    return (
//       <div className="p-4">
//          <h1 className="text-3xl font-bold mb-4 underline">Job Details</h1>
//          <div className="space-y-2">
//             <p><strong>Full Name:</strong> {job.fullName}</p>
//             <p><strong>Email:</strong> {job.email}</p>
//             <p><strong>Phone:</strong> {job.phone}</p>
//             <p><strong>Address:</strong> {job.address}</p>
//             <p><strong>Date:</strong> {job.date}</p>
//             <p><strong>Time Period:</strong> {job.timePeriod}</p>
//             <p><strong>Proposed Fees:</strong> {job.proposedFees}</p>
//             <p><strong>Problem Description:</strong> {job.problemDescription}</p>
//             <p><strong>Images:</strong></p>
//             <div className="flex space-x-2">
//                {job.images.map((img, index) => (
//                   <img
//                      key={index}
//                      src={img}
//                      alt={`Problem ${index}`}
//                      className="h-20 w-20 object-cover rounded"
//                   />
//                ))}
//             </div>
//          </div>
//          <div className="mt-4">
//             <button
//                onClick={() => navigate('/admin/jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//             >
//                Back
//             </button>
//          </div>
//       </div>
//    );
// };

// export default JobView;

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { JOB_API_END_POINT } from "../../utils/constant";
import { setSingleJob } from "../../features/jobSlice";
import { BsArrowLeft } from "react-icons/bs";

const AdminJobView = () => {
  const params = useParams();
  const jobId = params.id;

  const { singleJob } = useSelector((state) => state.job); // Get all jobs from Redux
  const { user } = useSelector((state) => state.auth); // Get all jobs from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/job/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="p-4">
      <div className=" flex gap-10 my-8 space-x-4">
        <button
          onClick={() => navigate("/admin/jobs")}
          className="bg-gray-300 px-6 rounded hover:bg-gray-400"
        >
          <BsArrowLeft size={26} />
        </button>
        <h2 className="text-3xl font-bold underline">Job Details</h2>
      </div>
      <div className="space-y-2 mx-10">
        <p>
          <strong>Full Name:</strong> {singleJob?.createdBy?.fullName}
        </p>
        <p>
          <strong>Email:</strong> {singleJob?.createdBy?.email}
        </p>
        <p>
          <strong>Phone:</strong> {singleJob?.createdBy?.phone}
        </p>
        <p>
          <strong>Address:</strong> {singleJob?.createdBy?.address}
        </p>
        <p>
          <strong>Date:</strong> {singleJob?.date.split("T")[0]}
        </p>
        <p>
          <strong>Proposed Fees:</strong> {singleJob?.proposedFees}
        </p>
        <p>
          <strong>Problem Description:</strong> {singleJob?.description}
        </p>
        <p>
          <strong>Images:</strong>
        </p>
        <div className="flex space-x-2">
          {singleJob?.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Problem ${index}`}
              className="h-20 w-20 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminJobView;
