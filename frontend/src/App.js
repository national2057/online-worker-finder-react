// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import RootLayOut from './pages/RootLayout';
// import Dashboard from './dashboard/Dashboard';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import CategoryPage from './pages/CategoryPage';
// import Login from './authPages/Login';
// import Signup from './authPages/Signup';
// import TermsAndConditions from './terms-and-policy/TermsAndConditions';
// import PrivacyPolicy from './terms-and-policy/PrivacyPolicy';

// import AdminDashboard from './admin/admin-pages/AdminDashboard';
// import AdminLayOut from './admin/admin-pages/AdminLayOut';
// import JobTable from './admin/admin-tables/JobTable';


// function App() {
//    return (
//       <Routes>
//          <Route path="/" element={<RootLayOut />}>
//             <Route index element={<Dashboard />} />
//             <Route path="/natservices/about" element={<About />} />
//             <Route path="/natservices/services" element={<Services />} />
//             <Route path="/natservices/services/:topic" element={<Services />} />
//             <Route path="/natservices/contact" element={<Contact />} />
//             <Route path="/category/:topic" element={<CategoryPage />} />

//             {/* Terms and Policy */}
//             <Route path="/natservices/terms-conditions" element={<TermsAndConditions />} />
//             <Route path="/natservices/privacy-policy" element={<PrivacyPolicy />} />


//             {/* Admin Routes */}
//             <Route path="/admin" element={<AdminLayOut />}>
//                <Route index element={<AdminDashboard />} />
//                <Route path="/admin/jobs" element={<JobTable />} />
//                {/* <Route path="/admin/services" element={<Services />} /> */}
//                {/* <Route path="users" element={<Workers />} /> */}
//             </Route>


//             {/* Auth Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//          </Route>
//       </Routes>
//    );
// }

// export default App;





import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayOut from './pages/RootLayout';
import Dashboard from './dashboard/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import Login from './authPages/Login';
import Signup from './authPages/Signup';
import TermsAndConditions from './terms-and-policy/TermsAndConditions';
import PrivacyPolicy from './terms-and-policy/PrivacyPolicy';

import AdminDashboard from './admin/admin-pages/AdminDashboard';
import AdminLayOut from './admin/admin-pages/AdminLayOut';
import JobTable from './admin/admin-tables/JobTable';
import WorkerTable from './admin/admin-tables/WorkerTable';
import CustomerTable from './admin/admin-tables/CustomerTable';
import JobView from './admin/admin-tables/JobView';
import JobEdit from './admin/admin-tables/JobEdit';

import WorkerLayOut from './worker/worker-pages/WorkerLayOut';
import WorkerDashboard from './worker/worker-pages/WorkerDashboard';
import WorkerJobTable from './worker/worker-tables/WorkerJobTable';
import WorkerProfile from './worker/worker-profile/WorkerProfile';
import ApprovedJobs from './worker/worker-tables/ApprovedJobs';
import WorkerJobView from './worker/worker-tables/WorkerJobView';
import CustomerDetails from './worker/worker-tables/CustomerDetails';

function App() {
   const [jobs, setJobs] = useState([]);
   
   return (
      <Routes>
         {/* Public Routes with RootLayOut */}
         <Route path="/" element={<RootLayOut />}>
            <Route index element={<Dashboard />} />
            <Route path="natservices/about" element={<About />} />
            <Route path="natservices/services" element={<Services />} />
            <Route path="natservices/services/:topic" element={<Services />} />
            <Route path="natservices/contact" element={<Contact />} />
            <Route path="category/:topic" element={<CategoryPage />} />
            <Route path="natservices/terms-conditions" element={<TermsAndConditions />} />
            <Route path="natservices/privacy-policy" element={<PrivacyPolicy />} />
            {/* Auth Routes */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
         </Route>

         {/* Admin Routes with AdminLayOut */}
         <Route path="/admin" element={<AdminLayOut />}>
            <Route index element={<AdminDashboard />} />
            <Route path="jobs" element={<JobTable />} />
            <Route path="job-view" element={<JobView />} />
            <Route path="job-edit/:id" element={<JobEdit jobs={jobs} setJobs={setJobs} />} />
            <Route path="workers" element={<WorkerTable />} />
            <Route path="customers" element={<CustomerTable />} />
         </Route>

         {/* Worker Routes with WorkerLayOut */}
         <Route path="/worker" element={<WorkerLayOut />}>
            <Route index element={<WorkerDashboard />} />
            <Route path="jobs" element={<WorkerJobTable />} />
            <Route path="job-view" element={<WorkerJobView />} />
            <Route path="job-edit/:id" element={<JobEdit jobs={jobs} setJobs={setJobs} />} />
            <Route path="approved-jobs" element={<ApprovedJobs />} />
            <Route path="customer-details-view" element={<CustomerDetails />} />
            <Route path="profile" element={<WorkerProfile />} />
         </Route>
      </Routes>
   );
}

export default App;
