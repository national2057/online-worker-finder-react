import { useState } from 'react';
import ServiceCategories from '../dummy/ServiceCategories';
import { useNavigate } from 'react-router-dom';

const Services = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const categoriesPerPage = 9;
   const totalPages = Math.ceil(ServiceCategories.length / categoriesPerPage);

   const navigate = useNavigate();

   const getCurrentPageCategories = () => {
      const startIndex = (currentPage - 1) * categoriesPerPage;
      const endIndex = startIndex + categoriesPerPage;
      return ServiceCategories.slice(startIndex, endIndex);
   };

   const handleCategoryClick = (topic) => {
      navigate(`/category/${topic}`);
   };

   // pagination
   const handlePageChange = (page) => {
      setCurrentPage(page);
   };

   return (
      <div className="relative w-full">
         <div className="relative h-[50vh] overflow-hidden">
            <img
               src="/assets/our-services.jpg"
               alt="About NAT-Services"
               className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
               <h1 className="text-blue-900 text-6xl font-bold px-4 py-2 rounded bg-gray-200 bg-opacity-75">
                  Our Services
               </h1>
            </div>
         </div>

         <div className="container mx-auto py-8 px-10">
            <h1 className="text-5xl font-bold my-6 text-center mb-16">Service Categories</h1>

            <div className="flex flex-wrap md:flex-nowrap">
               <div className="flex flex-wrap md:flex-nowrap">
                  <div className="w-1/4 md:w-1/4 lg:w-1/3 p-4">
                     <h2 className="text-2xl font-semibold mb-4 underline">All Categories</h2>
                     <ul className="space-y-2">
                        {ServiceCategories.map((category, index) => (
                           <li key={index} onClick={() => handleCategoryClick(category.topic)}>
                              <a href={`#category-${index}`} className="text-blue-500 hover:underline">
                                 {category.topic}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="w-3/4 md:w-3/4 lg:w-2/3 p-4">
                  <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                     {getCurrentPageCategories().map((category, index) => (
                        <div
                           id={`category-${index}`}
                           key={index}
                           className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
                           onClick={() => handleCategoryClick(category.topic)}
                        >
                           <img
                              src={category.img}
                              alt={category.topic}
                              className="w-64 h-64 object-cover mx-auto border-2 border-gray-200"
                           />
                           <div className="p-4 text-center">
                              <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.topic}</h2>
                              <p className="text-gray-700 mb-4">{category.description}</p>
                              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                 Book Your Service
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="flex justify-center mt-8">
                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                           key={page}
                           onClick={() => handlePageChange(page)}
                           className={`mx-2 px-4 py-2 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        >
                           {page}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Services;
