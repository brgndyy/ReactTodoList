import React, { useContext } from 'react'
import "./TodoItem.css"
import { AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai';
import {BsCircle} from 'react-icons/bs'
import ToDoContext from '../store/todo-context';

function TodoItem(props) {

  const todoContext = useContext(ToDoContext);



  return (
    <div className='toDoItem-container'>
    <div onClick={todoContext.toggleTodo} className={props.checked ? "todoCheckBtn checked" : "todoCheckBtn notchecked"}>{props.checked ?<AiOutlineCheckCircle/> : <BsCircle/>}</div>    
    <li className={props.checked ? "toDoTitle checked" : "toDoTitle"}>{props.title}</li>
    <div className='toDoDeleteBtn'><AiFillDelete/></div>
    </div>
  )
}

export default TodoItem