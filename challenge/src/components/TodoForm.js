import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    let [value, setValue]=useState('') 
    const handleSubmit=e=>{
        e.preventDefault();
       addTodo(value);
       setValue('');
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='What is the task today?' value={value} className='todo-input' onChange={e=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm