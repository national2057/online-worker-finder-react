import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WorkerJobView = () => {
   const { state } = useLocation();
   const navigate = useNavigate();
   const { job } = state;

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">Job Details</h2>
         <div className="space-y-2">
            <p><strong>Full Name:</strong> {job.fullName}</p>
            <p><strong>Email:</strong> {job.email}</p>
            <p><strong>Phone:</strong> {job.phone}</p>
            <p><strong>Address:</strong> {job.address}</p>
            <p><strong>Date:</strong> {job.date}</p>
            <p><strong>Time Period:</strong> {job.timePeriod}</p>
            <p><strong>Proposed Fees:</strong> {job.proposedFees}</p>
            <p><strong>Problem Description:</strong> {job.problemDescription}</p>
            <p><strong>Images:</strong></p>
            <div className="flex space-x-2">
               {job.images.map((img, index) => (
                  <img
                     key={index}
                     src={img}
                     alt={`Problem ${index}`}
                     className="h-20 w-20 object-cover rounded"
                  />
               ))}
            </div>
         </div>
         <div className="mt-4">
            <button
               onClick={() => navigate('/worker/jobs')}
               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
               Back
            </button>
         </div>
      </div>
   );
};

export default WorkerJobView;
