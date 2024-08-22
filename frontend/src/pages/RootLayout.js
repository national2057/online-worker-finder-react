// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const RootLayOut = () => {
//    return (
//       <>
//          <Navbar />

//          <main>
//             <Outlet />
//          </main>

//          <Footer />

//       </>
//    )
// }

// export default RootLayOut;






// RootLayOut.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayOut = () => {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/signup', '/admin'].includes(location.pathname);

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default RootLayOut;
