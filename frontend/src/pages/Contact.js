import React from 'react';
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {
   return (
      <>
         <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-36 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
               <h1 className="text-3xl font-bold mb-16 text-center text-gray-800">
                  Contact Information
               </h1>
               <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-center">
                     <FaLocationDot className="mr-2 text-indigo-600" />
                     Khandbari, Sankhuwasabha, Nepal
                  </p>
                  <p className="flex items-center">
                     <MdEmail className="mr-2 text-indigo-600" />
                     info@natservices.com
                  </p>
                  <p className="flex items-center">
                     <FaSquarePhone className="mr-2 text-indigo-600" />
                     +977-9812345678
                  </p>
               </div>
            </div>

            <div className="max-w-md w-full space-y-8">
               <div>
                  <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
                     Contact Us.
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                     We'd love to hear from you! Fill out the form below to get in touch.
                  </p>
               </div>
               <form className="mt-8 space-y-6" action="#" method="POST">
                  <div className="rounded-md shadow-sm -space-y-px">
                     <div>
                        <label htmlFor="name" className="sr-only">
                           Name
                        </label>
                        <input
                           id="name"
                           name="name"
                           type="text"
                           autoComplete="name"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Name"
                        />
                     </div>
                     <div>
                        <label htmlFor="email" className="sr-only">
                           Email address
                        </label>
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Email address"
                        />
                     </div>
                     <div>
                        <label htmlFor="message" className="sr-only">
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           rows="4"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Your message"
                        ></textarea>
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default Contact;
