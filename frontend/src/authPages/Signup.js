import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast
import { USER_API_END_POINT } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiLoader4Line } from "react-icons/ri";
import { setLoading } from "../features/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "customer", // default to customer
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("address", input.address);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    if (!input.phone.match(/^\d{10}$/)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${USER_API_END_POINT}/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      // If response is successful
      if (response.data.success) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/login"); // Redirect to the dashboard route
        }, 1000); // Delay to allow the toast to show
      } else {
        toast.error("Signup failed");
      }
    } catch (err) {
      // Handle errors from the backend
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your full name"
              value={input.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number:
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your phone number"
              value={input.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address:
            </label>
            <input
              id="address"
              type="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your Address"
              value={input.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={input.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Confirm your password"
              value={input.confirmPassword}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700">
              Signup as:
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={input.role}
              onChange={handleChange}
              required
            >
              <option value="customer">Customer</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="profilePhoto" className="block text-gray-700">
              Profile Photo:
            </label>
            <input
              accept="image/*"
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          {loading ? (
            <button className="flex items-center w-full my-4">
              <RiLoader4Line className="mr-2 h-4 w-4 animate-spin" />
              <p>Please wait...</p>
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Signup
            </button>
          )}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
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

export default Signup;
