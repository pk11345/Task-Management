import { addTask, dltTask, toggleStar, toggleTask } from "./action";

const initialState=JSON.parse(localStorage.getItem("tasks")) || [];

export const reducer=(state=initialState,action)=>{

    // console.log("action recieved:",action)
    switch (action.type) {
        case addTask:
            // console.log("Adding task:", action.payload);
            const updatedState = [...state, {id:Date.now(), task: action.payload ,completed:false,}];

            localStorage.setItem("tasks", JSON.stringify(updatedState)); // Save to local storage
            
            return updatedState;
            break;

            case dltTask:
                const filterState = state.filter(todo => todo.id !== action.payload);
                localStorage.setItem("tasks", JSON.stringify(filterState));
                return filterState

                case toggleTask:
                    const toggledState = state.map(todo =>
                        todo.id === action.payload ? { ...todo, completed: true } : todo
                    );
                    localStorage.setItem("tasks", JSON.stringify(toggledState));
                    return toggledState;

                    case toggleStar:
            const starredState = state.map(todo =>
                todo.id === action.payload ? { ...todo, starred: !todo.starred } : todo
            );
            localStorage.setItem("tasks", JSON.stringify(starredState));
            return starredState;
    
        default:
            return state
            
    }
}