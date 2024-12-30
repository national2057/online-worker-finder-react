import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiCloseLine, RiLoader4Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/authSlice";
import { USER_API_END_POINT } from "../utils/constant";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  //   const [profilePic, setProfilePic] = useState(null);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    file: user?.profile?.file || "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("address", input.address);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/user/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Update successful!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Update failed. Please try again.",
        {
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          className="flex justify-between"
        >
          <Typography>Update Profile</Typography>
          <RiCloseLine size={28} onClick={() => setOpen(false)} />
        </DialogTitle>

        <DialogContent dividers>
          <form action="" onSubmit={handleSubmit} className="grid grid-4 py-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="fullName" className="text-right font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
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
                <label
                  htmlFor="profilePhoto"
                  className="text-right font-medium"
                >
                  Profile Picture:
                </label>
                <input
                  accept="image/*"
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  onChange={handleFileChange}
                  className="col-span-3 ml-3 py-1 px-2 border border-gray-400 rounded"
                />
              </div>
            </div>
          </form>
        </DialogContent>

        <DialogActions className="justify-center mb-4">
          <Button onClick={() => setOpen(false)}>Back</Button>
          {loading ? (
            <Button className="flex items-center w-full my-4">
              <RiLoader4Line className="mr-2 h-4 w-4 animate-spin" />
              <p>Please wait</p>
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Save Changes
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfileDialog;
