import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Checkbox from './components/Checkbox'

import './App.css'

function App() {
  const [task,setTask] = useState([{id: 1, text: "example", status: false}]);

  const addTask=(tasks)=>{
    setTask([...task,tasks])
  }

  const changeStatus=(values)=> {
    setTask(values)
  }

  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      <TodoList tasks={task} changeStatus={changeStatus} />
    </div>
  )
}

export default App
