import React, { useState } from "react";
import PostedJobsTable from "./PostedJobsTable";
import Avatar from "@mui/material/Avatar";
import { GrLocation } from "react-icons/gr";
import { LuContact, LuMail, LuPen } from "react-icons/lu";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <h1 className="font-bold text-3xl ml-32 my-8">User Profile:-</h1>
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
              {/* <h2 className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                excepturi molestiae cupiditate impedit.
              </h2> */}
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
            </div>
          </div>

          <button
            className="border border-gray-400 rounded-lg h-9 w-12 pl-[15px] hover:bg-gray-200"
            onClick={() => setOpen(true)}
          >
            <LuPen size={20} />
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 mt-10 ml-4">
            List of your Posted Jobs.
          </h2>
          <PostedJobsTable />
        </div>
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Profile;
