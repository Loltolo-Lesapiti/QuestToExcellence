import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task}</p>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      <FontAwesomeIcon icon="fa-solid fa-trash" />
      </div>
    </div>
  )
}

export default Todo