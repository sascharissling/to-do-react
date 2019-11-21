import React from "react";
import styled from "@emotion/styled";

//STYLE Start
const TaskSubmit = styled.form`
  width: 400px;
`;

const TaskInput = styled.input`
  border-radius: 5px;
  height: 40px;
  width: 200px;
  background: #bbbbbb;
`;

const SubmitButton = styled.button`
  border: 1px solid white;
  background: #fab337;
  border-radius: 15px;
  height: 40px;
  width: 100px;
  font-weight: 600px;
  font-family: "Source Sans Pro", sans-serif;
`;

//STYLE End

export default function AddToDo(todo) {
  return (
    <div>
      <TaskSubmit>
        <TaskInput
          type="text"
          placeholder="Task Name . . ."
          value={todo.title}
        />
        <SubmitButton>Add Task</SubmitButton>
      </TaskSubmit>
    </div>
  );
}
