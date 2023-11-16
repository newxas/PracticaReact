import React, { useState } from 'react'

const Checkbox = ({task, onChange}) => {

  //const[stat,SetStat] = useState[''];

  const handleClick =(e) => {
    onChange(e.target.checked, task)
  }

  return (
    <input 
      type="checkbox"
      value = { task.status }
      onChange={ handleClick } />
  )
}

export default Checkbox
