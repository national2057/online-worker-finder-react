// import React from 'react';

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="name"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Confirm your password"
//             />
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
//             Sign Up
//           </button>
//           <p className="text-center text-gray-500 mt-4">
//             Already have an account? <a href="/login" className="text-blue-500">Login</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;







import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Login As</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="customer">Customer</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            Sign Up
          </button>
          <p className="text-center text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
