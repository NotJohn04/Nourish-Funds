
"use client";

import ProjectCounter from "@/contracts/projectCounter";
import TotalMatchingPool from "@/contracts/totalMatchingPool";


const Header2 = () => (
  <header className="bg-black text-white p-4">
    <div className="text-xl font-semibold mb-4">

    <ProjectCounter/>
    <TotalMatchingPool/>
    
    </div>
    {/* <div className="text-2xl font-semibold mb-4">
      Event
    </div>
    <nav className="flex space-x-8 text-lg">
      <a href="#" className="hover:text-gray-300">Arbitrium</a>
      <a href="#" className="hover:text-gray-300">Polygon</a>
      <a href="#" className="hover:text-gray-300">Tron</a>
    </nav> */}
  </header>
);

export default Header2;