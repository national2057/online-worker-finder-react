import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaCaretDown, FaCaretUp, FaList } from 'react-icons/fa';
import { FaXmark, FaBars } from "react-icons/fa6";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Set initial state to true for w-64
    const [isUsersOpen, setIsUsersOpen] = useState(false); // State to toggle Users dropdown

    return (
        <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? 'w-64' : 'w-20'} duration-300 sticky top-0`}>
            <button 
                className="absolute top-7 right-1 text-white focus:outline-none flex items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaXmark /> : <FaBars />}
            </button>

            <div className="text-xl font-bold">{isOpen ? 'Admin Panel' : 'AP'}</div>
            
            <div className="flex flex-col space-y-4 mt-8">
                <NavLink to="/admin" className="flex items-center space-x-2">
                    <FaHome className="text-lg"/>
                    {isOpen && <span>Home</span>}
                </NavLink>

                <NavLink to="/admin/jobs" className="flex items-center space-x-2">
                    <FaBriefcase className="text-lg"/>
                    {isOpen && <span>Jobs</span>}
                </NavLink>

                <NavLink to="/admin/categories" className="flex items-center space-x-2">
                    <FaList className="text-lg"/>
                    {isOpen && <span>Categories</span>}
                </NavLink>

                <div className="flex flex-col space-y-2">
                    <button 
                        className="flex items-center space-x-2 focus:outline-none"
                        onClick={() => setIsUsersOpen(!isUsersOpen)}
                    >
                        <FaUser className="text-lg"/>
                        {isOpen && <span>Users</span>}
                        {isOpen && (isUsersOpen ? <FaCaretUp className="ml-auto"/> : <FaCaretDown className="ml-auto"/>)}
                    </button>
                    {isUsersOpen && (
                        <div className="flex flex-col pl-6 space-y-2">
                            <NavLink to="/admin/customers" className="flex items-center space-x-2">
                                {isOpen && <span>Customers</span>}
                            </NavLink>
                            <NavLink to="/admin/workers" className="flex items-center space-x-2">
                                {isOpen && <span>Workers</span>}
                            </NavLink>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    );
};

export default Sidebar;
