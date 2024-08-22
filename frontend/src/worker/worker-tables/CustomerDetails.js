// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const CustomerDetails = () => {
//    const { state } = useLocation();
//    const navigate = useNavigate();
//    const { job } = state;

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Customer Details</h2>
//          <div className="space-y-2">
//             <p><strong>Full Name:</strong> {job.fullName}</p>
//             <p><strong>Email:</strong> {job.email}</p>
//             <p><strong>Phone:</strong> {job.phone}</p>
//             <p><strong>Address:</strong> {job.address}</p>
//          </div>
//          <div className="mt-4">
//             <button
//                onClick={() => navigate('/worker/approved-jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//             >
//                Back
//             </button>
//          </div>
//       </div>
//    );
// };

// export default CustomerDetails;





import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomerDetailsView = () => {
   const { state } = useLocation();
   const navigate = useNavigate();
   const { job } = state;

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">Customer Details</h2>
         <div className="space-y-2">
            <p><strong>Full Name:</strong> {job.fullName}</p>
            <p><strong>Email:</strong> {job.email}</p>
            <p><strong>Phone:</strong> {job.phone}</p>
            <p><strong>Address:</strong> {job.address}</p>
         </div>
         <div className="mt-4">
            <button
               onClick={() => navigate('/worker/approved-jobs')}
               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
               Back
            </button>
         </div>
      </div>
   );
};

export default CustomerDetailsView;






// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const CustomerDetails = () => {
//    const { customerId } = useParams();
//    const [customer, setCustomer] = useState(null);
//    const navigate = useNavigate();


//    const data = [
//       {
//          id: 1,
//          fullName: "John Doe",
//          email: "john.doe@example.com",
//          phone: "123-456-7890",
//          address: "123 Main St, Anytown, USA",
//       },
//       {
//          id: 2,
//          fullName: "Jane Smith",
//          email: "jane.smith@example.com",
//          phone: "987-654-3210",
//          address: "456 Elm St, Othertown, USA",
//       },
//       // Add more customer data as needed
//    ];


//    useEffect(() => {
//       // Fetch customer details using the customerId
//       const fetchCustomerDetails = async () => {
//          const fetchedCustomer = data.find((item) => item.id === parseInt(customerId));
//          setCustomer(fetchedCustomer);
//       };

//       fetchCustomerDetails();
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    }, [customerId]);

//    // if (!customer) {
//    //    return <div>Loading...</div>;
//    // }

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Customer Details</h2>
//          <div className="space-y-2">
//             <p><strong>Customer ID:</strong> {customer.id}</p>
//             <p><strong>Full Name:</strong> {customer.fullName}</p>
//             <p><strong>Email:</strong> {customer.email}</p>
//             <p><strong>Phone:</strong> {customer.phone}</p>
//             <p><strong>Address:</strong> {customer.address}</p>
//          </div>
//          <div className="mt-4">
//             <button
//                onClick={() => navigate('/worker/approved-jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//             >
//                Back
//             </button>
//          </div>
//       </div>
//    );
// };

// export default CustomerDetails;





// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const CustomerDetails = () => {
//    const { customerId } = useParams();
//    const [customer, setCustomer] = useState(null);
//    const navigate = useNavigate();

//    const data = [
//       {
//          id: 1,
//          fullName: "John Doe",
//          email: "john.doe@example.com",
//          phone: "123-456-7890",
//          address: "123 Main St, Anytown, USA",
//       },
//       {
//          id: 2,
//          fullName: "Jane Smith",
//          email: "jane.smith@example.com",
//          phone: "987-654-3210",
//          address: "456 Elm St, Othertown, USA",
//       },
//       // Add more customer data as needed
//    ];

//    useEffect(() => {
//       // Fetch customer details using the customerId
//       const fetchCustomerDetails = async () => {
//          const fetchedCustomer = data.find((item) => item.id === parseInt(customerId));
//          setCustomer(fetchedCustomer);
//       };

//       fetchCustomerDetails();
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//    }, [customerId]);

//    // if (!customer) {
//    //    return <div>Loading...</div>;
//    // }

//    return (
//       <div className="p-4">
//          <h2 className="text-xl font-bold mb-4">Customer Details</h2>
//          <div className="space-y-2">
//             <p><strong>Customer ID:</strong> {customer.id}</p>
//             <p><strong>Full Name:</strong> {customer.fullName}</p>
//             <p><strong>Email:</strong> {customer.email}</p>
//             <p><strong>Phone:</strong> {customer.phone}</p>
//             <p><strong>Address:</strong> {customer.address}</p>
//          </div>
//          <div className="mt-4">
//             <button
//                onClick={() => navigate('/worker/approved-jobs')}
//                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//             >
//                Back
//             </button>
//          </div>
//       </div>
//    );
// };

// export default CustomerDetails;
