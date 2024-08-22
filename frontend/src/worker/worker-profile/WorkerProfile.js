import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="bg-cover bg-center h-40" style={{ backgroundImage: `url('https://via.placeholder.com/400')` }}>
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <div className="h-20 w-20 bg-cover bg-center rounded-full border-4 border-white -mt-10" style={{ backgroundImage: `url('https://via.placeholder.com/100')` }}>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Plumbing Specialist</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">Experience: 5 Years</p>
          <p className="text-gray-700 text-sm">Rating: 4.8/5</p>
          <p className="text-gray-700 text-sm">Location: New York, NY</p>
        </div>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Contact Professional</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
