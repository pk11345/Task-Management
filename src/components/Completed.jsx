import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank,MdCheckBox } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { dlttask, toggletask } from '../redux/action';

const Completed = () => {
    const completedTasks = useSelector((state) => state.filter(task => task.completed)); // Show only completed tasks
    const dispatch = useDispatch();
  return (
    <>
     <div className="w-full flex justify-center  ">

<div className='flex flex-col items-center gap-2 justify-center mt-4 w-[100%]'>
     <h1 className='w-[95%] text-xl font-semibold italic text-green-600'>Completed</h1>
 <div className="tasks w-[95%]  bg-gray-200">
     <ul>
        {completedTasks.length === 0 ? (
        <p className="text-gray-500">No completed tasks</p>
      ) :(
        completedTasks.map((t)=>{
            return <>
            <li key={t.id} className="flex items-center justify-between pl-2 pr-2 pt-6 pb-6 gap-2 border-b-2 border-gray-400">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                {t.completed ? <MdCheckBox className="text-green-600" /> : <MdOutlineCheckBoxOutlineBlank />}
              </button>
              <h1 className="line-through text-gray-500">{t.task}</h1>
            </div>
            <div className="flex gap-3">
              <button onClick={() => dispatch(dlttask(t.id))} className="cursor-pointer hover:bg-red-400">
                <FaTrash />
              </button>
            </div>
          </li>
            </>
        })
        
      )}
         {/* <li className='flex items-center justify-between pl-2 pr-2 pt-6 pb-6 gap-2 border-b-2 border-gray-400'>
             <div className='flex items-center gap-2'>
         <MdOutlineCheckBoxOutlineBlank />
                     <h1>Task</h1>
                     </div>
                     <FaRegStar />
                     </li> */}

                     
     </ul>
 </div>
 </div>
 </div>
    </>
  )
}

export default Completed