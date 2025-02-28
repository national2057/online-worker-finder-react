// import React from "react";
// import Sidebar from "../admin-components/Sidebar";
// import NavBar from "../admin-components/NavBar";
// import { Outlet, useLocation } from "react-router-dom";

// const AdminLayOut = () => {
//   const location = useLocation();
//   const hideSidebarAndNavbar = ["/admin/login", "/admin/signup"].includes(
//     location.pathname
//   );
//   return (
//     <div className="flex flex-row md:flex-row min-h-screen">
//       {!hideSidebarAndNavbar && (
//         <aside className="w-2/10 md:w-64 bg-gray-800 text-white sticky top-0">
//           <Sidebar />
//         </aside>
//       )}

//       <div className="flex-1 flex flex-col w-8/10">
//         {!hideSidebarAndNavbar && (
//           <header className="sticky top-0 z-10 bg-gray-800">
//             <NavBar />
//           </header>
//         )}
//         <main className="flex-1 p-4 bg-gray-100">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayOut;




import React, { useEffect } from "react";
import Sidebar from "../admin-components/AdminSidebar";
import NavBar from "../admin-components/AdminNavbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminLayOut = () => {
   const location = useLocation();
  const navigate = useNavigate();
  
  // Access admin from user state
  const { user } = useSelector((store) => store.auth); 
  const isAdmin = user && user.role === "admin"; // Assuming role-based authentication

  // Hide sidebar and navbar for login/signup pages
  const hideSidebarAndNavbar = ["/admin/login", "/admin/signup"].includes(
    location.pathname
  );

  useEffect(() => {
    if (!isAdmin && !hideSidebarAndNavbar) {
      navigate("/admin/login");
    }
  }, [hideSidebarAndNavbar, isAdmin, location.pathname, navigate]);

  return (
    <div className="flex flex-row md:flex-row min-h-screen">
      {!hideSidebarAndNavbar && (
        <aside className="w-2/10 md:w-64 bg-gray-800 text-white sticky top-0">
          <Sidebar />
        </aside>
      )}

      <div className="flex-1 flex flex-col w-8/10">
        {!hideSidebarAndNavbar && (
          <header className="sticky top-0 z-10 bg-gray-800">
            <NavBar />
          </header>
        )}
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayOut;
