// import React, { useEffect } from "react";
import { FaRegBookmark, FaRegCalendarAlt } from "react-icons/fa";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import { Barchart } from "../admin-components/Charts/Barchart";
import Areachart from "../admin-components/Charts/Areachart";
import Pichart from "../admin-components/Charts/Pichart";
import { LineCharts } from "../admin-components/Charts/LineCharts";
// import { useNavigate } from "react-router-dom";
// import AdminLogin from "../admin-auth-page/AdminLoginPage";
// import { useSelector } from "react-redux";

const AdminDashboard = () => {
//   const navigate = useNavigate();
// //   const { admin } = useSelector((store) => store.admins); // Get user from Redux state
//   const { user } = useSelector((store) => store.admins); // Get user from Redux state

//   useEffect(() => {
//     // Redirect to login page if no user is found in Redux state
//     if (!admin) {
//       navigate("/admin/login");
//     }
//   }, [admin, navigate]);

//   if (!admin) {
//     return <AdminLogin />; // If no user, render the login page
//   }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-14 underline">
        Welcome to Admin Dashboard!
      </h1>

      <div className="grid grid-cols-4 gap-5 ml-5 p-10">
        <div className="text-white bg-[#FC5C04] p-4 flex items-center justify-between rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">No. of Professionals</p>
          </div>
          <BsBoxArrowInRight className="text-4xl" />
        </div>

        <div className="text-white bg-blue-500 p-4 flex items-center justify-between rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">No. of Customers</p>
          </div>
          <BsBoxArrowInLeft className="text-4xl" />
        </div>

        <div className="text-white bg-[#FBAC08] p-4 flex items-center justify-between rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">New Bookings</p>
          </div>
          <FaRegBookmark className="text-4xl" />
        </div>

        <div className="text-white bg-[#6CBC64] p-4 flex items-center justify-between rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">Work Done</p>
          </div>
          <FaRegCalendarAlt className="text-4xl" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-5 p-5">
        <div>
          <Barchart />
        </div>
        <div>
          <LineCharts />
        </div>
        <div>
          <Areachart />
        </div>
        <div>
          <Pichart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
