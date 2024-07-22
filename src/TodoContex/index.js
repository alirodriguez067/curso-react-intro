
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContex = React.createContext();

function TodoProvider({children}){
    const {
        item: todos, 
        saveItem: saveTodos,
        error,
        loading,} = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [newTodoText, setNewTodoText] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    
      
    
      const completeTodo = (text) => {
        const newTodos = todos.map(todo =>
          todo.text === text ? { ...todo, completed: true } : todo
        );
        saveTodos(newTodos);
      };
      console.log('log1');
      
      React.useEffect(()=> {
        console.log('looooog 2');
      }, [totalTodos]);
    
      console.log('log3');
    
      const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
      };
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      };
      
    return(
        <TodoContex.Provider value={{ 
            error,
            loading,
            completeTodo,
            deleteTodo,
            addTodo,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            openModal,
            setOpenModal,
            }}>
            {children}
        </TodoContex.Provider>
    );
}

export {TodoContex, TodoProvider};