import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/home" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
        </div>
        <div className='text-lg font-light hover:text-blue-dark'>
          <Link to={"/customerTicket"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Airticket Customer</Link>
          <Link to={"/ticket"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">ATC.Admin</Link>
          <Link to={"/tour"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">TourPackages</Link>
          <Link to={"/adTourPackageList"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">TP.Admin</Link>
          <Link to={"/guide"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Guides</Link>
          <Link to={"/guidePack"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Guide Packs</Link>
          <Link to={"/guidePackAdmin"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Ad.Guide Packs</Link>
          <Link to={"/inquiry"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Inquiry</Link>
          <Link to={"/adInquiry"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Ad.Inquiry</Link>
          <Link to={"/spaceProvider"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Space Providers</Link>
          <Link to={"/space"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Spaces</Link>
          <Link to={"/user"} className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">users</Link>
          {/* <a href="/#" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">SampleData</a> */}
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <Link to={'/signup'}>
              <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
            </Link>
          </div>
          <Link to={'/signin'}>
          <div className="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
          </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default navbar;