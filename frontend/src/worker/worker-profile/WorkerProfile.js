import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { GrLocation } from "react-icons/gr";
import { LuContact, LuMail, LuPen } from "react-icons/lu";
import { Rating, Typography, Box } from "@mui/material";
import UpdateWorkerProfile from "./UpdateWorkerProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

    const { user } = useSelector((store) => store.auth);
  

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto max-h-fit bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 pl-5">
            <Avatar
              alt="User Profile"
              src={user?.profile?.profilePhoto}
              variant="outline"
              sx={{ width: 150, height: 150 }}
            />
            <div className="ml-32">
              <h2 className="text-2xl font-bold">{user?.fullName}</h2>
              <h2 className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                excepturi molestiae cupiditate impedit.
              </h2>
            </div>
          </div>
          <button
            className="border border-gray-400 rounded-lg h-9 w-12 pl-[15px] hover:bg-gray-200"
            onClick={handleClick}
          >
            <LuPen size={20} />
          </button>
        </div>
        <div className="my-5 pl-5">
          <div className="flex items-center gap-3 my-2">
            <LuMail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <LuContact />
            <span>{user?.phone}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <GrLocation />
            <span>{user?.address}</span>
          </div>
        </div>
        <div className="mb-4 ml-4">
          <h1 className="font-semibold">Category:</h1>
          <span>- {user?.profile?.category}</span>
        </div>
        <div className="mb-4 ml-4">
          <h1 className="font-semibold">Experience:</h1>
          <span>- {user?.profile?.experience}</span>
        </div>
        <div className="mb-4 ml-4">
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Typography component="legend" className="font-semibold">
              Rate this Worker.
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </div>

      <UpdateWorkerProfile open={open} setOpen={setOpen} />
    </>
  );
};

export default Profile;
