import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggletask, togglestar } from "../redux/action";
import { FaStar } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const StarredTask = () => {
  const starredTasks = useSelector((state) => state.filter(task => task.starred)); // Show only starred tasks
  const dispatch = useDispatch();

  return (
    <div className="starred-task-list w-[95%] mt-6" id="starredTask">
      <h1 className="text-xl font-semibold">Starred Tasks</h1>
      {starredTasks.length === 0 ? (
        <p className="text-gray-500">No starred tasks</p>
      ) : (
        starredTasks.map((t) => (
          <li key={t.id} className="flex items-center justify-between pl-2 pr-2 pt-6 pb-6 gap-2 border-b-2 border-gray-400">
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(toggletask(t.id))} className="cursor-pointer">
                {t.completed ? <MdCheckBox className="text-green-600" /> : <MdOutlineCheckBoxOutlineBlank />}
              </button>
              <h1 className={t.completed ? "line-through text-gray-500" : ""}>{t.task}</h1>
            </div>
            <div className="flex gap-3">
              <button onClick={() => dispatch(togglestar(t.id))} className="cursor-pointer">
                <FaStar className="text-yellow-500" />
              </button>
            </div>
          </li>
        ))
      )}
    </div>
  );
};

export default StarredTask;
