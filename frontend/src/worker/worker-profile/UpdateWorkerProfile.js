import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { RiLoader4Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const UpdateWorkerProfile = ({ open, setOpen }) => {
  const { user } = useSelector((store) => store.auth);
  const { loading } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phone: user?.phone,
    bio: user?.profile?.bio,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullName", input.fullName);
      formData.append("email", input.email);
      formData.append("phone", input.phone);
      formData.append("address", input.address);
      formData.append("bio", input.bio);
      formData.append("category", input.category);
      formData.append("experience", input.experience);
      formData.append("profile", input.profile);

      // try {
      //    const res = await 
      // } catch (error) {
      //    console.log(error);
      // }

      console.log(input);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update Profile
        </DialogTitle>

        <DialogContent dividers>
          <form action="" onSubmit={handleSubmit} className="grid grid-4 py-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={input.fullName}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right font-medium">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="phone" className="text-right font-medium">
                  Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={input.phone}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="address" className="text-right font-medium">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={input.address}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="bio" className="text-right font-medium">
                  Bio:
                </label>
                <input
                  type="text"
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="category" className="text-right font-medium">
                  Category:
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={input.category}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="experience" className="text-right font-medium">
                  Experience:
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={input.experieince}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="profile" className="text-right font-medium">
                  Profile:
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  value={input.profile}
                  onChange={changeEventHandler}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>

            </div>
          </form>
        </DialogContent>

        <DialogActions className="justify-center mb-4">
          {loading ? (
            <Button className="flex items-center w-full my-4">
              <RiLoader4Line className="mr-2 h-4 w-4 animate-spin" />
              <p>Please wait</p>
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Save Changes
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateWorkerProfile;
