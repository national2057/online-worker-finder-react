import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobResponse = () => {
  useGetAllJobs();

  const { allJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();

  const handleViewDetails = (job) => {
    navigate("/natservices/worker-details", { state: { job } });
  };

  return (
    <>
      <div className="px-20 py-10">
        <h1 className="font-bold text-3xl mb-10 underline">
          Jobs Responded by Workers:
        </h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="bg-gray-600">
                <TableCell>S.N.</TableCell>
                <TableCell align="center">Full Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Proposed Fees</TableCell>
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
                        {job?.date.split("T")[0]}
                      </TableCell>
                      <TableCell align="center">{job?.description}</TableCell>
                      <TableCell align="center">{job?.proposedFees}</TableCell>
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
      </div>
    </>
  );
};

export default JobResponse;
