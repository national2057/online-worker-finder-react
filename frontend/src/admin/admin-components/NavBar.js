// import React, { useState } from 'react';
// import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

// const NavBar = () => {
//    const [isProfileOpen, setIsProfileOpen] = useState(false);
//    const userName = "John Doe";
//    const profession = "Admin";

//    return (
//       <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//          {/* Search Bar */}
//          <div>
//             <h1 className='text-2xl font-bold pl-10'>Dashboard</h1>
//          </div>

//          {/* Right Section */}
//          <div className="flex items-center space-x-4">
//             <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
//                <FaSearch className="ml-3 text-gray-400" />
//                <input
//                   type="text"
//                   className="bg-gray-700 text-white p-2 outline-none"
//                   placeholder="Search..."
//                />
//             </div>

//             {/* Notification Icon */}
//             <button className="relative">
//                <FaBell className="text-xl" />
//                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
//             </button>

//             {/* Profile Section */}
//             <div className="relative flex items-center space-x-2">
//                <div className='flex flex-col'>
//                   <span className="md:inline text-white">{userName}</span>
//                   <span className="md:inline text-white text-xs">{profession}</span>
//                </div>
//                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none flex items-center">
//                   <FaUserCircle className="text-2xl" />
//                </button>
//                {isProfileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
//                      <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">My Profile</a>
//                      <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
//                   </div>
//                )}
//             </div>

//          </div>
//       </nav>
//    );
// };

// export default NavBar;

import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const userName = "John Doe";
  const profession = "Admin";

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/natservices/user/profile");
  };

  const handleLogout = () => {
    console.log("User logged out");
    handleClose();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div>
        <h1 className="text-2xl font-bold pl-10">Dashboard</h1>
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
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="md:inline text-white">{userName}</span>
            <span className="md:inline text-white text-xs">{profession}</span>
          </div>
          <div>
            <IconButton onClick={handleClick}>
              <Avatar alt="Avatar" src="assets/avatar.jpg" />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  width: 225, // Make the menu wider
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  bgcolor: "#adb5bd",
                  "&:hover": {
                    bgcolor: "#6c757d",
                  },
                }}
              >
                <Avatar alt="Avatar" src="assets/avatar.jpg" />
                <Typography variant="body1">National Shrestha</Typography>
              </MenuItem>
              <MenuItem className="flex gap-2" onClick={handleProfileClick}>
                <LuUser2 size={20} />
                <Typography className="underline" variant="body2">
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex gap-2" onClick={handleLogout}>
                <LuLogOut size={20} />
                <Typography className="underline" variant="body2">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
