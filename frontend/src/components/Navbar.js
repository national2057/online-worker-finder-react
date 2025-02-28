import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { USER_API_END_POINT } from "../utils/constant";
import { setUser } from "../features/authSlice";
import axios from "axios";

const Navbar = () => {
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
    }

    console.log("User logged out");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="flex justify-between items-center py-7 bg-purple-600 text-stone-900 px-20 sticky top-0 z-10">
        <div>
          <h1 className="font-semibold text-3xl italic underline cursor-pointer hover:text-fuchsia-950 pl-[6em]">
            NAT-Services
          </h1>
        </div>

        <div className="flex justify-around items-center gap-8">
          <ul className="flex justify-around items-center ">
            <li>
              <NavLink
                to="/"
                className="hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/natservices/about"
                className="hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/natservices/contact"
                className="hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold pr-10"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/natservices/services"
                className="hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/natservices/job-response"
                className="hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold"
              >
                Job's Response
              </NavLink>
            </li>
          </ul>

          <div>
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex flex-col cursor-pointer">
                  <span className="md:inline font-medium underline text-base">
                    {user?.fullName}
                  </span>
                  <span className="md:inline font-medium text-xs">
                    - {user?.role}
                  </span>
                </div>
                <div>
                  <IconButton onClick={handleClick}>
                    <Avatar alt="Avatar" src={user?.profile?.profilePhoto} />
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
                        <Typography variant="body1">
                          {user?.fullName}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "12px" }}>
                          ({user?.role})
                        </Typography>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="flex gap-2"
                      onClick={() => navigate("/natservices/user/profile")}
                    >
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
            ) : (
              <div className="flex gap-1.5">
                <button
                  variant="outline"
                  className="bg-slate-200 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
