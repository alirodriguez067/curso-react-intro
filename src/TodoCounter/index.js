import React from 'react';
import './TodoCounter.css';
import { TodoContex } from '../TodoContex';


function TodoCounter(){
 const {
  totalTodos,
  completedTodos,
 } = React.useContext(TodoContex);

  if(totalTodos === 0){
    return(
      <h1 className='TodoCoounter'>
        No hay tareas pendientes 
      </h1>
    );
  }
  else if(totalTodos === completedTodos){
    return(
      <h1 className='TodoCoounter'>
        has completado todas tus tareas
      </h1>
    );
  }
    return(
      <h1 className='TodoCoounter'>
        has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
      </h1>
    );
  }

  export {TodoCounter};