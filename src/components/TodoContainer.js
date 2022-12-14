import React from 'react'
import "./TodoContainer.css"
import TodoHead from './TodoHead'
import ListTemplate from './ListTemplate'
import TodoInsert from './TodoInsert'


function TodoContainer() {

  return (
    <div className='todo-container'>
        <TodoHead/>
        <ListTemplate/>
        <TodoInsert/>
    </div>
  )
}

export default TodoContainer