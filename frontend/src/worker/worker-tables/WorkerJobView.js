import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { JOB_API_END_POINT } from "../../utils/constant";
import { setSingleJob } from "../../features/jobSlice";

const WorkerJobView = () => {
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

  const handleClick = () => {
    // Add logic for "Send a Request"
   //  console.log("Request sent for job:", job);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job Details</h2>
      <div className="space-y-2">
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
      <div className="mt-4 space-x-4">
        <button
          onClick={() => navigate("/worker/all-jobs")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleClick}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send a Request
        </button>
      </div>
    </div>
  );
};

export default WorkerJobView;
