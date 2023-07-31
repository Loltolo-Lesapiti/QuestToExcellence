import React,{useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
const TodoWrapper = () => {
    let [todos, setTodos]=useState([])

    const addTodo= todo=> {
        setTodos([...todos, {id:uuidv4(),task:todo, completed:false, editing:false}]);
    }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo task={todo.task} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoWrapper