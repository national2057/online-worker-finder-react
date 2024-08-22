import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPopularCategories } from '../dummy/PopularCategories';

const Dashboard = () => {
   const [search, setSearch] = useState('');

   const navigate = useNavigate();

   const handleButtonClick = () => {
      navigate('/natservices/services');
   };

   const handleCategoryClick = (topic) => {
      navigate(`/category/${topic}`);
   };


   return (
      <>
         <div
            className="flex flex-col min-h-[80vh] bg-gradient-to-br from-cyan-100 via-pink-200 to-yellow-200"
            style={{
               backgroundImage: `url(/assets/home-dash.jpg)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
         >
            <div className="flex items-center justify-center flex-grow">
               <div className="bg-orange-400 bg-opacity-75 p-6 rounded-lg w-[40%]">
                  <div>
                     <h1 className="text-2xl font-semibold pl-[69px] mb-7">Choose a service to get started.</h1>
                     <div className="flex items-center max-w-md mx-auto bg-white rounded-lg mt-4">
                        <div className="w-full">
                           <input
                              type="search"
                              className="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none "
                              placeholder="Search by service category..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                           />
                        </div>
                        <div>
                           <button
                              type="submit"
                              className={`flex items-center justify-center w-12 h-12 text-white rounded-r-lg ${search.length > 0 ? 'bg-purple-500' : 'bg-gray-500 cursor-not-allowed'}`}
                              disabled={search.length === 0}
                           >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className="flex flex-row md:flex-col items-center md:items-start justify-between py-16 px-20 bg-orange-300 gap-7">
            <div className="text-center md:text-left w-1/2 text-xl">
               <h1 className="text-3xl md:text-4xl font-bold mb-4">Looking for professionals to upgrade your home/offices?</h1>
               <h1 className="text-3xl md:text-4xl font-bold mb-8">Book an expert from here.</h1>
               <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700  mt-20"
                  onClick={handleButtonClick}
               >
                  SEE ALL SERVICES
               </button>
            </div>
            <div className="w-1/2 mt-6 md:mt-0">
               <img src="/assets/about-section.jpg" alt="about-section" className="w-[500px] h-auto rounded-lg shadow-lg" />
            </div>
         </div>


         <div className="px-[75px] py-[134px]">
            <h1 className="text-4xl font-bold text-center mb-6">Our Popular Services</h1>
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
                     <h1 className="text-lg font-semibold mt-4 text-center">{category.topic}</h1>
                  </div>
               ))}
            </div>
            <div className="flex justify-center my-7">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleButtonClick}>
                  View All Services
               </button>
            </div>
         </div>


      </>
   );
}

export default Dashboard;
