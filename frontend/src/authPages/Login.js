// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom"; // for redirecting
// import { USER_API_END_POINT } from "../utils/constant";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "../features/auth/authSlice";
// import { RiLoader4Line } from "react-icons/ri";

// const Login = () => {
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     role: "customer",   // default to customer
//   });

//   const { loading } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize the navigate function for redirection

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const response = await axios.post(
//         `${USER_API_END_POINT}/user/login`,
//         input,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//          dispatch(setUser(response.data.user))
//         toast.success("Login successful!", {
//           position: "top-right",
//         });
//         setTimeout(() => {
//           navigate("/"); // Redirect to the dashboard route
//         }, 1000); // Delay to allow the toast to show
//       } else {
//         toast.error(
//           response.data.message || "Login failed. Please try again.",
//           {
//             position: "top-right",
//           }
//         );
//       }
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message ||
//           "Invalid credentials. Please check your email or password or role.",
//         {
//           position: "top-right",
//         }
//       );
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your email"
//               value={input.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your password"
//               value={input.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Login As</label>
//             <select
//               name="role"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               value={input.role}
//               onChange={handleChange}
//             >
//               <option value="customer">Customer</option>
//               <option value="worker">Worker</option>
//             </select>
//           </div>
//           {loading ? (
//             <button className="flex items-center w-full my-4">
//               <RiLoader4Line className="mr-2 h-4 w-4 animate-spin" />
//               <p>Please wait</p>
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
//             >
//               Login
//             </button>
//           )}
//           <p className="text-center text-gray-500 mt-4">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-500">
//               Sign up
//             </a>
//           </p>
//         </form>
//       </div>
//       {/* Add the ToastContainer to your component */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // for redirecting
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../features/authSlice";
import { RiLoader4Line } from "react-icons/ri";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "customer", // default to customer
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      if (response.data.success) {
        dispatch(setUser(response.data.user));
        toast.success("Login successful!", {
          position: "top-right",
        });

        setTimeout(() => {
          //  navigate("/"); // Redirect to the dashboard route
          if (user?.role === "customer") {
            navigate("/"); // Redirect customer to dashboard
          } else if (user?.role === "worker") {
            navigate("/worker"); // Redirect worker to dashboard
          }
        }, 1000); // Delay to allow the toast to show
      } else {
        toast.error(
          response.data.message || "Login failed. Please try again.",
          {
            position: "top-right",
          }
        );
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={input.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Login As</label>
            <select
              name="role"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={input.role}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="worker">Worker</option>
            </select>
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
              Login
            </button>
          )}
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign up
            </a>
          </p>
        </form>
      </div>
      {/* Add the ToastContainer to your component */}
      <ToastContainer />
    </div>
  );
};

export default Login;
