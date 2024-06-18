import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar el curso de platzi", completed: false },
  { text: "tomar el c platzi", completed: true },
  { text: "comprar leche", completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [newTodoText, setNewTodoText] = React.useState('');

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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = { text: newTodoText, completed: false };
      setTodos([...todos, newTodo]);
      setNewTodoText(''); // Clear input after adding
    }
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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
      <div className="TodoInput-container" >
        <input 
          type="text" 
          value={newTodoText} 
          onChange={(e) => setNewTodoText(e.target.value)} 
          placeholder="Añadir nueva tarea"
        />

        <CreateTodoButton onClick={addTodo} />
      </div>
    </>
  );
}

export default App;
