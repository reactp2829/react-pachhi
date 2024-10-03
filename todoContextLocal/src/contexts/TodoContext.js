//create 

import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    // by default value set here
    todos : [
        {
            id : 1,
            todo : "Todo Msg",
            completed : false       
        }],
        addTodo : (todo)=>{},
        updateTodo : (id,todo)=>{},
        deleteTodo : (id) =>{},
        toggleComplete : (id)=>{}
})

export const TodoProvider = TodoContext.Provider
// provider 

//hooks 
export const useTodo = () =>{
    return useContext(TodoContext)
}