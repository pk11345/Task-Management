export const addTask = "AddTask"
export const dltTask ="DeleteTask"
export const toggleTask = "ToggleTask"; 
export const toggleStar = "ToggleStar"

export const addtask=(task,dueDate,reminder)=>({
type:addTask,
payload:task,
dueDate: dueDate ? new Date(dueDate).toISOString().split("T")[0] : null,
reminder,
starred: false,
})

export const dlttask=(id)=>({
    type:dltTask,
    payload:id
})

export const toggletask = (id) => ({
    type: toggleTask,
    payload: id, 
  });

  export const togglestar = (id) => ({
    type: toggleStar,
    payload: id, // Identify task by ID
  });
  