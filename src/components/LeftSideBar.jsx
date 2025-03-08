import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { BiTask } from "react-icons/bi";
import { FaRegCalendarAlt, FaRegStar, FaRegBell } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { MdAssignmentInd } from "react-icons/md";
import { IoMdAdd, IoMdInformationCircle } from "react-icons/io";
import { FcPieChart } from "react-icons/fc";

const LeftSideBar = ({ user, handleLogout, setIsLeftOpen }) => {
  const tasks = useSelector((state) => state);

  // Get today's date in YYYY-MM-DD format
  const todayDate = new Date().toISOString().split("T")[0];

  // Convert date strings to actual Date objects before filtering
  const todayTasks = tasks.filter((task) => {
    if (!task.dueDate) return false;
    const taskDate = new Date(task.dueDate).setHours(0, 0, 0, 0); // Normalize task date
    const today = new Date().setHours(0, 0, 0, 0); // Normalize today date
    return taskDate === todayDate || task.reminder;
  });

  const upcomingTasks = tasks.filter((task) => {
    if (!task.dueDate) return false;
    const taskDate = new Date(task.dueDate).setHours(0, 0, 0, 0); // Normalize task date
    const today = new Date().setHours(0, 0, 0, 0); // Normalize today date
    return taskDate > todayDate;
  });

  const importantTasks = tasks.filter((task) => task.starred);
  const allTasks = tasks.length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".sidebar-container")) {
        setIsLeftOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsLeftOpen]);

  return (
    <aside className="sidebar-container md:w-1/5 w-1/2  bg-gray-200 pt-4 flex flex-col items-center gap-4 pb-4 absolute left-0 top-0 h-full shadow-lg">
      <div className="avatar flex flex-col items-center gap-3">
        <img className="h-[100px] rounded-full" src="/pet.webp" alt="User Avatar" />
        <h1 className="font-semibold">Hi, {user}</h1>
      </div>

      <ul className="bg-white pt-4 pb-4 w-[80%] pl-2 space-y-4">
        <li className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
          <BiTask />
          <h1>All Tasks ({allTasks})</h1>
        </li>

        <li className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
          <FaRegCalendarAlt />
          <h1>Today ({todayTasks.length})</h1>
        </li>

        <li className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
          <CiMap />
          <h1>Upcoming ({upcomingTasks.length})</h1>
        </li>

        <li className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
          <FaRegStar />
          <h1>Important ({importantTasks.length})</h1>
        </li>

        <li className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
          <MdAssignmentInd />
          <h1>Assigned To Me</h1>
        </li>
      </ul>

      <div className="addlist flex gap-3 items-center bg-white pt-4 pb-4 w-[80%] pl-2">
        <IoMdAdd />
        <h1>Add List</h1>
      </div>

      <div className="TodayTask flex flex-col gap-3 items-center bg-white pt-4 pb-4 w-[80%] pl-2 pr-2">
        <div className="flex justify-between w-full">
          <h1 className="text-lg font-semibold">Task Overview</h1>
          <FcPieChart className="text-[30px]" />
        </div>
      </div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout} 
        className="mt-4 bg-red-500 text-white p-2 rounded w-[80%] text-center hover:bg-red-600"
      >
        Logout
      </button>
    </aside>
  );
};

export default LeftSideBar;
