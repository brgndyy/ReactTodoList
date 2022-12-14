import { createContext } from 'react'

const ToDoContext = createContext({ //state 보관함 만들기
    todos: [],
    addTodo : (title) => {},
    removeTodo : (id) => {},
    toggleTodo : (id) => {}
})


export default ToDoContext;