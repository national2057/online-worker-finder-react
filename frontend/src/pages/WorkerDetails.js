import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const WorkerDetailsView = () => {
  const { allJobs } = useSelector((store) => store.job);
  const { applicants } = useSelector((store) => store.application);
    const navigate = useNavigate();

  return (
    <div>
      <div className="mx-10 md:mx-72 my-20 p-6 bg-white shadow-md rounded-lg">
        <p className="pl-12 cursor-pointer" onClick={() => navigate("/natservices/job-response")}>
          <FaArrowLeftLong size={26} />
        </p>
        <div>
          <h2 className="text-3xl font-bold mb-6 underline text-center">
            Worker Details
          </h2>
        </div>
        <div className="space-y-4 p-4 border rounded-md bg-gray-50">
          <p>
            <strong className="text-gray-700">Full Name:</strong>{" "}
            {allJobs?.applications?.applicants?.fullName || "N/A"}
          </p>
          <p>
            <strong className="text-gray-700">Email:</strong>{" "}
            {applicants?.email || "N/A"}
          </p>
          <p>
            <strong className="text-gray-700">Phone:</strong>{" "}
            {applicants?.phone || "N/A"}
          </p>
          <p>
            <strong className="text-gray-700">Experience:</strong>{" "}
            {applicants?.address || "N/A"}
          </p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400"
            onClick={() => alert("Application Accepted")}
          >
            Accept
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400"
            onClick={() => alert("Application Rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetailsView;
