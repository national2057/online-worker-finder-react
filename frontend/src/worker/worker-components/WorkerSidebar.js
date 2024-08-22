// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaXmark, FaBars } from "react-icons/fa6";
// import { FaHome, FaTasks, FaUser } from 'react-icons/fa';


// const WorkerSidebar = () => {
//    const [isOpen, setIsOpen] = useState(true);
//    // const [isUsersOpen, setIsUsersOpen] = useState(false); // State to toggle Users dropdown


//    return (
//       <div className="flex py-3">
//          {/* Sidebar */}
//          <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? 'w-64' : 'w-20'} duration-300 relative sticky top-0`}>
//             <div className="text-xl font-bold">{isOpen ? 'Worker Panel' : 'WP'}</div>
//             <button
//                className="absolute top-7 right-2 text-white focus:outline-none"
//                onClick={() => setIsOpen(!isOpen)}
//             >
//                {isOpen ? <FaXmark /> : <FaBars />}
//             </button>
//             <div className="flex flex-col space-y-4 mt-8">
//                <NavLink to="/worker" className="flex items-center space-x-2">
//                   <FaHome className="text-lg" />
//                   {isOpen && <span>Dashboard</span>}
//                </NavLink>

//                <NavLink to="/worker/jobs" className="flex items-center space-x-2">
//                   <FaTasks className="text-lg" />
//                   {isOpen && <span>Jobs</span>}
//                </NavLink>

//                <NavLink to="/worker/create-profile" className="flex items-center space-x-2">
//                   <FaUser className="text-lg" />
//                   {isOpen && <span>Create Your Profile</span>}
//                </NavLink>


//                {/* <div className="flex flex-col space-y-2">
//                   <button
//                      className="flex items-center space-x-2 focus:outline-none"
//                      onClick={() => setIsUsersOpen(!isUsersOpen)}
//                   >
//                      <FaUser className="text-lg" />
//                      {isOpen && <span>Users</span>}
//                      {isOpen && (isUsersOpen ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />)}
//                   </button>
//                   {isUsersOpen && (
//                      <div className="flex flex-col pl-6 space-y-2">
//                         <NavLink to="/worker/customers" className="flex items-center space-x-2">
//                            {isOpen && <span>Customers</span>}
//                         </NavLink>
//                         <NavLink to="/worker/workers" className="flex items-center space-x-2">
//                            {isOpen && <span>Workers</span>}
//                         </NavLink>
//                      </div>
//                   )}
//                </div> */}

//             </div>
//          </div>
//       </div>
//    );
// };

// export default WorkerSidebar;







import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaBriefcase, FaHome, FaTasks } from 'react-icons/fa';


const WorkerSidebar = () => {
   const [isOpen, setIsOpen] = useState(true);
   // const [isUsersOpen, setIsUsersOpen] = useState(false); // State to toggle Users dropdown


   return (
      <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? 'w-64' : 'w-16'} duration-300 sticky top-0`}>
         <button
            className="absolute top-7 right-0 text-white focus:outline-none flex items-center"
            onClick={() => setIsOpen(!isOpen)}
         >
            {isOpen ? <FaXmark /> : <FaBars />}
         </button>

         <div className="text-xl font-bold">{isOpen ? 'Worker Panel' : 'WP'}</div>

         <div className="flex flex-col space-y-4 mt-8">
            <NavLink to="/worker" className="flex items-center space-x-2">
               <FaHome className="text-lg" />
               {isOpen && <span>Home</span>}
            </NavLink>

            <NavLink to="/worker/jobs" className="flex items-center space-x-2">
               <FaBriefcase className="text-lg" />
               {isOpen && <span>Jobs</span>}
            </NavLink>

            <NavLink to="/worker/approved-jobs" className="flex items-center space-x-2">
               <FaTasks className="text-lg" />
               {isOpen && <span>Approved Jobs</span>}
            </NavLink>

         </div>
      </div>
   );
};

export default WorkerSidebar;
