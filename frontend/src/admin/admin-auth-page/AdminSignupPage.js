// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const AdminSignup = () => {
//    const [isChecked, setIsChecked] = useState(false);

//    const handleAdminSignup = (event) => {
//      setIsChecked(event.target.checked);
//    };

//    const handleSubmit = (event) => {
//      event.preventDefault();
//      if (!isChecked) {
//        alert("Please agree to the terms and conditions.");
//        return;
//      }
//    //   Handle signup logic here
//      toast("Signup successful!");
//    };

//   return (
//     <div className="min-h-full flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center mb-4">Admin's Signup Page</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="fullName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name:
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your Full name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="mb-4 font-semibold flex items-start">
//             <input
//               type="checkbox"
//               name="terms"
//               className="mt-1"
//               checked={isChecked}
//               onChange={handleAdminSignup}
//             />
//             <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
//               Sign-up As Admin
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/admin/login" className="text-indigo-500">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };
//
// export default AdminSignup;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setLoading, setUser } from "../../features/authSlice";
import { RiLoader4Line } from "react-icons/ri";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";

const AdminSignup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const [isChecked, setIChecked] = useState([]);

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setIChecked(e.target.value, e.target.checked);
    console.log(e.target.value, e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("password", input.password);
    formData.append("role", input.role);

    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${USER_API_END_POINT}/admin/register`,
        input,
        {
          headers: {
            "Content-Type": " /json",
          },
          withCredentials: true,
        }
      );

      //   Handle signup logic here
      if (response.data.success) {
        dispatch(setUser(response.data.user));
        toast.success("SignUp successful!", {
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/"); // Redirect to the dashboard route
        }, 1000); // Delay to allow the toast to show
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message ||
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
          Admin's Signup Page
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              value={input.fullName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your Full name."
              onChange={handleChange}
            />
          </div>
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
              placeholder="Enter your email."
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone:
            </label>
            <input
              type="phone"
              name="phone"
              value={input.phone}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your phone number."
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
              placeholder="Enter your password."
              onChange={handleChange}
            />
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="SignUp as Admin"
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
            Already have an account?{" "}
            <a href="/admin/login" className="text-indigo-500">
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

export default AdminSignup;
