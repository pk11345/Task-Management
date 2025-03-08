import React from 'react';
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";

const Nav = ({ isLeftOpen, setIsLeftOpen }) => {
  return (
    <>
      <div className="nav flex justify-between items-center w-full pt-2 pb-3 pl-5 pr-5">
        <div className="leftSection flex items-center gap-4">
          <div className="LeftSideBar">
            <LuMenu 
              className="text-3xl cursor-pointer" 
              onClick={() => setIsLeftOpen(!isLeftOpen)} // Toggle sidebar
            />
          </div>
          <h1 className="text-2xl text-green-500 font-bold">Do IT</h1>
        </div>
        <div className="rightSection flex items-center gap-4">
          <IoSearch className="text-3xl" />
          <CgMenuGridO className="text-3xl" />
          <BsMoonStars className="text-3xl" />
        </div>
      </div>
    </>
  );
};

export default Nav;
