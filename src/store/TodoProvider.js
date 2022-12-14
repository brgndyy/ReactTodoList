import React, { useReducer, useState } from "react";
import ToDoContext from "./todo-context";

// 초기 할일

const defaultTodo = {
  todos: [],
};

// 리듀서 함수

const todoReducer = (state, action) => {

    // 추가버튼이라면, 
  if (action.type === "ADD") {

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title: action.todo,
      checked: false,
    };

    return {
      todos: [...state.todos, newTodo],
    };
  }  else if (action.type === 'TOGGLE'){
    return state.todos.map(todo => todo.id === action.id ? {...todo, checked : !todo.checked} : todo)
  } else if (action.type === 'REMOVE'){
      // state.todos.filter(todo => todo.id !== action.id )
      // return state.todos
  }

  return defaultTodo;
};

function TodoProvider(props) {
  //useReducer 사용

  const [todoState, dispatchTodoState] = useReducer(todoReducer, defaultTodo);

  // 할일 추가 dispatch 핸들러

  const addToDoHandler = (todo) => {
    dispatchTodoState({ type: "ADD", todo: todo }); // 여기서 todo가 뭘까?
  };

  // 할일 삭제 dispatch 핸들러

  const removeToDoHandler = (id) => {
    dispatchTodoState({ type: "REMOVE", id: id });
  };

  const toggleToDoHandler = (id) => {
    dispatchTodoState({type : "TOGGLE", id : id});
  }

  const todoContext = {
    todos: todoState.todos,
    addTodo: addToDoHandler,
    removeTodo: removeToDoHandler,
    toggleTodo : toggleToDoHandler
  };

  return (
    <ToDoContext.Provider value={todoContext}>
      {/* 하위 컴포넌트들이 ToDoContext 안에 있는 값들을 사용할 수 있다.*/}
      {props.children}
    </ToDoContext.Provider>
  );
}

export default TodoProvider;
