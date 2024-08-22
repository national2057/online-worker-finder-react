import React from 'react';
import WorkerNavbar from '../worker-components/WorkerNavbar';
import WorkerSidebar from '../worker-components/WorkerSidebar';
import { Outlet } from 'react-router-dom';

const WorkerLayOut = () => {
   return (
      <div className="flex flex-row md:flex-row min-h-screen">
         <aside className="w-2/10 md:w-64 bg-gray-800 text-white sticky top-0">
            <WorkerSidebar />
         </aside>

         <div className="flex-1 flex flex-col w-8/10">
            <header className=" sticky top-0 z-10 bg-gray-800">
               <WorkerNavbar />
            </header>
            <main className="flex-1 p-4 bg-gray-100">
               {/* Main content goes here */}
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default WorkerLayOut;
