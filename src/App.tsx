import React, {FC, useState, ChangeEvent } from 'react';

import './App.css';
import {ITask} from './interfaces'
const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [progress, setProgress] = useState<string>("");
  const [oldtodo, setTodo] = useState<ITask[]>([]);
 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) : void =>{
    if(event.target.value === "task")
    {setTask(event.target.value);}
    else if(event.target.value === "deadline"){
      setDeadline(Number(event.target.value));
    }
    else{
      setProgress(event.target.value);
    }
  };

  const addTask = () : void => {
    const newTask = {taskName: task, deadline: deadline, progress: progress};
    setTodo([...oldtodo, newTask]);
    setTask("");
    setDeadline(0);
    setProgress("");
  };



  return (
    <div className="App">
      <div className="header">
        <div className="inputcontainer">
        <input type="text" placeholder="Enter task..." name="task" value={task} onChange={handleChange} />
        <input type="number" placeholder="Enter deadline (in days)" name="deadline" value={deadline} onChange={handleChange} />
        <input type="text" placeholder="Task status(started, inprogess, etc)..." name="progress" value={progress} onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
      </div>
    </div>
  );
}

export default App;
