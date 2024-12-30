import React, { useState } from 'react'

const HeroSection = () => {
     const [search, setSearch] = useState("");
   
  return (
    <>
       {/* Hero Section  */}
       <div
        className="flex flex-col min-h-[80vh] bg-gradient-to-br from-cyan-100 via-pink-200 to-yellow-200"
        style={{
          backgroundImage: `url(/assets/home-dash.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center flex-grow">
          <div className="bg-orange-400 bg-opacity-75 p-6 rounded-lg w-[40%]">
            <div>
              <h1 className="text-2xl font-semibold pl-[69px] mb-7">
                Choose a service to get started.
              </h1>
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
                    className={`flex items-center justify-center w-12 h-12 text-white rounded-r-lg ${
                      search.length > 0
                        ? "bg-purple-500"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                    disabled={search.length === 0}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection