import React from 'react'
import { useNavigate } from "react-router-dom";
import { getPopularCategories } from "../dummy/PopularCategories";


const ServiceSection = () => {
   const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/natservices/services");
  };

  const handleCategoryClick = (topic) => {
    navigate(`/category/${topic}`);
  };

  return (
    <>
      <div className="flex flex-row md:flex-col items-center md:items-start justify-between py-16 px-20 bg-orange-300 gap-7">
        <div className="text-center md:text-left w-1/2 text-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for professionals to upgrade your home/offices?
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Book an expert from here.
          </h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700  mt-20"
            onClick={handleButtonClick}
          >
            SEE ALL SERVICES
          </button>
        </div>
        <div className="w-1/2 mt-6 md:mt-0">
          <img
            src="/assets/about-section.jpg"
            alt="about-section"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="px-[75px] py-[134px]">
        <h1 className="text-4xl font-bold text-center mb-6">
          Our Popular Services
        </h1>
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-14 py-5">
          {getPopularCategories().map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleCategoryClick(category.topic)}
            >
              <img
                src={category.img}
                alt={category.topic}
                className="w-60 h-40 object-cover rounded-lg border border-black"
              />
              <h1 className="text-lg font-semibold mt-4 text-center">
                {category.topic}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-7">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleButtonClick}
          >
            View All Services
          </button>
        </div>
      </div>
    </>
  )
}

export default ServiceSection