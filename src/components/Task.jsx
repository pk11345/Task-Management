import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegStar, FaStar, FaRegBell, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { dlttask, togglestar, toggletask } from "../redux/action";

const Task = ({ setSelectedTask, setIsRightOpen }) => {
  const tasks = useSelector((state) => state.filter((task) => !task.completed));
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center">
      <div className="tasks w-[95%]">
        <ul>
          {tasks.length === 0 ? (
            <h1 className="text-xl text-gray-500 font-semibold">No task Added</h1>
          ) : (
            tasks.map((t) => (
              <li
                key={t.id}
                className="flex flex-col bg-gray-100 p-3 rounded-md shadow-md border-b-2 border-gray-400 mt-2 cursor-pointer"
                onClick={() => {
                  setSelectedTask(t);
                  setIsRightOpen(true);
                }}
              >
                {/* Task Name & Completion Checkbox */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); dispatch(toggletask(t.id)); }} className="cursor-pointer">
                      {t.completed ? <MdCheckBox className="text-green-600" /> : <MdOutlineCheckBoxOutlineBlank />}
                    </button>
                    <h1 className={t.completed ? "line-through text-gray-500" : ""}>{t.task}
                       <span className="text-xs text-gray-500 italic">  (Add note)</span> </h1>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={(e) => { e.stopPropagation(); dispatch(togglestar(t.id)); }} className="cursor-pointer">
                      {t.starred ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
                    </button>
                    <button className="cursor-pointer hover:bg-red-400" onClick={(e) => { e.stopPropagation(); dispatch(dlttask(t.id)); }}>
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>

                {/* Due Date & Reminder Section */}
                <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
                  {t.dueDate && (
                    <div className="flex items-center gap-2">
                      <FaRegCalendarAlt />
                      <span>{t.dueDate}</span>
                    </div>
                  )}
                  {t.reminder && (
                    <div className="flex items-center gap-2 text-red-500">
                      <FaRegBell />
                      <span>Reminder Set</span>
                    </div>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Task;
