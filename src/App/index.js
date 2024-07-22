import React from 'react';
import { AppUi } from './appUi';
import { TodoProvider } from '../TodoContex'; 


function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
