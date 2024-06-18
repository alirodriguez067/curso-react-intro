import './TodoCounter.css';


function TodoCounter({total, completed}){
  if(total == 0){
    return(
      <h1 className='TodoCoounter'>
        No hay tareas pendientes 
      </h1>
    );
  }
  else if(total == completed){
    return(
      <h1 className='TodoCoounter'>
        has completado todas tus tareas
      </h1>
    );
  }
    return(
      <h1 className='TodoCoounter'>
        has completado <span>{completed}</span> de <span>{total}</span> tareas
      </h1>
    );
  }

  export {TodoCounter};