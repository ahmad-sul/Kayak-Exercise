import React from "react";
import Home from "./component/Home/Home";
import Container from "./context/Container";
import './App.css'

function App() {
  return (
    <Container>
      <div className="App bg-light">
        <Home />
      </div>
    </Container>
  );
}

export default App;
