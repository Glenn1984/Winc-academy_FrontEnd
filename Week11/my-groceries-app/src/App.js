import React from "react"
import './styles/App.css';
import Container from "./Container"

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__style">
            <h1 className="header__text">Grocery Store</h1>
        </div>
      </header>
      <Container />
    </div>
  );
}

export default App;
