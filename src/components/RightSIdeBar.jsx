import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegBell, FaRegCalendarAlt } from "react-icons/fa";

const RightSIdeBar = ({ task, setIsRightOpen }) => {
  const [notes, setNotes] = useState("");

  // Load saved notes when task changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(`task_notes_${task.id}`);
    setNotes(savedNotes || ""); // Load saved notes or set empty
  }, [task]);

  const handleSaveNotes = () => {
    localStorage.setItem(`task_notes_${task.id}`, notes);
  };

  const handleDeleteNotes = () => {
    localStorage.removeItem(`task_notes_${task.id}`);
    setNotes(""); // Clear the note input
  };

  return (
    <aside className="fixed right-0 top-0 md:w-1/4 w-1/2 h-full bg-gray-200 p-5 shadow-lg flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-red-500 font-bold">Task Details</h2>
        <button onClick={() => setIsRightOpen(false)}>
          <AiOutlineClose className="text-2xl text-red-500 cursor-pointer" />
        </button>
      </div>

      <h3 className="text-lg  font-semibold">{task.task}</h3>

      {task.dueDate && (
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegCalendarAlt />
          <span>Due Date: {task.dueDate}</span>
        </div>
      )}

      {task.reminder && (
        <div className="flex items-center gap-2 text-red-500">
          <FaRegBell />
          <span>Reminder Set</span>
        </div>
      )}

      {/* Notes Section */}
      <textarea
        className="border p-2 rounded-md w-full h-32"
        placeholder="Add notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="flex gap-4">
        <button className="bg-blue-500 text-white p-2 rounded w-1/2" onClick={handleSaveNotes}>
          Save Notes
        </button>
        <button className="bg-red-500 text-white p-2 rounded w-1/2" onClick={handleDeleteNotes}>
          Delete Notes
        </button>
      </div>
    </aside>
  );
};

export default RightSIdeBar;
