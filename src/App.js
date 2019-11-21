import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

//STYLE Start
const AppTitle = styled.h1`
  color: #edeaea;
`;

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: rgba(255, 255, 255, 0.925);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//STYLE End

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <AppTitle>To Do List</AppTitle>
      <ToDoList />
      <AddToDo />
    </AppContainer>
  );
}

export default App;
