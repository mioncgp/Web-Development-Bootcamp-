import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Note from "./components/notes/note";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
