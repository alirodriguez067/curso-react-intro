import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLonding } from '../TodosLonding';
import { TodosError } from '../TodosError';
import { TodoContex } from '../TodoContex';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUi() 
{
  const {
    error,
    loading,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal
   } = React.useContext(TodoContex);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
          {loading && <TodosLonding/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0)}
        
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>
      
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} />
          </Modal>
        )}
      
      
    </>
  );
}
export { AppUi };