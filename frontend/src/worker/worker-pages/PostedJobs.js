import React from "react";
import { useNavigate } from "react-router-dom";

const PostedJobCard = ({job}) => {
   const navigate = useNavigate();
   // const jobId = "879q94kjbjhabbhihau98urt"
   
   const daysAgoFunc = (mongodbTime) => {
      const createdAt = new Date(mongodbTime);
      const currentTime = new Date();
      const timeDifference = currentTime - createdAt;
      return Math.floor(timeDifference/(24*60*60*1000));
   }
  return (
    <div className="w-[350px] h-[200px] p-6 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="space-y-2">
        <p>
          <strong>From:</strong> {job?.createdBy?.fullName}
        </p>
        <p>
          <strong>Category:</strong> {job?.categoryId.title}
        </p>
        <p>
          <strong>Description:</strong> {job?.description}
        </p>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={() => navigate(`/worker/job-description/${job?._id}`)} className="rounded-lg border border-black border-solid px-3 bg-purple-700">
          View Details
        </button>
        <p className="font-normal text-sm mt-6 underline">{daysAgoFunc(job?.createdAt) === 0 ? "Today" : `${daysAgoFunc(job?.createdAt)} days ago.`}</p>
      </div>
    </div>
  );
};

export default PostedJobCard;
