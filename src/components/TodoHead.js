import React, { useContext } from "react";
import "./TodoHead.css";
import ToDoContext from "../store/todo-context";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const getDay = new Date().getDay();
let day;

if(getDay === 1){
  day = '월요일';
} else if (getDay === 2){
  day = '화요일'
} else if (getDay === 3){
  day = '수요일'
} else if (getDay === 4){
  day = '목요일'
} else if (getDay === 5){
  day = '금요일'
} else if (getDay === 6){
  day = '토요일'
} else if (getDay === 7){
  day = '일요일'
}

function TodoHead() {
  const todoContext = useContext(ToDoContext);
  const YMD = `${year}년 ${month}월 ${date}일`;


  return <div className="head-container">
    <h1>{YMD}</h1>
    <div className="day">{day}</div>
    <div className="todo-left"><p> 할 일 {todoContext.todos.length}개 남음</p></div>
  </div>;
}

export default TodoHead;
