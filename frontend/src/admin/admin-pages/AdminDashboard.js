import React from 'react';
import { FaRegBookmark, FaRegCalendarAlt } from 'react-icons/fa';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';
import { Barchart } from '../admin-components/Charts/Barchart';
import Areachart from '../admin-components/Charts/Areachart';
import Pichart from '../admin-components/Charts/Pichart';
import { LineCharts } from '../admin-components/Charts/LineCharts';



const AdminDashboard = () => {
   return (
      <>
         <h1 className="text-3xl font-bold text-center py-3">Welcome to Admin Dashboard</h1>

         <div className='grid grid-cols-4 gap-5 ml-5 p-10'>

            <div className="text-white bg-blue-500 p-4 flex items-center justify-between rounded-xl gap-10">
               <div>
                  <p className="text-2xl font-bold">872</p>
                  <p className="text-sm">New Booking</p>
               </div>
               <FaRegBookmark className="text-4xl" />
            </div>

            <div className="text-white bg-[#6CBC64] p-4 flex items-center justify-between rounded-xl gap-10">
               <div>
                  <p className="text-2xl font-bold">872</p>
                  <p className="text-sm">Schedule Room</p>
               </div>
               <FaRegCalendarAlt className="text-4xl" />
            </div>

            <div className="text-white bg-[#FBAC08] p-4 flex items-center justify-between rounded-xl gap-10">
               <div>
                  <p className="text-2xl font-bold">872</p>
                  <p className="text-sm">Check In</p>
               </div>
               <BsBoxArrowInRight className="text-4xl" />
            </div>

            <div className="text-white bg-[#FC5C04] p-4 flex items-center justify-between rounded-xl gap-10">
               <div>
                  <p className="text-2xl font-bold">872</p>
                  <p className="text-sm">New Booking</p>
               </div>
               <BsBoxArrowInLeft className="text-4xl" />
            </div>
         </div>

         <div className='grid grid-cols-2  md:grid-cols-1 gap-5 p-5'>
            <div>
               <Barchart />
            </div>
            <div>
               <Areachart />
            </div>
            <div>
               <Pichart />
            </div>
            <div>
               <LineCharts />
            </div>
         </div>

      </>
   )
}

export default AdminDashboard;