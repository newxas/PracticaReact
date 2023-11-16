import React, { useState } from 'react'
import Checkbox from './Checkbox'
import DeleteButton from './DeleteButton';


const TodoList = ({tasks, changeStatus, onDelete}) => {


  const handler = (value,_task) => {
    const filter = tasks.findIndex( x => x.id === _task.id)
    let newArray = [...tasks];
    newArray[ filter ].status = value
    changeStatus(newArray);
  }

  const deleter = (_task) => {
    let deleteArray = [...tasks];
    deleteArray = tasks.filter( x => x.id != _task)
    onDelete(deleteArray);
  }

  return (
    <div className='todolist'>
      <ul className='list-group d-inline-block'>
      {
        tasks.map( (task,index)=> (
            <li key={index} className='list-group-item'>
                <Checkbox task={task} onChange={handler}/>
                <label className='ps-2 pe-2'>{task.text}</label>
                <DeleteButton task={task} onClick={deleter} />
            </li>
        ))
      }
      </ul>
    </div>

  )
}

export default TodoList
