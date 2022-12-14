import TodoItem from "./TodoItem";
import "./ListTemplate.css";
import ToDoContext from "../store/todo-context";
import { useContext, useState } from "react";

function ListTemplate() {
  const todoContext = useContext(ToDoContext);


  return (
    <div className="list-container">
      <ul>
        {todoContext.todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.checked}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ListTemplate;
