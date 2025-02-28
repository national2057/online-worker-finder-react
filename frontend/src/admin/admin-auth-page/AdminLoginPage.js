import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setLoading, setUser } from "../../features/authSlice";
import { RiLoader4Line } from "react-icons/ri";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";

const AdminLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [isChecked, setIChecked] = useState([]);

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setIChecked(event.target.value, event.target.checked);
    console.log(event.target.value, event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    try {
      dispatch(setLoading(true));

      const response = await axios.post(
        `${USER_API_END_POINT}/user/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      //   Handle signup logic here
      if (response.data.success) {
        dispatch(setUser(response?.data?.user));
        toast.success("Login successful!", {
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/admin/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Invalid credentials. Please check your email or password or role.",
        {
          position: "top-right",
        }
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Admin's Login Page
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Login as Admin"
                name="role"
                value="admin"
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          {loading ? (
            <button className="flex items-center w-full my-4">
              <RiLoader4Line className="mr-2 h-4 w-4 animate-spin" />
              <p>Please wait</p>
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          )}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/admin/signup" className="text-indigo-500">
              Sign Up
            </a>
          </p>
        </form>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default AdminLogin;
