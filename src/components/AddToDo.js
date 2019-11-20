import React from "react";
import styled from "@emotion/styled";
import ToDoList from "./ToDoList";

//STYLE Start
const TaskSubmit = styled.form`
  width: 400px;
`;

const TaskInput = styled.input`
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: auto;
  background-color: white;
  border-radius: 5px;
`;

//STYLE End

export default function AddToDo(todo) {
  return (
    <div>
      <TaskSubmit>
        <TaskInput type="text" placeholder="Add Task ..." value={todo.title} />
        <SubmitButton>Push</SubmitButton>
      </TaskSubmit>
    </div>
  );
}
