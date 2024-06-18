
import React from 'react';
import './CreateTodoButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function CreateTodoButton({ onClick }) {
  return (
    <button className='CreateTodoButton' onClick={onClick}>
      <i class="fa fa-plus-circle" aria-hidden="true"></i>
    </button>
  );
}

export { CreateTodoButton };
