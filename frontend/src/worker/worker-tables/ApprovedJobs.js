// import React, { useState } from 'react';

// const ApprovedJobs = () => {
//   // Sample data for approved jobs with statuses
//   const [data, setData] = useState([
//     {
//       id: 1,
//       fullName: "Jane Doe",
//       email: "jane.doe@example.com",
//       phone: "987-654-3210",
//       approvedDate: "2024-08-10",
//       timePeriod: "2:00 PM - 4:00 PM",
//       problemDescription: "Broken air conditioner.",
//       images: ["image3.jpg", "image4.jpg"],
//       status: "Accepted",
//       customerDetails: "VIP Customer",
//     },
//     {
//       id: 2,
//       fullName: "Alice Johnson",
//       email: "alice.johnson@example.com",
//       phone: "555-666-7777",
//       approvedDate: "2024-08-12",
//       timePeriod: "9:00 AM - 11:00 AM",
//       problemDescription: "Clogged sink.",
//       images: ["image5.jpg", "image6.jpg"],
//       status: "Pending",
//       customerDetails: "Regular Customer",
//     },
//     {
//       id: 3,
//       fullName: "Bob Smith",
//       email: "bob.smith@example.com",
//       phone: "333-444-5555",
//       approvedDate: "2024-08-14",
//       timePeriod: "1:00 PM - 3:00 PM",
//       problemDescription: "Broken door lock.",
//       images: ["image7.jpg", "image8.jpg"],
//       status: "Rejected",
//       customerDetails: "New Customer",
//     },
//     // Add more data as needed
//   ]);

//   return (
//     <div className="p-4 sm:p-8 lg:p-16 bg-gray-100 w-full">
//       <h1 className="text-2xl font-bold mb-4">Approved Jobs</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border-4 border-black">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Email</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Approved Date</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Images</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Status</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Customer Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="text-center border-2 border-black">
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.fullName}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.email}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.phone}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.approvedDate}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.timePeriod}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.problemDescription}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">
//                   {item.images.map((img, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={img}
//                       alt={`Problem ${imgIndex}`}
//                       className="h-10 w-10 inline-block object-cover rounded-full mr-2"
//                     />
//                   ))}
//                 </td>
//                 <td className="py-2 px-4 border-2 border-gray-700">
//                   <span className={`px-2 py-1 rounded-md ${
//                     item.status === "Accepted" ? "bg-green-500 text-white" :
//                     item.status === "Pending" ? "bg-yellow-500 text-black" :
//                     "bg-red-500 text-white"
//                   }`}>
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.customerDetails}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApprovedJobs;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ApprovedJobs = () => {
//   // Sample data for approved jobs with statuses
//   const [data, setData] = useState([
//     {
//       id: 1,
//       fullName: "Jane Doe",
//       email: "jane.doe@example.com",
//       phone: "987-654-3210",
//       approvedDate: "2024-08-10",
//       timePeriod: "2:00 PM - 4:00 PM",
//       problemDescription: "Broken air conditioner.",
//       images: ["image3.jpg", "image4.jpg"],
//       status: "Accepted",
//       customerDetails: "VIP Customer",
//     },
//     {
//       id: 2,
//       fullName: "Alice Johnson",
//       email: "alice.johnson@example.com",
//       phone: "555-666-7777",
//       approvedDate: "2024-08-12",
//       timePeriod: "9:00 AM - 11:00 AM",
//       problemDescription: "Clogged sink.",
//       images: ["image5.jpg", "image6.jpg"],
//       status: "Pending",
//       customerDetails: "Regular Customer",
//     },
//     {
//       id: 3,
//       fullName: "Bob Smith",
//       email: "bob.smith@example.com",
//       phone: "333-444-5555",
//       approvedDate: "2024-08-14",
//       timePeriod: "1:00 PM - 3:00 PM",
//       problemDescription: "Broken door lock.",
//       images: ["image7.jpg", "image8.jpg"],
//       status: "Rejected",
//       customerDetails: "New Customer",
//     },
//     // Add more data as needed
//   ]);

//   const navigate = useNavigate();

//   const handleViewDetails = (customerId) => {
//     navigate(`/worker/customer-details-view/${customerId}`);
//   };

//   return (
//     <div className="p-4 sm:p-8 lg:p-16 bg-gray-100 w-full">
//       <h1 className="text-2xl font-bold mb-4">Approved Jobs</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border-4 border-black">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Email</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Approved Date</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Images</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Status</th>
//               <th className="py-2 px-4 border-4 border-gray-700">Customer Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="text-center border-2 border-black">
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.fullName}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.email}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.phone}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.approvedDate}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.timePeriod}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">{item.problemDescription}</td>
//                 <td className="py-2 px-4 border-2 border-gray-700">
//                   {item.images.map((img, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={img}
//                       alt={`Problem ${imgIndex}`}
//                       className="h-10 w-10 inline-block object-cover rounded-full mr-2"
//                     />
//                   ))}
//                 </td>
//                 <td className="py-2 px-4 border-2 border-gray-700">
//                   <span className={`px-2 py-1 rounded-full ${
//                     item.status === "Accepted" ? "bg-green-500 text-white" :
//                     item.status === "Pending" ? "bg-yellow-500 text-black" :
//                     "bg-red-500 text-white"
//                   }`}>
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="py-2 px-4 border-2 border-gray-700">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                     onClick={() => handleViewDetails(item.id)}
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApprovedJobs;







import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApprovedJobs = () => {
   const navigate = useNavigate();

   const jobs = [
      {
         id: 1,
         fullName: "Jane Doe",
         email: "jane.doe@example.com",
         phone: "123-456-7890",
         address: "456 Elm St, Othertown, USA",
         date: "2024-08-06",
         timePeriod: "2:00 PM - 4:00 PM",
         proposedFees: "$150",
         problemDescription: "Broken pipe in the bathroom.",
         images: ["image1.jpg", "image2.jpg"],
         status: "Accepted",
         customerDetails: "Some customer details",
      },
      // Add more job data as needed
   ];

   const handleViewDetails = (job) => {
      navigate('/worker/customer-details-view', { state: { job } });
   };

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">Approved Jobs</h2>
         <table className="min-w-full bg-white border-4 border-black">
            <thead>
               <tr>
                  <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Email</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Date</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Images</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Status</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
               </tr>
            </thead>
            <tbody>
               {jobs.map((job) => (
                  <tr key={job.id} className="text-center border-2 border-black">
                     <td className="py-2 px-4 border-2 border-gray-700">{job.fullName}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.email}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.phone}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.date}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.timePeriod}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.problemDescription}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">
                        {job.images.map((img, index) => (
                           <img
                              key={index}
                              src={img}
                              alt={`Problem ${index}`}
                              className="h-10 w-10 inline-block object-cover rounded-full mr-2"
                           />
                        ))}
                     </td>
                     <td className="py-2 px-4 border-2 border-gray-700">{job.status}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">
                        <button
                           onClick={() => handleViewDetails(job)}
                           className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                        >
                           View Details
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ApprovedJobs;
