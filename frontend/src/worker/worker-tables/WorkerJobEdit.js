// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const JobEdit = ({jobs, setJobs}) => {
//    const { id } = useParams();
//    const navigate = useNavigate();
//    const [jobData, setJobData] = useState({
//       fullName: '',
//       email: '',
//       phone: '',
//       address: '',
//       date: '',
//       timePeriod: '',
//       proposedFees: '',
//       problemDescription: '',
//       images: [],
//    });

//    useEffect(() => {
//       const jobToEdit = jobs.find(job => job.id === parseInt(id));
//       if (jobToEdit) {
//           setJobData(jobToEdit);
//       }
//   }, [id, jobs]);

//    const handleChange = (e) => {
//       setJobData({
//          ...jobData,
//          [e.target.name]: e.target.value,
//      });
//  };


//    const handleSave = () => {
//       console.log('Updated job data:', jobData);
//       // Save the updated job data (replace this with actual API call)
//       navigate('/admin/jobs');
//    };

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Edit Job</h2>
//          <form className="space-y-4">
//             <input
//                type="text"
//                name="fullName"
//                value={jobData.fullName}
//                onChange={handleChange}
//                placeholder="Full Name"
//                className="border p-2 w-full"
//             />
//             <input
//                type="email"
//                name="email"
//                value={jobData.email}
//                onChange={handleChange}
//                placeholder="Email"
//                className="border p-2 w-full"
//             />
//             <input
//                type="text"
//                name="phone"
//                value={jobData.phone}
//                onChange={handleChange}
//                placeholder="Phone"
//                className="border p-2 w-full"
//             />
//             <input
//                type="text"
//                name="address"
//                value={jobData.address}
//                onChange={handleChange}
//                placeholder="Address"
//                className="border p-2 w-full"
//             />
//             <input
//                type="date"
//                name="date"
//                value={jobData.date}
//                onChange={handleChange}
//                className="border p-2 w-full"
//             />
//             <input
//                type="text"
//                name="timePeriod"
//                value={jobData.timePeriod}
//                onChange={handleChange}
//                placeholder="Time Period"
//                className="border p-2 w-full"
//             />
//             <input
//                type="text"
//                name="proposedFees"
//                value={jobData.proposedFees}
//                onChange={handleChange}
//                placeholder="Proposed Fees"
//                className="border p-2 w-full"
//             />
//             <textarea
//                name="problemDescription"
//                value={jobData.problemDescription}
//                onChange={handleChange}
//                placeholder="Problem Description"
//                className="border p-2 w-full"
//             />
//             {/* You can add image editing functionality here if necessary */}
//          </form>
//          <div className="mt-4">
//             <button
//                onClick={handleSave}
//                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//                Save
//             </button>
//             <button
//                onClick={() => navigate('/admin/jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700"
//             >
//                Cancel
//             </button>
//          </div>
//       </div>
//    );
// };

// export default JobEdit;







// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const JobEdit = ({ jobs, setJobs }) => {
//    const { id } = useParams();
//    const navigate = useNavigate();
//    const [jobData, setJobData] = useState({
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       date: "",
//       timePeriod: "",
//       proposedFees: "",
//       problemDescription: "",
//       images: [],
//    });

//    useEffect(() => {
//       if (jobs && jobs.length > 0) {
//          const jobToEdit = jobs.find(job => job.id === parseInt(id));
//          if (jobToEdit) {
//             setJobData(jobToEdit);
//          }
//       }
//    }, [id, jobs]);

//    const handleChange = (e) => {
//       setJobData({
//          ...jobData,
//          [e.target.name]: e.target.value,
//       });
//    };

//    const handleSave = () => {
//       const updatedJobs = jobs.map(job =>
//          job.id === parseInt(id) ? { ...job, ...jobData } : job
//       );
//       setJobs(updatedJobs);
//       navigate('/admin/jobs'); // Redirect back to the admin page or job list
//    };

