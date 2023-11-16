import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

const DeleteButton = ({task, onClick}) => {

  const DeleteClick = (e) => {
    onClick(e.target.value)
  }

  return (
      <button onClick={ DeleteClick }  value={ task.id }>
        <AiOutlineDelete />
      </button>
  )
}

export default DeleteButton;
