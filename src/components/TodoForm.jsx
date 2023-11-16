import React, { useState } from 'react'

const TodoForm = (props) => {

  const [tasks, setTasks] = useState('');

  const handleSubmit= (e) => {
    e.preventDefault();
    
    props.addTask({
      id: Math.floor(Math.random() * 10000),
      text: tasks,
      status: true
    });
    
    
    setTasks('');
  }

  const handleChange = (e) => {
    setTasks(e.target.value);
  }

  return (
   
    <form onSubmit={ handleSubmit }>
       <h1>Lista de Tareas</h1>
        <input 
          type="text" 
          onChange={ handleChange }
          value={ tasks }
        />
        <button type='submit'>Agregar</button>
    </form>
  )
}

export default TodoForm
