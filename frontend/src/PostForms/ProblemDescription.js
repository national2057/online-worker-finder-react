import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast
import { JOB_API_END_POINT } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiLoader4Line } from "react-icons/ri";
import { setLoading } from "../features/authSlice";

const ProblemDescription = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    startTime: "",
    endTime: "",
    proposedFees: "",
    description: "",
    file: [],
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
    formData.append("date", input.date);
    formData.append("startTime", input.startTime);
    formData.append("endTime", input.endTime);
    formData.append("proposedFees", input.proposedFees);
    formData.append("description", input.description);
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
        `${JOB_API_END_POINT}/job/create`,
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
        toast.success("Form submitted successful!");
        setTimeout(() => {
          navigate("/"); // Redirect to the dashboard route
        }, 1000); // Delay to allow the toast to show
        console.log("Form submitted successfully!")
      } else {
        toast.error("Form submitttion failed");
      }
    } catch (err) {
      // Handle errors from the backend
      toast.error(err.response?.data?.message || "Something went wrong");
      console.log(err.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-4 bg-white rounded-md shadow-md border border-gray-300 mb-3"
      >
        <h2 className="text-4xl font-bold mb-6 text-center underline">
          Book your Service.
        </h2>
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
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:{" "}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={input.date}
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Start Time:
          </label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            placeholder="Enter the start time."
            value={input.startTime}
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endTime"
            className="block text-gray-700 font-bold mb-2"
          >
            End Time:
          </label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            placeholder="Enter the end time."
            value={input.endTime}
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="proposedFees" className="block text-gray-700">
            Proposed Fees:
          </label>
          <input
            id="proposedFees"
            type="number"
            name="proposedFees"
            placeholder="What's in your budget?"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={input.proposedFees}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Describe your Problems in details."
            value={input.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="profilePhoto" className="block text-gray-700">
            Images:
          </label>
          <input
            accept="image/*"
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex justify-center">
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
              Submit
            </button>
          )}
        </div>
      </form>
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

export default ProblemDescription;
