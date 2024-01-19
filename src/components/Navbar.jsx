import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-0 rounded-lg mb-10 bg-orange-200">
     <div className="flex flex-col lg:flex-row justify-between ">
       <div>
        <img src="./src/assets/food-delivery.png" alt="image" className="h-16"/>
       </div>
       <div>
        <h1 className="text-2xl font-bold ">Paradise Foods</h1>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
       </div>

       </div>
     
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="py-4 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
