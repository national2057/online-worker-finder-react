// import React from 'react';
// import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

// const JobTable = () => {
//    const data = [
//       {
//          sn: 1,
//          fullName: "John Doe",
//          email: "john.doe@example.com",
//          phone: "123-456-7890",
//          address: "123 Main St, Anytown, USA",
//          date: "2024-08-06",
//          timePeriod: "10:00 AM - 12:00 PM",
//          proposedFees: "$100",
//          problemDescription: "Leaky faucet in the kitchen.",
//          images: ["image1.jpg", "image2.jpg"],
//       },
//       {
//          sn: 2,
//          fullName: "John Doe",
//          email: "john.doe@example.com",
//          phone: "123-456-7890",
//          address: "123 Main St, Anytown, USA",
//          date: "2024-08-06",
//          timePeriod: "10:00 AM - 12:00 PM",
//          proposedFees: "$100",
//          problemDescription: "Leaky faucet in the kitchen.",
//          images: ["image1.jpg", "image2.jpg"],
//       },
//       // Add more data as needed
//    ];

//    return (
//       <div className="overflow-x-auto">
//          <table className="min-w-full bg-white border-4 border-black">
//             <thead>
//                <tr>
//                   <th className="py-2 px-4 border-4 border-gray-700">S.N.</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Email</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Address</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Date</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Proposed Fees</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Images</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
//                </tr>
//             </thead>
//             <tbody>
//                {data.map((item, index) => (
//                   <tr key={index} className="text-center border-2 border-black">
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.sn}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.fullName}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.email}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.phone}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.address}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.date}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.timePeriod}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.proposedFees}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{item.problemDescription}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">
//                         {item.images.map((img, imgIndex) => (
//                            <img
//                               key={imgIndex}
//                               src={img}
//                               alt={`Problem ${imgIndex}`}
//                               className="h-10 w-10 inline-block object-cover rounded-full mr-2"
//                            />
//                         ))}
//                      </td>
//                      <td className="py-2 px-4 border-b border-gray-200 flex justify-center space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                            <FaEye />
//                         </button>
//                         <button className="text-green-500 hover:text-green-700">
//                            <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                            <FaTrash />
//                         </button>
//                      </td>
//                   </tr>
//                ))}
//             </tbody>
//          </table>
//       </div>
//    );
// };

// export default JobTable;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
// import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const WorkerJobTable = () => {
   const [data, setData] = useState([
      {
         id: 1,
         fullName: "John Doe",
         email: "john.doe@example.com",
         phone: "123-456-7890",
         address: "123 Main St, Anytown, USA",
         date: "2024-08-06",
         timePeriod: "10:00 AM - 12:00 PM",
         proposedFees: "$100",
         problemDescription: "Leaky faucet in the kitchen.",
         images: ["image1.jpg", "image2.jpg"],
      },
      {
         id: 2,
         fullName: "John Doe",
         email: "john.doe@example.com",
         phone: "123-456-7890",
         address: "123 Main St, Anytown, USA",
         date: "2024-08-06",
         timePeriod: "10:00 AM - 12:00 PM",
         proposedFees: "$100",
         problemDescription: "Leaky faucet in the kitchen.",
         images: ["image1.jpg", "image2.jpg"],
      },
      // Add more data as needed
   ]);

   const navigate = useNavigate();

   const handleView = (item) => {
      navigate('/worker/job-view', { state: { job: item } });
   };

   // const handleEdit = (id) => {
   //    // Navigate to an edit page or open a modal with form data
   //    navigate(`/worker/job-edit/${id}`);
   //    console.log(`Editing job with S.N. ${id}`);
   // };

   // const handleDelete = (id) => {
   //    const updatedData = data.filter((item) => item.id !== id);
   //    setData(updatedData);
   //    console.log(`Deleted job with S.N. ${id}`);
   // };

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full bg-white border-4 border-black">
            <thead>
               <tr>
                  <th className="py-2 px-4 border-4 border-gray-700">ID</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Email</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Address</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Date</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Proposed Fees</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Images</th>
                  <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item, index) => (
                  <tr key={index} className="text-center border-2 border-black">
                     <td className="py-2 px-4 border-2 border-gray-700">{item.id}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.fullName}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.email}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.phone}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.address}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.date}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.timePeriod}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.proposedFees}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">{item.problemDescription}</td>
                     <td className="py-2 px-4 border-2 border-gray-700">
                        {item.images.map((img, imgIndex) => (
                           <img
                              key={imgIndex}
                              src={img}
                              alt={`Problem ${imgIndex}`}
                              className="h-10 w-10 inline-block object-cover rounded-full mr-2"
                           />
                        ))}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-200 flex justify-center space-x-2">
                        <button
                           className="text-blue-500 hover:text-blue-700"
                           onClick={() => handleView(item)}
                        >
                           <FaEye />
                        </button>
                        {/* <button
                           className="text-green-500 hover:text-green-700"
                           onClick={() => handleEdit(item.id)}
                        >
                           <FaEdit />
                        </button>
                        <button
                           className="text-red-500 hover:text-red-700"
                           onClick={() => handleDelete(item.id)}
                        >
                           <FaTrash />
                        </button> */}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default WorkerJobTable;
