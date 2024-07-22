import './TodoSearch.css';
import React from 'react';
import { TodoContex } from '../TodoContex';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
   } = React.useContext(TodoContex);
 return(
      <input className='TodoSearch' placeholder="Buscar tarea"
      value ={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
    );
  }

  export {TodoSearch};