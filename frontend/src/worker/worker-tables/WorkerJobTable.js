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

const WorkerJobTable = () => {
  useGetAllJobs();

  const { allJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();

  const handleView = (id) => {
    if (id) {
      navigate(`/worker/job-view/${id}`);
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

export default WorkerJobTable;
