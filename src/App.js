import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

//STYLE Start
const AppContainer = styled.div`
  text-align: center;
  background-color: #333;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: rgba(255, 255, 255, 0.925);
  display: flex;
  flex-direction: column;
`;
//STYLE End

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <h1>To Do List</h1>
      <ToDoList />
      <AddToDo />
    </AppContainer>
  );
}

export default App;
