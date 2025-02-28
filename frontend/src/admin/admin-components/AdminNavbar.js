import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../features/authSlice";

const NavBar = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
   try {
     const res = await axios.post(`${USER_API_END_POINT}/user/logout`, {
       withCreentials: true,
     });
     if (res.data.success) {
       setAnchorEl(null); // Close the menu first
       dispatch(setUser(null));
       navigate("/");
       toast.success(res.data.message);
     }
   } catch (error) {
     console.log(error);
     toast.error(error.response.data.message);
   };
   console.log("User logged out");
 };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div>
        <h1 className="text-2xl font-bold pl-10">Admin's Dashboard</h1>
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
            <MenuItem className="flex gap-2" onClick={handleLogout}>
              <LuLogOut size={20} />
              <Typography className="underline" variant="body2">
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