//    return (
//       <div>
//          <h1 className='text-2xl font-bold py-3'>Edit Job</h1>
//          <form>
//             <div>
//                <label>Full Name:</label>
//                <input type="text" name="fullName" value={jobData.fullName} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Email:</label>
//                <input type="email" name="email" value={jobData.email} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Phone:</label>
//                <input type="text" name="phone" value={jobData.phone} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Address:</label>
//                <input type="text" name="address" value={jobData.address} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Date:</label>
//                <input type="date" name="date" value={jobData.date} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Time Period:</label>
//                <input type="text" name="timePeriod" value={jobData.timePeriod} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Proposed Fees:</label>
//                <input type="text" name="proposedFees" value={jobData.proposedFees} onChange={handleChange} />
//             </div>
//             <div>
//                <label>Problem Description:</label>
//                <textarea name="problemDescription" value={jobData.problemDescription} onChange={handleChange}></textarea>
//             </div>
//             {/* Add fields for images if needed */}

//             {/* <button type="button" onClick={handleSave}>Save</button> */}

//             <div className="mt-4">
//                <button
//                   onClick={handleSave}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                >
//                   Save
//                </button>
//                <button
//                   onClick={() => navigate('/admin/jobs')}
//                   className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700"
//                >
//                   Cancel
//                </button>
//             </div>

//          </form>
//       </div>
//    );
// };

// export default JobEdit;







import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkerJobEdit = ({ jobs, setJobs }) => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [jobData, setJobData] = useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      date: '',
      timePeriod: '',
      proposedFees: '',
      problemDescription: '',
      images: [],
   });

   useEffect(() => {
      // Fetch the job data based on ID (replace this with actual API call)
      const fetchedData = {
         id: id,
         fullName: "John Doe",
         email: "john.doe@example.com",
         phone: "123-456-7890",
         address: "123 Main St, Anytown, USA",
         date: "2024-08-06",
         timePeriod: "10:00 AM - 12:00 PM",
         proposedFees: "$100",
         problemDescription: "Leaky faucet in the kitchen.",
         images: ["image1.jpg", "image2.jpg"],
      };
      setJobData(fetchedData);
   }, [id]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setJobData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   // const handleSave = () => {
   //    console.log('Updated job data:', jobData);
   //    // Save the updated job data (replace this with actual API call)
   //    navigate('/admin/jobs');
   // };

   const handleSave = () => {
      const updatedJobs = jobs.map(job =>
         job.id === parseInt(id) ? { ...job, ...jobData } : job
      );
      setJobs(updatedJobs);
      navigate('/worker/jobs'); // Redirect back to the admin page or job list
      console.log('Updated job data:', jobData);
   };

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">Edit Job</h2>
         <form className="space-y-4">
            <input
               type="text"
               name="fullName"
               value={jobData.fullName}
               onChange={handleChange}
               placeholder="Full Name"
               className="border p-2 w-full"
            />
            <input
               type="email"
               name="email"
               value={jobData.email}
               onChange={handleChange}
               placeholder="Email"
               className="border p-2 w-full"
            />
            <input
               type="text"
               name="phone"
               value={jobData.phone}
               onChange={handleChange}
               placeholder="Phone"
               className="border p-2 w-full"
            />
            <input
               type="text"
               name="address"
               value={jobData.address}
               onChange={handleChange}
               placeholder="Address"
               className="border p-2 w-full"
            />
            <input
               type="date"
               name="date"
               value={jobData.date}
               onChange={handleChange}
               className="border p-2 w-full"
            />
            <input
               type="text"
               name="timePeriod"
               value={jobData.timePeriod}
               onChange={handleChange}
               placeholder="Time Period"
               className="border p-2 w-full"
            />
            <input
               type="text"
               name="proposedFees"
               value={jobData.proposedFees}
               onChange={handleChange}
               placeholder="Proposed Fees"
               className="border p-2 w-full"
            />
            <textarea
               name="problemDescription"
               value={jobData.problemDescription}
               onChange={handleChange}
               placeholder="Problem Description"
               className="border p-2 w-full"
            />
            {/* You can add image editing functionality here if necessary */}
         </form>
         <div className="mt-4">
            <button
               onClick={handleSave}
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
               Save
            </button>
            <button
               onClick={() => navigate('/worker/jobs')}
               className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700"
            >
               Cancel
            </button>
         </div>
      </div>
   );
};

export default WorkerJobEdit;
