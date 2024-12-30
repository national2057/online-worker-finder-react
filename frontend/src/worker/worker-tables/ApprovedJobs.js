// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ApprovedJobs = () => {
//    const navigate = useNavigate();

//    const jobs = [
//       {
//          id: 1,
//          fullName: "Jane Doe",
//          email: "jane.doe@example.com",
//          phone: "123-456-7890",
//          address: "456 Elm St, Othertown, USA",
//          date: "2024-08-06",
//          timePeriod: "2:00 PM - 4:00 PM",
//          proposedFees: "$150",
//          problemDescription: "Broken pipe in the bathroom.",
//          images: ["image1.jpg", "image2.jpg"],
//          status: "Accepted",
//          customerDetails: "Some customer details",
//       },
//       // Add more job data as needed
//    ];

//    const handleViewDetails = (job) => {
//       navigate('/worker/customer-details', { state: { job } });
//    };

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Approved Jobs</h2>
//          <table className="min-w-full bg-white border-4 border-black">
//             <thead>
//                <tr>
//                   <th className="py-2 px-4 border-4 border-gray-700">Full Name</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Email</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Phone</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Date</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Time Period</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Problem Description</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Images</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Status</th>
//                   <th className="py-2 px-4 border-4 border-gray-700">Actions</th>
//                </tr>
//             </thead>
//             <tbody>
//                {jobs.map((job) => (
//                   <tr key={job.id} className="text-center border-2 border-black">
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.fullName}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.email}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.phone}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.date}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.timePeriod}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.problemDescription}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">
//                         {job.images.map((img, index) => (
//                            <img
//                               key={index}
//                               src={img}
//                               alt={`Problem ${index}`}
//                               className="h-10 w-10 inline-block object-cover rounded-full mr-2"
//                            />
//                         ))}
//                      </td>
//                      <td className="py-2 px-4 border-2 border-gray-700">{job.status}</td>
//                      <td className="py-2 px-4 border-2 border-gray-700">
//                         <button
//                            onClick={() => handleViewDetails(job)}
//                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
//                         >
//                            View Details
//                         </button>
//                      </td>
//                   </tr>
//                ))}
//             </tbody>
//          </table>
//       </div>
//    );
// };

// export default ApprovedJobs;

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
import { useNavigate } from "react-router-dom";

const WorkerJobTable = () => {
  useGetAllJobs();

  const { allJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();

  const handleViewDetails = (job) => {
    navigate("/worker/customer-details", { state: { job } });
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-6 underline">
        Approved Jobs:
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
              <TableCell align="center">Status</TableCell>
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
                      {job?.applications?.status}
                    </TableCell>
                    <TableCell align="center">
                      <button
                        onClick={() => handleViewDetails(job)}
                        className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700"
                      >
                        View Details
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

export default WorkerJobTable;
