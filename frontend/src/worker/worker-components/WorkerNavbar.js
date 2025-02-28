import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const WorkerNavbar = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/worker/profile");
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
          <div className="flex flex-col cursor-pointer">
            <span className="md:inline text-white text-base underline">
              {user?.fullName}
            </span>
            <span className="md:inline text-white text-xs">- ({user?.role})</span>
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
                <Avatar alt="Avatar" src={user?.profile?.profilePhoto} />
                <div className="flex flex-col">
                  <Typography variant="body1">{user?.fullName}</Typography>
                  <Typography variant="body1" sx={{ fontSize: "12px" }}>
                    ({user?.role})
                  </Typography>
                </div>
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

export default WorkerNavbar;
