import React from "react";
import styled from "@emotion/styled";

//STYLE Start

const WhatToDo = styled.div`
  background-color: yellowgreen;
`;

const ToDoItem = styled.div`
  font-size: 20px;
  color: red;
`;

//STYLE End

export default function ToDoList() {
  const todos = [
    {
      title: "Wake up",
      completed: false
    },
    {
      title: "Make coffee",
      completed: false
    },
    {
      title: "Get dressed",
      completed: false
    }
  ];
  return (
    <div>
      <WhatToDo>
        <ToDoItem>
          <h3>{todos[0].title}</h3>
        </ToDoItem>
        <ToDoItem>
          <h3>{todos[1].title}</h3>
        </ToDoItem>
        <ToDoItem>
          <h3>{todos[2].title}</h3>
        </ToDoItem>
      </WhatToDo>
    </div>
  );
}
