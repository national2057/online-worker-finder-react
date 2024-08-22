import React from 'react';

const About = () => {
   return (
      <>
         <div>
            <div className="relative w-full h-[40vh]">
               <img
                  src="/assets/about-section.jpg"
                  alt="About NAT-Services"
                  className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-6xl font-bold bg-gray-800 bg-opacity-50 px-4 py-2 rounded">
                     COMPANY OVERVIEW
                  </h1>
               </div>
            </div>
            <section className="bg-gray-100 py-8 px-4 md:px-8 mt-6">
               <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                     <h2 className="text-2xl font-bold text-gray-800 mb-4">About NAT-Services</h2>
                     <p className="text-gray-700 mb-6">
                        NAT-Services is one of the trustable names in the field of servicing and repairing sector. Established with the aim of providing a "one-call solution for a wide range of home maintenance and repair needs", we are committed to delivering world-class service that brings a smile to your face.
                     </p>
                     <p className="text-gray-700 mb-6">
                        We don't just aim for a one-time service; we strive to be your long-term partner whenever your home or office needs repairs or remodeling. Our reputation is built on satisfied customers, so you can always trust us for any kind of maintenance and renovation service you need.
                     </p>
                     <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Company Overview</h3>
                     <p className="text-gray-700 mb-6">
                        At NAT-Services, our mission is to provide exceptional service and reliable solutions for all your home and office maintenance needs. With years of experience and a team of dedicated professionals, we are here to ensure that your space remains in top condition, addressing any issues promptly and effectively.
                     </p>
                     <p className="text-gray-700 mb-6">
                        At NAT-Services, we pride ourselves on offering comprehensive solutions for all your home and office needs. From routine maintenance to complex repairs and remodeling, our team of experienced professionals is dedicated to providing exceptional service and ensuring the highest level of customer satisfaction. Our commitment to quality and reliability makes us a trusted partner in maintaining and enhancing the spaces you care about.
                     </p>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default About;

