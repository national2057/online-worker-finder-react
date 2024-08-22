import React from 'react';
import Sidebar from '../admin-components/Sidebar';
import NavBar from '../admin-components/NavBar';
import { Outlet } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';

const AdminLayOut = () => {
   return (
      <div className="flex flex-row md:flex-row min-h-screen">
         <aside className="w-2/10 md:w-64 bg-gray-800 text-white sticky top-0">
            <Sidebar />
         </aside>

         <div className="flex-1 flex flex-col w-8/10">
            <header className="sticky top-0 z-10 bg-gray-800">
               <NavBar />
            </header>
            <main className="flex-1 p-4 bg-gray-100">
               {/* Main content goes here */}
               
               {/* <AdminDashboard /> */}
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default AdminLayOut;
