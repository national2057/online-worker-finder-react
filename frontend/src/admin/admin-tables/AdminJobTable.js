// import React, { useState } from "react";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const JobTable = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       fullName: "John Doe",
//       email: "john.doe@example.com",
//       phone: "123-456-7890",
//       address: "123 Main St, Anytown, USA",
//       date: "2024-08-06",
//       timePeriod: "10:00 AM - 12:00 PM",
//       proposedFees: "$100",
//       problemDescription: "Leaky faucet in the kitchen.",
//       images: ["image1.jpg", "image2.jpg"],
//     },
//     {
//       id: 2,
//       fullName: "John Doe",
//       email: "john.doe@example.com",
//       phone: "123-456-7890",
//       address: "123 Main St, Anytown, USA",
//       date: "2024-08-06",
//       timePeriod: "10:00 AM - 12:00 PM",
//       proposedFees: "$100",
//       problemDescription: "Leaky faucet in the kitchen.",
//       images: ["image1.jpg", "image2.jpg"],
//     },
//     // Add more data as needed
//   ]);

//   const navigate = useNavigate();

//   const handleView = (item) => {
//     navigate("/admin/job-view", { state: { job: item } });
//   };

//   const handleEdit = (id) => {
//     // Navigate to an edit page or open a modal with form data
//     navigate(`/admin/job-edit/${id}`);
//     console.log(`Editing job with S.N. ${id}`);
//   };

//   const handleDelete = (id) => {
//     const updatedData = data.filter((item) => item.id !== id);
//     setData(updatedData);
//     console.log(`Deleted job with S.N. ${id}`);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border-4 border-black">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-4 border-gray-700">ID</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Email</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Address</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Date</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
//             <th className="py-2 px-4 border-4 border-gray-700">
//               Proposed Fees
//             </th>
//             <th className="py-2 px-4 border-4 border-gray-700">
//               Problem Description
//             </th>
//             <th className="py-2 px-4 border-4 border-gray-700">Images</th>
//             <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="text-center border-2 border-black">
//               <td className="py-2 px-4 border-2 border-gray-700">{item.id}</td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.fullName}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.email}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.phone}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.address}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.date}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.timePeriod}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.proposedFees}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.problemDescription}
//               </td>
//               <td className="py-2 px-4 border-2 border-gray-700">
//                 {item.images.map((img, imgIndex) => (
//                   <img
//                     key={imgIndex}
//                     src={img}
//                     alt={`Problem ${imgIndex}`}
//                     className="h-10 w-10 inline-block object-cover rounded-full mr-2"
//                   />
//                 ))}
//               </td>
//               <td className="py-2 px-4 border-b border-gray-200 flex justify-center space-x-2">
//                 <button
//                   className="text-blue-500 hover:text-blue-700"
//                   onClick={() => handleView(item)}
//                 >
//                   <FaEye />
//                 </button>
//                 <button
//                   className="text-green-500 hover:text-green-700"
//                   onClick={() => handleEdit(item.id)}
//                 >
//                   <FaEdit />
//                 </button>
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default JobTable;





import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllJobs from "../../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobTable = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();

  const handleView = (id) => {
    if (id) {
      navigate(`/admin/job-view/${id}`);
    } else {
      console.error("Job ID is missing");
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-6 underline">
        All The Posted Jobs.
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-gray-600">
              <TableCell>S.N.</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Proposed Fees</TableCell>
              <TableCell align="center">Images</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allJobs.length <= 0 ? (
              <span>No Any Poseted Jobs.</span>
            ) : (
              <>
                {allJobs?.map((job, index) => (
                  <TableRow
                    key={job._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">
                      {job?.createdBy?.fullName}
                    </TableCell>
                    <TableCell align="center">
                      {job?.createdBy?.email}
                    </TableCell>
                    <TableCell align="center">
                      {job?.createdBy?.phone}
                    </TableCell>
                    <TableCell align="center">
                      {job?.createdBy?.address}
                    </TableCell>
                    <TableCell align="center">
                      {job?.date.split("T")[0]}
                    </TableCell>
                    <TableCell align="center">{job?.description}</TableCell>
                    <TableCell align="center">{job?.proposedFees}</TableCell>
                    <TableCell align="center">{job?.images}</TableCell>
                    <TableCell align="center">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleView(job._id)}
                      >
                        <FaEye />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default JobTable;
