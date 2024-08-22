import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const WorkerNavbar = () => {
   const [isProfileOpen, setIsProfileOpen] = useState(false);
   const userName = "John Doe";
   const profession = "Worker";

   return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
         {/* Search Bar */}
         <div>
            <h1 className='text-2xl font-bold pl-10'>Dashboard</h1>
         </div>

         {/* Right Section */}
         <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
               <FaSearch className="ml-3 text-gray-400" />
               <input
                  type="text"
                  className="bg-gray-700 text-white p-2 outline-none"
                  placeholder="Search..."
               />
            </div>

            {/* Notification Icon */}
            <button className="relative">
               <FaBell className="text-xl" />
               <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* Profile Section */}
            <div className="relative flex items-center space-x-2">
               <div className='flex flex-col'>
                  <span className="md:inline text-white">{userName}</span>
                  <span className="md:inline text-white text-xs">{profession}</span>
               </div>
               <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none flex items-center">
                  <FaUserCircle className="text-2xl" />
               </button>
               {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                     <NavLink to="/worker/profile" className="block px-4 py-2 hover:bg-gray-200">My Profile</NavLink>
                     <NavLink to="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</NavLink>
                  </div>
               )}
            </div>

         </div>
      </nav>
   );
};

export default WorkerNavbar;
