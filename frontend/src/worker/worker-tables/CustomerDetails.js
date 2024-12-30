import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomerDetailsView = () => {
   const { state } = useLocation();
   const navigate = useNavigate();
   const { job } = state;

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">Customer Details</h2>
         <div className="space-y-2">
            <p><strong>Full Name:</strong> {job.fullName}</p>
            <p><strong>Email:</strong> {job.email}</p>
            <p><strong>Phone:</strong> {job.phone}</p>
            <p><strong>Address:</strong> {job.address}</p>
         </div>
         <div className="mt-4">
            <button
               onClick={() => navigate('/worker/approved-jobs')}
               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
               Back
            </button>
         </div>
      </div>
   );
};

export default CustomerDetailsView;
