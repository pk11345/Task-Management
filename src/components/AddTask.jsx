import React, { useState } from 'react';
import { FaRegBell } from "react-icons/fa";
import { CgSync } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/action';

const AddTask = () => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(""); 
  const [reminder, setReminder] = useState(false); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    dispatch(addtask(task, dueDate, reminder));
   
    setTask("");
    setDueDate("");
    setReminder(false);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className='flex flex-col items-center gap-2 justify-center mt-4 w-[100%]'>
          <h1 className='w-[95%]'>To-Do</h1>
          <div className="addTask bg-gray-300 w-[95%] flex flex-col justify-between h-[180px] pt-3 pb-2 pl-3 pr-3">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              
              <div className="addInput">
                <input className='w-full outline-none text-xl p-2' 
                  onChange={(e) => setTask(e.target.value)} 
                  value={task}
                  type="text" 
                  placeholder='Enter Task' 
                />
              </div>

              {/* Due Date & Reminder */}
              <div className='flex gap-4'>
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className='text-xl'/>
                  <input 
                    type="date" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    className="border p-2"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaRegBell className='text-xl'/>
                  <input 
                    type="checkbox" 
                    checked={reminder} 
                    onChange={(e) => setReminder(e.target.checked)} 
                    className="w-5 h-5"
                  />
                  <span>Reminder</span>
                </div>
              </div>

              <button type='submit' className='bg-green-300/50 text-xl p-2 rounded-xl text-green-700'>
                Add Task
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
