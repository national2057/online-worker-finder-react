import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();
   
   const handleLogin = () => {
      navigate("/signup");
   };
   
   return (
      <nav className="flex justify-between items-center py-7 bg-purple-600 text-stone-900 px-20 sticky top-0 z-10">
         <div>
            <h1 className="font-semibold text-3xl italic underline cursor-pointer hover:text-fuchsia-950 pl-[6em]">NAT-Services</h1>
         </div>

         <div className="flex justify-around items-center gap-8">
            <ul className='flex justify-around items-center gap-5'>
               <li>
                  <NavLink to='/' className='hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold'>Home</NavLink>
               </li>
               <li>
                  <NavLink to='/natservices/about' className='hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold'>About</NavLink>
               </li>
               <li>
                  <NavLink to='/natservices/services' className='hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold'>Services</NavLink>
               </li>
               <li>
                  <NavLink to='/natservices/contact' className='hover:bg-zinc-700 hover:text-black px-6 py-3 rounded-lg text-xl font-semibold pr-10'>Contact</NavLink>
               </li>
            </ul>
            <button
               className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
               onClick={handleLogin}
            >
               Sign Up
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
