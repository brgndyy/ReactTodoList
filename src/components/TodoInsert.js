import React, { useContext, useState } from "react";
import "./TodoInsert.css";
import ToDoContext from "../store/todo-context";

function TodoInsert() {
  const [toggle, setToggle] = useState(false);
  const [todoText, setTodoText] = useState("");
  const todoContext = useContext(ToDoContext);

  const todoTextHandler = (e) => {
    setTodoText(e.target.value);
  };

  // 인풋창 토글 핸들러
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(todoText.trim() !== ''){
      todoContext.addTodo(todoText);
    } else{
      return null;
    }
    console.log(todoContext)
    setTodoText('');
  };

  return (
    <>
      {toggle ? (
        <div className="insert-container">
          <div className="insert-form">
            <form onSubmit={onSubmitHandler}>
              <div className="input-container">
                <input
                  value={todoText}
                  type={"text"}
                  placeholder="할 일을 입력후 엔터를 누르세요"
                  onChange={todoTextHandler}
                ></input>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {toggle ? (
        <div className="button-container">
          <button onClick={toggleHandler} className="plusBtn">
            X
          </button>
        </div>
      ) : (
        <div className="button-container">
          <button onClick={toggleHandler} className="minusBtn">
            +
          </button>
        </div>
      )}
    </>
  );
}

export default TodoInsert;
