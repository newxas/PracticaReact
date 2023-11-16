import React, { useState } from 'react'
import Checkbox from './Checkbox'

const TodoList = ({tasks, changeStatus}) => {


  const handler = (value,_task) => {
    const filter = tasks.findIndex( x => x.id === _task.id)
    let newArray = [...tasks];
    newArray[ filter ].status = value
    changeStatus(newArray);
  }

  return (
    <div className='todolist'>
      <ul>
      {
        tasks.map( (task,index)=> (
            <li key={index}>
                <Checkbox task={task} onChange={handler} />
                {task.text}
            </li>
        ))
      }
      </ul>
    </div>

  )
}

export default TodoList
