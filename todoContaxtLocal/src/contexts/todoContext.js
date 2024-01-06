import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:   [
        {

            id: 1,
            todoText: "todo msg",
            completed: false,

        }
    ],
    addTodo: (todoText) => {},
    updateTodo: (id, todoText) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}

})

export const useTodo=  () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider