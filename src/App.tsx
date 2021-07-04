import React, {FC} from 'react';

import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
      <input type="text" placeholder="Enter task..."/>
      <input type="number" placeholder="Enter deadline (in days)"/>
      <button>Add Task</button>
      </div>
      <div className="todolist">
      </div>
    </div>
  );
}

export default App;
