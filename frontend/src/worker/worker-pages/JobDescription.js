import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "../../features/jobSlice";

const JobDescription = () => {
  const params = useParams(); // to get id..
  const jobId = params.id;

  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);   
  const dispatch = useDispatch();

  // const whoApplied = singleJob?.applications?.some(application => application.applicant === user._id || "N/A");

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/job/${jobId}`, {
          withCredentials: true,
        });
        console.log(res);
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
    <div className="px-10 py-4">
      <h1 className="font-bold text-3xl mb-4 text-[#912cc8] underline">
        Job Description Page:-
      </h1>
      <div className="ml-5">
        <h1 className="font-bold text-xl"># Customer Details:-</h1>
        <p>
          <span className="font-medium text-lg pl-4">- Name: </span>
          {singleJob?.createdBy?.fullName}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Phone Number: </span>
          {singleJob?.createdBy?.phone}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Address: </span>
          {singleJob?.createdBy?.address}
        </p>
      </div>
      <div className="ml-5 mt-5">
        <h1 className="font-bold text-xl"># Problem Description:-</h1>
        <p>
          <span className="font-medium text-lg pl-4">- Title: </span>
          {singleJob?.categoryId?.title}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Description: </span>
          {singleJob?.description}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Date: </span>
          {singleJob?.date.split("T")[0]}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Time Period: </span>
          {singleJob?.startTime} - {singleJob?.endTime}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Proposed Fees: </span>Rs.
          {singleJob?.proposedFees}
        </p>
        <p>
          <span className="font-medium text-lg pl-4">- Images: </span>
          {singleJob?.images}
        </p>
      </div>
      <div className="ml-8 mt-10 space-x-6">
        <button className="bg-red-600 px-3 py-1 rounded-md">Reject</button>
        <button className="bg-green-600 px-3 py-1 rounded-md">Accept</button>
      </div>
    </div>
  );
};

export default JobDescription;
