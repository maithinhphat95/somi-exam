import React from "react";
import "./App.scss";
import Body from "./layout/Body";
import Header from "./layout/Header";

function App() {
  return (
    <div className="note-app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
