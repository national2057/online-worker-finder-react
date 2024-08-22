// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
//             Login
//           </button>
//           <p className="text-center text-gray-500 mt-4">
//             Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;







import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
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
            Login
          </button>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
