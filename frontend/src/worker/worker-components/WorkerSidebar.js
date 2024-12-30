import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaBriefcase, FaHome, FaList, FaTasks } from 'react-icons/fa';

const WorkerSidebar = () => {
   const [isOpen, setIsOpen] = useState(true);
   // const [isUsersOpen, setIsUsersOpen] = useState(false); // State to toggle Users dropdown

   return (
      <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? 'w-64' : 'w-20'} duration-300 sticky top-0`}>
         <button
            className="absolute top-7 right-1 text-white focus:outline-none flex items-center"
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

            <NavLink to="/worker/all-jobs" className="flex items-center space-x-2">
               <FaList className="text-lg" />
               {isOpen && <span>All Jobs</span>}
            </NavLink>

            <NavLink to="/worker/pending-requests" className="flex items-center space-x-2">
               <FaBriefcase className="text-lg" />
               {isOpen && <span>My Pending Request</span>}
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
