import React from "react";
import styled from "@emotion/styled";

//STYLE Start

const WhatToDo = styled.div`
  height: auto;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ToDoItem = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #392a68;
  margin: 5px;
  border-radius: 7px;
`;

const TaskTitle = styled.h4`
  font-size: 16px;
  color: #808ac5;
  width: 90px;
`;

const CompleteButton = styled.button`
  border: 1px solid white;
  background: #fab337;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  height: 25px;
  color: gray;
`;

const CancelButton = styled.button`
  border: 1px solid white;
  background: #f46468;
  font-size: 16px;
  color: gray;
  font-weight: bold;
  border-radius: 15px;
  height: 25px;
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
          <TaskTitle>{todos[0].title}</TaskTitle>
          <CompleteButton>Done</CompleteButton>
          <CancelButton>Abort</CancelButton>
        </ToDoItem>
        <ToDoItem>
          <TaskTitle>{todos[1].title}</TaskTitle>
          <CompleteButton>Done</CompleteButton>
          <CancelButton>Abort</CancelButton>
        </ToDoItem>
        <ToDoItem>
          <TaskTitle>{todos[2].title}</TaskTitle>
          <CompleteButton>Done</CompleteButton>
          <CancelButton>Abort</CancelButton>
        </ToDoItem>
      </WhatToDo>
    </div>
  );
}
