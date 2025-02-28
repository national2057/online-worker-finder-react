import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayOut from "./pages/RootLayout";
import Dashboard from "./dashboard/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import JobResponse from "./pages/RespondedJob";
import WorkerDetailsView from "./pages/WorkerDetails";
import CategoryPage from "./pages/CategoryPage";
import Signup from "./authPages/Signup";
import Login from "./authPages/Login";
import Profile from "./pages/Profile";
import TermsAndConditions from "./terms-and-policy/TermsAndConditions";
import PrivacyPolicy from "./terms-and-policy/PrivacyPolicy";

import AdminDashboard from "./admin/admin-pages/AdminDashboard";
import AdminLayOut from "./admin/admin-pages/AdminLayOut";
import AdminJobTable from "./admin/admin-tables/AdminJobTable";
import AdminJobView from "./admin/admin-tables/AdminJobView";
import AdminJobEdit from "./admin/admin-tables/AdminJobEdit";
import CategoryTable from "./admin/admin-tables/CategoryTable";
import CustomerTable from "./admin/admin-tables/CustomerTable";
import WorkerTable from "./admin/admin-tables/WorkerTable";
import AdminLogin from "./admin/admin-auth-page/AdminLoginPage";
import AdminSignup from "./admin/admin-auth-page/AdminSignupPage";

import WorkerLayOut from "./worker/worker-pages/WorkerLayOut";
import WorkerDashboard from "./worker/worker-pages/WorkerDashboard";
import WorkerJobTable from "./worker/worker-tables/WorkerJobTable";
import WorkerProfile from "./worker/worker-profile/WorkerProfile";
import ApprovedJobs from "./worker/worker-tables/ApprovedJobs";
import WorkerJobView from "./worker/worker-tables/WorkerJobView";
import WorkerJobEdit from "./worker/worker-tables/WorkerJobEdit";
import CustomerDetails from "./worker/worker-tables/CustomerDetails";
import PendingRequests from "./worker/worker-tables/PendingRequests";
import JobDescription from "./worker/worker-pages/JobDescription";

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
        <Route path="natservices/job-response" element={<JobResponse />} />
        <Route path="natservices/worker-details" element={<WorkerDetailsView />} />
        <Route path="category/:topic" element={<CategoryPage />} />
        <Route
          path="natservices/terms-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="natservices/privacy-policy" element={<PrivacyPolicy />} />
        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="natservices/user/profile" element={<Profile />} />
      </Route>

      {/* Admin Routes with AdminLayOut */}
      <Route path="/admin" element={<AdminLayOut />}>
        <Route index element={<AdminDashboard />} />
        <Route path="jobs" element={<AdminJobTable />} />
        <Route path="job-view/:id" element={<AdminJobView />} />
        <Route path="job-edit/:id" element={<AdminJobEdit jobs={jobs} setJobs={setJobs} />} />
        <Route path="categories" element={<CategoryTable />} />
        <Route path="workers" element={<WorkerTable />} />
        <Route path="customers" element={<CustomerTable />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="signup" element={<AdminSignup />} />
      </Route>

      {/* Worker Routes with WorkerLayOut */}
      <Route path="/worker" element={<WorkerLayOut />}>
        <Route index element={<WorkerDashboard />} />
        <Route path="job-description/:id" element={<JobDescription />} />
        <Route path="all-jobs" element={<WorkerJobTable />} />
        <Route path="job-view/:id" element={<WorkerJobView />} />
        <Route
          path="job-edit/:id"
          element={<WorkerJobEdit jobs={jobs} setJobs={setJobs} />}
        />
        <Route path="pending-requests" element={<PendingRequests />} />
        <Route path="approved-jobs" element={<ApprovedJobs />} />
        <Route path="customer-details" element={<CustomerDetails />} />
        <Route path="profile" element={<WorkerProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
