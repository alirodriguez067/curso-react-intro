import React from "react";
import './todoForm.css';
import { TodoContex } from "../TodoContex";

function TodoForm (){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContex);

    const [newTodoValue, setNewTodoValue] 
    = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form onSubmit={onSubmit}>
         <label>agregar nueva tarea</label>
         <textarea placeholder="Add a todo" value={newTodoValue}
         onChange={onChange}/>
         <div className="TodoForm-buttonContainer">
            <button type="submit" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
        </div>
         
        </form>
    )
    
}

export {TodoForm};