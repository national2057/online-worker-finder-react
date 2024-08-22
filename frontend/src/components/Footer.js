import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="bg-gray-800 text-white py-8">
         <div className="container mx-auto px-4">
            <div className="flex flex-row justify-between gap-24">
               <div className="w-full md:w-1/3 mb-6 basis-4/5">
                  <h2 className="text-2xl font-bold">NAT-Services</h2>
                  <p className="mt-6">
                     NAT-Services is one of the trustable names in the field of servicing and repairing sector. NAT-Services is established with the aim - "one-call solution for a wide range of home maintenance and repair needs"... <br />
                  </p>
               </div>
               <div className="w-full md:w-1/3 mb-6 basis-1/3">
                  <h2 className="text-xl font-semibold">Quick Links:</h2>
                  <ul className="mt-2">
                     <li className="mt-1"><a href="/" className="hover:underline">Home</a></li>
                     <li className="mt-1"><a href="/natservices/about" className="hover:underline">About Us</a></li>
                     <li className="mt-1"><a href="/natservices/services" className="hover:underline">Services</a></li>
                     <li className="mt-1"><a href="/natservices/contact" className="hover:underline">Contact Us</a></li>
                  </ul>
               </div>
               <div className="w-full md:w-1/3 mb-6 basis-2/3">
                  <h2 className="text-xl font-semibold">Follow Us At:</h2>
                  <div className="flex space-x-4 mt-2">
                     <a href="www.facebook.com" className="text-2xl hover:text-gray-400"><FaFacebookF /></a>
                     <a href="www.twitter.com" className="text-2xl hover:text-gray-400"><FaTwitter /></a>
                     <a href="www.instagram.com" className="text-2xl hover:text-gray-400"><FaInstagram /></a>
                     <a href="www.linkedin.com" className="text-2xl hover:text-gray-400"><FaLinkedinIn /></a>
                  </div>

                  <li className="list-none mt-10 text-xl font-medium cursor-pointer">
                     <NavLink to="/natservices/terms-conditions" className="underline">Terms and Conditions</NavLink>
                  </li>
                  <li className="list-none pl-7 text-xl font-medium cursor-pointer">
                     <NavLink to="/natservices/privacy-policy" className="underline">Privacy Policy</NavLink>
                  </li>

               </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center">
               <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
